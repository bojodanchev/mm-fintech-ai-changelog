export interface GiteaCommit {
  sha: string
  commit: {
    message: string
    author: {
      name: string
      email: string
      date: string
    }
  }
  author?: {
    login: string
    avatar_url: string
  }
  html_url: string
}

export interface GiteaRelease {
  id: number
  tag_name: string
  name: string
  body: string
  published_at: string
  author: {
    login: string
    avatar_url: string
  }
  html_url: string
}

export interface ChangelogEntry {
  id: string
  type: 'feature' | 'fix' | 'breaking' | 'chore' | 'docs' | 'release'
  message: string
  repository: string
  author: string
  date: string
  sha?: string
  url?: string
  version?: string
}

export interface ChangelogGroup {
  date: string
  entries: ChangelogEntry[]
}

export interface RepoConfig {
  owner: string
  repo: string
  name?: string
}

