import { NextResponse } from 'next/server'
import reposConfig from '@/config/repos.json'
import { fetchAllReposData } from '@/lib/gitea'
import { compileChangelog } from '@/lib/changelog'
import { RepoConfig } from '@/types'
import { format, parseISO } from 'date-fns'

export const dynamic = 'force-dynamic'
export const revalidate = 0 // Always fetch fresh data

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const repoFilter = searchParams.get('repo') // Filter by repository name
    
    let repos = reposConfig as RepoConfig[]
    
    // Filter by repository if specified
    if (repoFilter) {
      repos = repos.filter(
        (repo) => 
          repo.name?.toLowerCase() === repoFilter.toLowerCase() ||
          repo.repo.toLowerCase() === repoFilter.toLowerCase() ||
          `${repo.owner}/${repo.repo}`.toLowerCase() === repoFilter.toLowerCase()
      )
    }
    
    if (!repos || repos.length === 0) {
      return NextResponse.json(
        { error: repoFilter ? `No repository found matching: ${repoFilter}` : 'No repositories configured' },
        { status: 400 }
      )
    }
    
    const { commitsData, releasesData } = await fetchAllReposData(repos)
    const changelog = compileChangelog(commitsData, releasesData)
    
    // Generate markdown
    let markdown = '# MM Fintech AI Changelog\n\n'
    markdown += 'Latest changes and updates to internal products.\n\n'
    markdown += `*Last updated: ${format(new Date(), 'PPpp')}*\n\n`
    markdown += '---\n\n'
    
    const typeEmoji: Record<string, string> = {
      feature: '✨',
      fix: '🐛',
      breaking: '💥',
      chore: '🔧',
      docs: '📚',
      release: '🚀',
    }
    
    const typeLabels: Record<string, string> = {
      feature: 'Feature',
      fix: 'Fix',
      breaking: 'Breaking Change',
      chore: 'Chore',
      docs: 'Documentation',
      release: 'Release',
    }
    
    if (changelog.length === 0) {
      markdown += 'No changelog entries found.\n\n'
    } else {
      // Group entries by repository first, then by date
      const repoGroups = new Map<string, Map<string, ChangelogEntry[]>>()
      
      changelog.forEach((group) => {
        group.entries.forEach((entry) => {
          if (!repoGroups.has(entry.repository)) {
            repoGroups.set(entry.repository, new Map())
          }
          const repoDates = repoGroups.get(entry.repository)!
          if (!repoDates.has(group.date)) {
            repoDates.set(group.date, [])
          }
          repoDates.get(group.date)!.push(entry)
        })
      })
      
      // Generate markdown grouped by repository
      repoGroups.forEach((dates, repoName) => {
        markdown += `# ${repoName}\n\n`
        
        // Sort dates (newest first)
        const sortedDates = Array.from(dates.entries()).sort((a, b) => {
          try {
            const dateA = parseISO(a[1][0]?.date || '1970-01-01')
            const dateB = parseISO(b[1][0]?.date || '1970-01-01')
            return dateB.getTime() - dateA.getTime()
          } catch {
            return 0
          }
        })
        
        sortedDates.forEach(([date, entries]) => {
          markdown += `## ${date}\n\n`
          
          entries.forEach((entry) => {
            const emoji = typeEmoji[entry.type] || '📝'
            const label = typeLabels[entry.type] || entry.type
            
            // Clean up the message - remove extra newlines and format
            const cleanMessage = entry.message
              .split('\n')
              .map(line => line.trim())
              .filter(line => line.length > 0)
              .join(' ')
              .substring(0, 200) // Limit length
            
            markdown += `### ${emoji} ${label}\n\n`
            markdown += `${cleanMessage}\n\n`
            markdown += `- **Author:** ${entry.author}\n`
            
            try {
              const entryDate = parseISO(entry.date)
              markdown += `- **Date:** ${format(entryDate, 'PPpp')}\n`
            } catch {
              markdown += `- **Date:** ${entry.date}\n`
            }
            
            if (entry.url) {
              const shortSha = entry.sha?.substring(0, 7) || 'link'
              markdown += `- **View Commit:** [${shortSha}](${entry.url})\n`
            }
            
            if (entry.version) {
              markdown += `- **Version:** ${entry.version}\n`
            }
            
            markdown += '\n'
          })
          
          markdown += '---\n\n'
        })
        
        markdown += '\n\n'
      })
    }
    
    markdown += '\n---\n\n'
    markdown += '*This changelog is automatically generated from Gitea repositories.*\n'
    
    return new NextResponse(markdown, {
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        'Content-Disposition': 'inline; filename="changelog.md"',
      },
    })
  } catch (error) {
    console.error('[Changelog API] Error generating markdown:', error)
    return NextResponse.json(
      { 
        error: 'Failed to generate changelog', 
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

