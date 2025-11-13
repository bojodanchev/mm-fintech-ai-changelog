# MM Fintech AI Changelog

A modern, dark-themed changelog application that automatically fetches and displays changes from Gitea repositories.

## Features

- 🎨 Dark-themed modern UI
- 📦 Fetches commits and releases from multiple Gitea repositories
- 🔄 Automatic changelog compilation and categorization
- 🏠 Optimized for local development (can access internal Gitea instances)
- 📱 Responsive design

## Local Development Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Repositories

Edit `config/repos.json` to include your Gitea repositories:

```json
[
  {
    "owner": "Artificial",
    "repo": "llm-change-management",
    "name": "LLM Change Management"
  }
]
```

### 3. Set Environment Variables

Create a `.env.local` file in the root directory:

```env
GITEA_URL=https://gitea.speedy.io
GITEA_TOKEN=525310a02f1ca34e62d9ece1414bacb553495817
```

**Note:** The `.env.local` file is already in `.gitignore` and won't be committed to Git.

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the changelog.

The application will automatically fetch commits and releases from your configured Gitea repositories and display them in a beautiful changelog format.

### 5. Production Build (Optional)

To build and run a production version locally:

```bash
npm run build
npm start
```

This will start the production server on [http://localhost:3000](http://localhost:3000).

## Deployment Options

### Local Development (Recommended for Internal Gitea)

This application is optimized for local development, especially when your Gitea instance is behind a firewall or VPN. Simply run `npm run dev` and access it at `http://localhost:3000`.

### Vercel Deployment (For Public Gitea Instances)

If your Gitea instance is publicly accessible, you can deploy to Vercel:

1. Push to Git Repository
2. Go to [Vercel](https://vercel.com) and import your repository
3. Add environment variables:
   - `GITEA_URL`: Your Gitea instance URL
   - `GITEA_TOKEN`: Your Gitea personal access token
4. Deploy

**Note:** Vercel serverless functions cannot access internal/private Gitea instances. Use local development for internal Gitea servers.

## How It Works

1. The application reads repository configuration from `config/repos.json`
2. Fetches commits and releases from each configured Gitea repository
3. Parses commit messages to categorize changes (features, fixes, breaking changes, etc.)
4. Groups changes by date
5. Displays them in a modern, dark-themed UI

## Quick Commands

### Fetch Individual Repository Changelogs

```powershell
# LLM Wiki
.\scripts\fetch-markdown.ps1 "LLM Wiki"

# LLM Support Tickets  
.\scripts\fetch-markdown.ps1 "LLM Support Tickets"

# LLM Change Management
.\scripts\fetch-markdown.ps1 "LLM Change Management"
```

Each command automatically updates its corresponding markdown file:
- `wiki-changelog.md` - LLM Wiki
- `support-tickets-changelog.md` - LLM Support Tickets
- `change-management-changelog.md` - LLM Change Management

**Note:** Files are automatically overwritten (old content replaced) to keep them clean and up-to-date.

### Fetch All Repositories

```powershell
.\scripts\fetch-all-repos.ps1
```

This refreshes all three repository changelogs at once.

## Commit Message Format

The application supports conventional commits format:

- `feat:` or `feature:` - New features
- `fix:` or `bugfix:` - Bug fixes
- `breaking:` or `breaking change:` - Breaking changes
- `docs:` - Documentation changes
- `chore:` - Maintenance tasks

If commits don't follow conventional format, the app will attempt to detect the type from keywords.

## Project Structure

```
├── app/
│   ├── api/changelog/route.ts  # API endpoint
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Main page
│   └── globals.css             # Global styles
├── components/
│   ├── ChangelogEntry.tsx      # Individual entry component
│   └── ChangelogList.tsx       # List component
├── config/
│   └── repos.json              # Repository configuration
├── lib/
│   ├── gitea.ts               # Gitea API client
│   └── changelog.ts           # Changelog compilation logic
└── types/
    └── index.ts               # TypeScript definitions
```

## License

Private - Internal use only

