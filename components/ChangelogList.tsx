'use client'

import { useEffect, useState } from 'react'
import ChangelogEntry from './ChangelogEntry'
import { ChangelogGroup } from '@/types'

export default function ChangelogList() {
  const [changelogs, setChangelogs] = useState<ChangelogGroup[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchChangelog() {
      try {
        const response = await fetch('/api/changelog')
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}))
          throw new Error(errorData.error || errorData.details || `HTTP ${response.status}: Failed to fetch changelog`)
        }
        const data = await response.json()
        console.log('[Frontend] Received changelog data:', data)
        console.log('[Frontend] Number of groups:', data.length)
        if (Array.isArray(data) && data.length > 0) {
          console.log('[Frontend] First group:', data[0])
        }
        setChangelogs(data)
      } catch (err) {
        console.error('[Frontend] Error fetching changelog:', err)
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchChangelog()
  }, [])

  if (loading) {
    return (
      <div className="space-y-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-8 bg-gray-800 rounded w-48 mb-4"></div>
            <div className="space-y-3">
              <div className="h-20 bg-gray-800 rounded"></div>
              <div className="h-20 bg-gray-800 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (error) {
    const isConnectionError = error.includes('Cannot connect to Gitea') || error.includes('timeout') || error.includes('UND_ERR_CONNECT_TIMEOUT')
    
    return (
      <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-6">
        <h2 className="text-red-400 font-semibold mb-2">Error</h2>
        <p className="text-red-300 mb-4">{error}</p>
        {isConnectionError && (
          <div className="mt-4 p-4 bg-yellow-900/20 border border-yellow-500/50 rounded">
            <h3 className="text-yellow-400 font-semibold mb-2">Network Connectivity Issue</h3>
            <p className="text-yellow-300 text-sm mb-2">
              Vercel's serverless functions cannot reach your Gitea instance. This usually means:
            </p>
            <ul className="text-yellow-300 text-sm list-disc list-inside space-y-1">
              <li>The Gitea server is behind a firewall or VPN</li>
              <li>The server is only accessible from internal networks</li>
              <li>The server is not publicly accessible from the internet</li>
            </ul>
            <p className="text-yellow-300 text-sm mt-3">
              <strong>Solutions:</strong> Make Gitea publicly accessible (with authentication), use a proxy/gateway, or set up webhooks instead of polling.
            </p>
          </div>
        )}
      </div>
    )
  }

  if (changelogs.length === 0) {
    return (
      <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8 text-center">
        <p className="text-gray-400">No changelog entries found.</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {changelogs.map((group) => (
        <div key={group.date} className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-300 border-b border-gray-800 pb-2">
            {group.date}
          </h2>
          <div className="space-y-3">
            {group.entries.map((entry) => (
              <ChangelogEntry key={entry.id} entry={entry} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

