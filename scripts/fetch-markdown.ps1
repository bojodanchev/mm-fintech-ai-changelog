# PowerShell script to fetch markdown changelog
# Usage: .\scripts\fetch-markdown.ps1 [repo-name] [output-file]
# Examples:
#   .\scripts\fetch-markdown.ps1                          # All repos
#   .\scripts\fetch-markdown.ps1 "LLM Wiki"               # Specific repo
#   .\scripts\fetch-markdown.ps1 "LLM Wiki" wiki.md       # Custom output file

param(
    [string]$RepoName = "",
    [string]$OutputFile = "changelog.md",
    [string]$ApiUrl = "http://localhost:3000/api/changelog/markdown"
)

Write-Host "Fetching changelog markdown..." -ForegroundColor Cyan

# Build URL with optional repo filter
$url = $ApiUrl
if ($RepoName) {
    $url += "?repo=$([System.Web.HttpUtility]::UrlEncode($RepoName))"
    Write-Host "Filtering by repository: $RepoName" -ForegroundColor Yellow
} else {
    Write-Host "Fetching all repositories" -ForegroundColor Yellow
}

try {
    $response = Invoke-WebRequest -Uri $url -Method GET
    
    if ($response.StatusCode -eq 200) {
        $response.Content | Out-File -FilePath $OutputFile -Encoding UTF8
        Write-Host "✓ Changelog saved to: $OutputFile" -ForegroundColor Green
        Write-Host ""
        Write-Host "You can now copy the contents of this file into your wiki." -ForegroundColor Yellow
    } else {
        Write-Host "✗ Error: HTTP $($response.StatusCode)" -ForegroundColor Red
        exit 1
    }
} catch {
    Write-Host "✗ Error fetching changelog:" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    Write-Host ""
    Write-Host "Make sure the Next.js server is running:" -ForegroundColor Yellow
    Write-Host "  npm run dev" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Available repositories:" -ForegroundColor Yellow
    Write-Host "  - LLM Change Management" -ForegroundColor Cyan
    Write-Host "  - LLM Support Tickets" -ForegroundColor Cyan
    Write-Host "  - LLM Wiki" -ForegroundColor Cyan
    exit 1
}
