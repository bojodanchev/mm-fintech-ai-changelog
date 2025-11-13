'use client'

import { ChangelogEntry as ChangelogEntryType } from '@/types'
import { format } from 'date-fns'

interface ChangelogEntryProps {
  entry: ChangelogEntryType
}

const typeColors = {
  feature: 'bg-blue-500/20 border-blue-500/50 text-blue-300',
  fix: 'bg-green-500/20 border-green-500/50 text-green-300',
  breaking: 'bg-red-500/20 border-red-500/50 text-red-300',
  chore: 'bg-gray-500/20 border-gray-500/50 text-gray-300',
  docs: 'bg-purple-500/20 border-purple-500/50 text-purple-300',
  release: 'bg-yellow-500/20 border-yellow-500/50 text-yellow-300',
}

const typeLabels = {
  feature: 'Feature',
  fix: 'Fix',
  breaking: 'Breaking',
  chore: 'Chore',
  docs: 'Docs',
  release: 'Release',
}

export default function ChangelogEntry({ entry }: ChangelogEntryProps) {
  const typeColor = typeColors[entry.type] || typeColors.chore
  const typeLabel = typeLabels[entry.type] || entry.type

  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5 hover:border-gray-700 transition-colors">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className={`px-2 py-1 rounded text-xs font-semibold border ${typeColor}`}>
              {typeLabel}
            </span>
            <span className="text-sm text-gray-500">{entry.repository}</span>
            {entry.version && (
              <span className="text-sm text-gray-400 font-mono">{entry.version}</span>
            )}
          </div>
          <p className="text-gray-200 mb-2">{entry.message}</p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>{entry.author}</span>
            <span>•</span>
            <span>{format(new Date(entry.date), 'MMM d, yyyy HH:mm')}</span>
            {entry.url && (
              <>
                <span>•</span>
                <a
                  href={entry.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  View {entry.sha ? `commit ${entry.sha.substring(0, 7)}` : 'release'}
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

