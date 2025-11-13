# MM Fintech AI Changelog

A modern, dark-themed changelog application that automatically fetches and displays changes from Gitea repositories.

## Features

- 🎨 Dark-themed modern UI
- 📦 Fetches commits and releases from multiple Gitea repositories
- 🔄 Automatic changelog compilation and categorization
- 🚀 Deployable on Vercel
- 📱 Responsive design

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Repositories

Edit `config/repos.json` to include your Gitea repositories:

```json
[
  {
    "owner": "your-username",
    "repo": "your-repo-name",
    "name": "Display Name (optional)"
  }
]
```

### 3. Set Environment Variables

Create a `.env.local` file in the root directory:

```env
GITEA_URL=https://your-gitea-instance.com
GITEA_TOKEN=your_personal_access_token_here
```

To create a Gitea personal access token:
1. Go to your Gitea instance
2. Navigate to Settings → Applications → Generate New Token
3. Give it a name and select appropriate permissions (read access to repositories)
4. Copy the token to your `.env.local` file

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the changelog.

## Deployment on Vercel

### 1. Push to Git Repository

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to [Vercel](https://vercel.com)
2. Import your Git repository
3. Add environment variables:
   - `GITEA_URL`: Your Gitea instance URL
   - `GITEA_TOKEN`: Your Gitea personal access token
4. Deploy

### 3. Configure Repositories

After deployment, you can update `config/repos.json` and push changes. The changelog will automatically update.

## How It Works

1. The application reads repository configuration from `config/repos.json`
2. Fetches commits and releases from each configured Gitea repository
3. Parses commit messages to categorize changes (features, fixes, breaking changes, etc.)
4. Groups changes by date
5. Displays them in a modern, dark-themed UI

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

