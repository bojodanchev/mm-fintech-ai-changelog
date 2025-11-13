import { ChangelogEntry, ChangelogGroup, GiteaCommit, GiteaRelease } from '@/types'
import { format, parseISO } from 'date-fns'

function parseCommitMessage(message: string): {
  type: ChangelogEntry['type']
  cleanMessage: string
} {
  const lowerMessage = message.toLowerCase().trim()
  
  // Check for conventional commits format
  const conventionalCommitRegex = /^(feat|feature|fix|bugfix|chore|docs|style|refactor|perf|test|breaking|breaking change)(\(.+\))?:\s*(.+)/i
  const match = message.match(conventionalCommitRegex)
  
  if (match) {
    const [, type, , cleanMessage] = match
    const normalizedType = type.toLowerCase()
    
    let entryType: ChangelogEntry['type'] = 'chore'
    if (normalizedType.includes('feat') || normalizedType.includes('feature')) {
      entryType = 'feature'
    } else if (normalizedType.includes('fix') || normalizedType.includes('bugfix')) {
      entryType = 'fix'
    } else if (normalizedType.includes('breaking')) {
      entryType = 'breaking'
    } else if (normalizedType.includes('docs')) {
      entryType = 'docs'
    } else if (normalizedType.includes('chore')) {
      entryType = 'chore'
    }
    
    return { type: entryType, cleanMessage: cleanMessage.trim() }
  }
  
  // Fallback: try to detect type from keywords
  if (lowerMessage.includes('breaking') || lowerMessage.includes('breaking change')) {
    return { type: 'breaking', cleanMessage: message }
  }
  if (lowerMessage.startsWith('feat') || lowerMessage.includes('add') || lowerMessage.includes('new')) {
    return { type: 'feature', cleanMessage: message }
  }
  if (lowerMessage.startsWith('fix') || lowerMessage.includes('bug') || lowerMessage.includes('error')) {
    return { type: 'fix', cleanMessage: message }
  }
  if (lowerMessage.includes('doc') || lowerMessage.includes('readme')) {
    return { type: 'docs', cleanMessage: message }
  }
  
  return { type: 'chore', cleanMessage: message }
}

function createChangelogEntryFromCommit(
  commit: GiteaCommit,
  repository: string
): ChangelogEntry {
  const { type, cleanMessage } = parseCommitMessage(commit.commit.message)
  
  return {
    id: `commit-${commit.sha}`,
    type,
    message: cleanMessage,
    repository,
    author: commit.author?.login || commit.commit.author.name,
    date: commit.commit.author.date,
    sha: commit.sha,
    url: commit.html_url,
  }
}

function createChangelogEntryFromRelease(
  release: GiteaRelease,
  repository: string
): ChangelogEntry {
  return {
    id: `release-${release.id}`,
    type: 'release',
    message: release.body || release.name,
    repository,
    author: release.author.login,
    date: release.published_at,
    version: release.tag_name,
    url: release.html_url,
  }
}

export function compileChangelog(
  commitsData: Array<{ repo: string; commits: GiteaCommit[] }>,
  releasesData: Array<{ repo: string; releases: GiteaRelease[] }>
): ChangelogGroup[] {
  const entries: ChangelogEntry[] = []
  
  // Add commits
  commitsData.forEach(({ repo, commits }) => {
    commits.forEach((commit) => {
      entries.push(createChangelogEntryFromCommit(commit, repo))
    })
  })
  
  // Add releases
  releasesData.forEach(({ repo, releases }) => {
    releases.forEach((release) => {
      entries.push(createChangelogEntryFromRelease(release, repo))
    })
  })
  
  // Sort by date (newest first)
  entries.sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    return dateB - dateA
  })
  
  // Group by date
  const groupsMap = new Map<string, ChangelogEntry[]>()
  
  entries.forEach((entry) => {
    const date = parseISO(entry.date)
    const dateKey = format(date, 'MMMM d, yyyy')
    
    if (!groupsMap.has(dateKey)) {
      groupsMap.set(dateKey, [])
    }
    
    groupsMap.get(dateKey)!.push(entry)
  })
  
  // Convert to array and sort by date (newest first)
  const groups: ChangelogGroup[] = Array.from(groupsMap.entries())
    .map(([date, entries]) => ({
      date,
      entries: entries.sort((a, b) => {
        const dateA = new Date(a.date).getTime()
        const dateB = new Date(b.date).getTime()
        return dateB - dateA
      }),
    }))
    .sort((a, b) => {
      const dateA = parseISO(a.entries[0]?.date || '1970-01-01')
      const dateB = parseISO(b.entries[0]?.date || '1970-01-01')
      return dateB.getTime() - dateA.getTime()
    })
  
  return groups
}

