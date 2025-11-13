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
  // Handle Gitea's response structure - it might be different
  // Gitea API returns: { sha, commit: { message, author: { name, email, date } }, author: { login, ... }, html_url }
  const commitMessage = commit.commit?.message || (commit as any).message || 'No message'
  const commitAuthor = commit.commit?.author || (commit as any).author
  const commitDate = commitAuthor?.date || (commit as any).created || (commit as any).date || new Date().toISOString()
  const authorName = commit.author?.login || commitAuthor?.name || (commit as any).author?.name || (commit as any).author?.login || 'Unknown'
  const commitSha = commit.sha || (commit as any).id || 'unknown'
  const commitUrl = commit.html_url || (commit as any).url || (commit as any).html_url || ''
  
  if (!commitMessage || commitMessage === 'No message') {
    console.warn(`[Changelog] Commit ${commitSha} has no message`)
  }
  
  const { type, cleanMessage } = parseCommitMessage(commitMessage)
  
  return {
    id: `commit-${commitSha}`,
    type,
    message: cleanMessage,
    repository,
    author: authorName,
    date: commitDate,
    sha: commitSha,
    url: commitUrl,
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
  
  console.log('[Changelog] Starting compilation')
  console.log('[Changelog] Total repos with commits:', commitsData.length)
  console.log('[Changelog] Total repos with releases:', releasesData.length)
  
  // Add commits
  commitsData.forEach(({ repo, commits }) => {
    console.log(`[Changelog] Processing ${commits.length} commits for ${repo}`)
    commits.forEach((commit, index) => {
      try {
        const entry = createChangelogEntryFromCommit(commit, repo)
        entries.push(entry)
        if (index === 0) {
          console.log(`[Changelog] Sample entry from ${repo}:`, JSON.stringify(entry, null, 2))
        }
      } catch (error) {
        console.error(`[Changelog] Error creating entry from commit:`, error, commit)
      }
    })
  })
  
  console.log(`[Changelog] Total entries created: ${entries.length}`)
  
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

