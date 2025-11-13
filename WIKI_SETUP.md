# Wiki Integration Setup - Markdown Export

This guide shows you how to use the markdown export to integrate the changelog into your internal AI wiki.

## Quick Start

### Step 1: Start the Changelog Server

```bash
npm run dev
```

The server will start at `http://localhost:3000`

### Step 2: Fetch the Markdown

**Option A: Fetch all repositories (Windows):**
```powershell
.\scripts\fetch-markdown.ps1
```

**Option B: Fetch specific repository (Windows):**
```powershell
# Get changelog for LLM Wiki only
.\scripts\fetch-markdown.ps1 "LLM Wiki"

# Get changelog for LLM Support Tickets only
.\scripts\fetch-markdown.ps1 "LLM Support Tickets"

# Get changelog for LLM Change Management only
.\scripts\fetch-markdown.ps1 "LLM Change Management"
```

**Option C: Using the provided script (Linux/Mac):**
```bash
chmod +x scripts/fetch-markdown.sh

# All repos
./scripts/fetch-markdown.sh

# Specific repo
./scripts/fetch-markdown.sh "LLM Wiki"
```

**Option D: Using curl directly:**
```bash
# All repos
curl http://localhost:3000/api/changelog/markdown > changelog.md

# Specific repo
curl "http://localhost:3000/api/changelog/markdown?repo=LLM%20Wiki" > wiki-changelog.md
```

**Option E: Using PowerShell directly:**
```powershell
# All repos
Invoke-WebRequest -Uri "http://localhost:3000/api/changelog/markdown" -OutFile "changelog.md"

# Specific repo
Invoke-WebRequest -Uri "http://localhost:3000/api/changelog/markdown?repo=LLM%20Wiki" -OutFile "wiki-changelog.md"
```

### Step 3: Copy to Your Wiki

1. Open the generated `changelog.md` file
2. Copy all the contents
3. Paste into your wiki page
4. Save

## Using a Different Server URL

If your changelog is hosted on a different server:

**Windows:**
```powershell
$env:CHANGELOG_API_URL="http://your-server:3000/api/changelog/markdown"
.\scripts\fetch-markdown.ps1
```

**Linux/Mac:**
```bash
CHANGELOG_API_URL="http://your-server:3000/api/changelog/markdown" ./scripts/fetch-markdown.sh
```

## Automating Updates

### Option 1: Scheduled Task (Windows)

Create a scheduled task that runs:
```powershell
cd C:\path\to\changelog
npm run dev
.\scripts\fetch-markdown.ps1
```

### Option 2: Cron Job (Linux/Mac)

Add to crontab (`crontab -e`):
```bash
# Update changelog every hour
0 * * * * cd /path/to/changelog && ./scripts/fetch-markdown.sh && cp changelog.md /path/to/wiki/changelog.md
```

### Option 3: Manual Update

Simply run the fetch script whenever you want to update the wiki:
```bash
npm run dev  # In one terminal
.\scripts\fetch-markdown.ps1  # In another terminal
```

Then copy the updated markdown to your wiki.

## Direct API Access

You can also access the markdown directly in your browser:
- `http://localhost:3000/api/changelog/markdown`

Or if hosted on a server:
- `http://your-server:3000/api/changelog/markdown`

Just copy the content from the browser and paste into your wiki.

## Markdown Format

The generated markdown includes:
- ✨ Features
- 🐛 Fixes
- 💥 Breaking Changes
- 🔧 Chores
- 📚 Documentation
- 🚀 Releases

Each entry shows:
- Repository name
- Author
- Date and time
- Link to commit

## Troubleshooting

**Error: Cannot connect to server**
- Make sure `npm run dev` is running
- Check that port 3000 is not blocked
- Verify the API URL is correct

**Empty changelog**
- Check that repositories are configured in `config/repos.json`
- Verify Gitea credentials in `.env.local`
- Check server logs for errors

**Markdown not rendering in wiki**
- Some wikis require specific markdown syntax
- Try copying just a small section first to test
- Check your wiki's markdown support

## Next Steps

1. Set up the changelog server on an internal server
2. Create a scheduled task to update the markdown regularly
3. Set up a wiki page that displays the changelog
4. Optionally, create a webhook to auto-update when commits are pushed

