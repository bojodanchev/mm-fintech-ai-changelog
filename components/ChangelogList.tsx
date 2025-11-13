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
          throw new Error('Failed to fetch changelog')
        }
        const data = await response.json()
        setChangelogs(data)
      } catch (err) {
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
    return (
      <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-6">
        <h2 className="text-red-400 font-semibold mb-2">Error</h2>
        <p className="text-red-300">{error}</p>
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

