import { GiteaCommit, GiteaRelease, RepoConfig } from '@/types'

function getGiteaConfig() {
  const GITEA_URL = process.env.GITEA_URL
  const GITEA_TOKEN = process.env.GITEA_TOKEN

  if (!GITEA_URL || !GITEA_TOKEN) {
    throw new Error('GITEA_URL and GITEA_TOKEN must be set in environment variables')
  }

  return { GITEA_URL, GITEA_TOKEN }
}

async function giteaRequest<T>(endpoint: string): Promise<T> {
  const { GITEA_URL, GITEA_TOKEN } = getGiteaConfig()
  const url = `${GITEA_URL}/api/v1${endpoint}`
  
  console.log(`[Gitea] Fetching: ${url}`)
  
  const response = await fetch(url, {
    headers: {
      Authorization: `token ${GITEA_TOKEN}`,
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error(`[Gitea] API error ${response.status}:`, errorText)
    throw new Error(`Gitea API error: ${response.status} ${response.statusText} - ${errorText}`)
  }

  const data = await response.json()
  console.log(`[Gitea] Success: ${endpoint} - Received ${Array.isArray(data) ? data.length : 1} item(s)`)
  return data
}

export async function getCommits(
  owner: string,
  repo: string,
  limit: number = 50,
  sha: string = 'master'
): Promise<GiteaCommit[]> {
  try {
    console.log(`[Gitea] Fetching commits for ${owner}/${repo} (branch: ${sha})`)
    // Try master first, then main if master fails
    let commits: GiteaCommit[] = []
    try {
      commits = await giteaRequest<GiteaCommit[]>(
        `/repos/${owner}/${repo}/commits?sha=${sha}&limit=${limit}`
      )
    } catch (error) {
      // If master fails, try main branch
      if (sha === 'master') {
        console.log(`[Gitea] Master branch failed, trying main branch`)
        commits = await giteaRequest<GiteaCommit[]>(
          `/repos/${owner}/${repo}/commits?sha=main&limit=${limit}`
        )
      } else {
        throw error
      }
    }
    console.log(`[Gitea] Fetched ${commits?.length || 0} commits for ${owner}/${repo}`)
    if (commits && commits.length > 0) {
      console.log(`[Gitea] Sample commit:`, JSON.stringify(commits[0], null, 2))
    }
    return commits || []
  } catch (error) {
    console.error(`[Gitea] Error fetching commits for ${owner}/${repo}:`, error)
    throw error // Re-throw to see the actual error
  }
}

export async function getReleases(
  owner: string,
  repo: string
): Promise<GiteaRelease[]> {
  try {
    console.log(`[Gitea] Fetching releases for ${owner}/${repo}`)
    const releases = await giteaRequest<GiteaRelease[]>(
      `/repos/${owner}/${repo}/releases`
    )
    console.log(`[Gitea] Fetched ${releases?.length || 0} releases for ${owner}/${repo}`)
    return releases || []
  } catch (error) {
    console.error(`[Gitea] Error fetching releases for ${owner}/${repo}:`, error)
    // Releases are optional, so return empty array on error
    return []
  }
}

export async function fetchAllReposData(repos: RepoConfig[]) {
  const commitsPromises = repos.map((repo) =>
    getCommits(repo.owner, repo.repo)
      .then((commits) => {
        console.log(`[Gitea] Successfully fetched ${commits.length} commits for ${repo.owner}/${repo.repo}`)
        return {
          repo: repo.name || `${repo.owner}/${repo.repo}`,
          owner: repo.owner,
          repoName: repo.repo,
          commits,
        }
      })
      .catch((error) => {
        console.error(`[Gitea] Failed to fetch commits for ${repo.owner}/${repo.repo}:`, error)
        return {
          repo: repo.name || `${repo.owner}/${repo.repo}`,
          owner: repo.owner,
          repoName: repo.repo,
          commits: [],
        }
      })
  )

  const releasesPromises = repos.map((repo) =>
    getReleases(repo.owner, repo.repo).then((releases) => ({
      repo: repo.name || `${repo.owner}/${repo.repo}`,
      owner: repo.owner,
      repoName: repo.repo,
      releases,
    }))
  )

  const [commitsData, releasesData] = await Promise.all([
    Promise.all(commitsPromises),
    Promise.all(releasesPromises),
  ])

  return { commitsData, releasesData }
}

