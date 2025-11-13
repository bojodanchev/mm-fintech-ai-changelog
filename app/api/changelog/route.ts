import { NextResponse } from 'next/server'
import reposConfig from '@/config/repos.json'
import { fetchAllReposData } from '@/lib/gitea'
import { compileChangelog } from '@/lib/changelog'
import { RepoConfig } from '@/types'

export const dynamic = 'force-dynamic'
export const revalidate = 3600 // Revalidate every hour

export async function GET() {
  try {
    const repos = reposConfig as RepoConfig[]
    
    console.log('[Changelog API] Starting changelog generation')
    console.log('[Changelog API] Configured repos:', JSON.stringify(repos, null, 2))
    
    if (!repos || repos.length === 0) {
      return NextResponse.json(
        { error: 'No repositories configured' },
        { status: 400 }
      )
    }
    
    const { commitsData, releasesData } = await fetchAllReposData(repos)
    
    console.log('[Changelog API] Commits data:', commitsData.map(d => ({ repo: d.repo, count: d.commits.length })))
    console.log('[Changelog API] Releases data:', releasesData.map(d => ({ repo: d.repo, count: d.releases.length })))
    
    // Log detailed commit information
    commitsData.forEach(({ repo, commits }) => {
      console.log(`[Changelog API] Repo ${repo}: ${commits.length} commits`)
      if (commits.length > 0) {
        console.log(`[Changelog API] First commit structure:`, JSON.stringify(commits[0], null, 2))
      }
    })
    
    const changelog = compileChangelog(commitsData, releasesData)
    
    console.log('[Changelog API] Generated changelog groups:', changelog.length)
    if (changelog.length > 0) {
      console.log('[Changelog API] First group:', JSON.stringify(changelog[0], null, 2))
    }
    
    return NextResponse.json(changelog)
  } catch (error) {
    console.error('[Changelog API] Error generating changelog:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    const errorStack = error instanceof Error ? error.stack : undefined
    console.error('[Changelog API] Error stack:', errorStack)
    return NextResponse.json(
      { 
        error: 'Failed to generate changelog', 
        details: errorMessage,
        stack: process.env.NODE_ENV === 'development' ? errorStack : undefined
      },
      { status: 500 }
    )
  }
}

