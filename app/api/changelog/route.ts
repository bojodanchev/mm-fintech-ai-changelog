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
    
    if (!repos || repos.length === 0) {
      return NextResponse.json(
        { error: 'No repositories configured' },
        { status: 400 }
      )
    }
    
    const { commitsData, releasesData } = await fetchAllReposData(repos)
    const changelog = compileChangelog(commitsData, releasesData)
    
    return NextResponse.json(changelog)
  } catch (error) {
    console.error('Error generating changelog:', error)
    return NextResponse.json(
      { error: 'Failed to generate changelog', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

