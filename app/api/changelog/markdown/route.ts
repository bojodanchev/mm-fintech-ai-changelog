import { NextResponse } from 'next/server'
import reposConfig from '@/config/repos.json'
import { fetchAllReposData } from '@/lib/gitea'
import { compileChangelog } from '@/lib/changelog'
import { RepoConfig } from '@/types'
import { format } from 'date-fns'

export const dynamic = 'force-dynamic'
export const revalidate = 3600

export async function GET() {
  try {
    const repos = reposConfig as RepoConfig[]
    
    if (!repos || repos.length === 0) {
      return NextResponse.json(
        { error: 'No repositories configured' },
        { status: 400 }
      )
    }
    
    const { commitsData, releasesData } = await fetchAllReposData(repos)
    const changelog = compileChangelog(commitsData, releasesData)
    
    // Generate markdown
    let markdown = '# MM Fintech AI Changelog\n\n'
    markdown += 'Latest changes and updates to internal products.\n\n'
    markdown += `*Last updated: ${new Date().toLocaleString()}*\n\n`
    markdown += '---\n\n'
    
    const typeEmoji: Record<string, string> = {
      feature: '✨',
      fix: '🐛',
      breaking: '💥',
      chore: '🔧',
      docs: '📚',
      release: '🚀',
    }
    
    changelog.forEach((group) => {
      markdown += `## ${group.date}\n\n`
      
      group.entries.forEach((entry) => {
        const emoji = typeEmoji[entry.type] || '📝'
        markdown += `### ${emoji} ${entry.type.charAt(0).toUpperCase() + entry.type.slice(1)}: ${entry.message}\n\n`
        markdown += `- **Repository:** ${entry.repository}\n`
        markdown += `- **Author:** ${entry.author}\n`
        markdown += `- **Date:** ${format(new Date(entry.date), 'PPpp')}\n`
        if (entry.url) {
          markdown += `- **View:** [Commit ${entry.sha?.substring(0, 7) || 'link'}](${entry.url})\n`
        }
        markdown += '\n'
      })
      
      markdown += '---\n\n'
    })
    
    return new NextResponse(markdown, {
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
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

