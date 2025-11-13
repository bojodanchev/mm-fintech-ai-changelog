import { GiteaCommit, GiteaRelease, RepoConfig } from '@/types'

const GITEA_URL = process.env.GITEA_URL
const GITEA_TOKEN = process.env.GITEA_TOKEN

if (!GITEA_URL || !GITEA_TOKEN) {
  throw new Error('GITEA_URL and GITEA_TOKEN must be set in environment variables')
}

async function giteaRequest<T>(endpoint: string): Promise<T> {
  const url = `${GITEA_URL}/api/v1${endpoint}`
  const response = await fetch(url, {
    headers: {
      Authorization: `token ${GITEA_TOKEN}`,
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`Gitea API error: ${response.status} ${response.statusText}`)
  }

  return response.json()
}

export async function getCommits(
  owner: string,
  repo: string,
  limit: number = 50
): Promise<GiteaCommit[]> {
  try {
    const commits = await giteaRequest<GiteaCommit[]>(
      `/repos/${owner}/${repo}/commits?limit=${limit}`
    )
    return commits
  } catch (error) {
    console.error(`Error fetching commits for ${owner}/${repo}:`, error)
    return []
  }
}

export async function getReleases(
  owner: string,
  repo: string
): Promise<GiteaRelease[]> {
  try {
    const releases = await giteaRequest<GiteaRelease[]>(
      `/repos/${owner}/${repo}/releases`
    )
    return releases
  } catch (error) {
    console.error(`Error fetching releases for ${owner}/${repo}:`, error)
    return []
  }
}

export async function fetchAllReposData(repos: RepoConfig[]) {
  const commitsPromises = repos.map((repo) =>
    getCommits(repo.owner, repo.repo).then((commits) => ({
      repo: repo.name || `${repo.owner}/${repo.repo}`,
      owner: repo.owner,
      repoName: repo.repo,
      commits,
    }))
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

