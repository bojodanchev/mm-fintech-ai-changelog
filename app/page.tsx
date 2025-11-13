import ChangelogList from '@/components/ChangelogList'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="mb-12">
          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            MM Fintech AI Changelog
          </h1>
          <p className="text-gray-400 text-lg">
            Latest changes and updates to internal products
          </p>
        </header>
        <ChangelogList />
      </div>
    </main>
  )
}

