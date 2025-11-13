# Fetch changelogs for all repositories
# Usage: .\scripts\fetch-all-repos.ps1

Write-Host "Fetching changelogs for all repositories...`n" -ForegroundColor Cyan

# Fetch each repository
.\scripts\fetch-markdown.ps1 "LLM Wiki"
.\scripts\fetch-markdown.ps1 "LLM Support Tickets"
.\scripts\fetch-markdown.ps1 "LLM Change Management"

Write-Host "`n✓ All changelogs refreshed!" -ForegroundColor Green
Write-Host "  - wiki-changelog.md" -ForegroundColor Cyan
Write-Host "  - support-tickets-changelog.md" -ForegroundColor Cyan
Write-Host "  - change-management-changelog.md" -ForegroundColor Cyan

