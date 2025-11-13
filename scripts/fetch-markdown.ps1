# PowerShell script to fetch markdown changelog
# Usage: .\scripts\fetch-markdown.ps1 [repo-name] [output-file]
# Examples:
#   .\scripts\fetch-markdown.ps1                          # All repos -> changelog.md
#   .\scripts\fetch-markdown.ps1 "LLM Wiki"               # Auto -> wiki-changelog.md
#   .\scripts\fetch-markdown.ps1 "LLM Support Tickets"     # Auto -> support-tickets-changelog.md
#   .\scripts\fetch-markdown.ps1 "LLM Change Management"   # Auto -> change-management-changelog.md
#   .\scripts\fetch-markdown.ps1 "LLM Wiki" custom.md     # Custom output file

param(
    [string]$RepoName = "",
    [string]$OutputFile = "",
    [string]$ApiUrl = "http://localhost:3000/api/changelog/markdown"
)

# Auto-map repository names to their output files
$repoFileMap = @{
    "LLM Wiki" = "wiki-changelog.md"
    "llm-wiki" = "wiki-changelog.md"
    "LLM Support Tickets" = "support-tickets-changelog.md"
    "llm-support-tickets" = "support-tickets-changelog.md"
    "LLM Change Management" = "change-management-changelog.md"
    "llm-change-management" = "change-management-changelog.md"
}

# Auto-determine output file if not specified
if ($RepoName -and -not $OutputFile) {
    if ($repoFileMap.ContainsKey($RepoName)) {
        $OutputFile = $repoFileMap[$RepoName]
    } elseif ($repoFileMap.ContainsKey($RepoName.ToLower())) {
        $OutputFile = $repoFileMap[$RepoName.ToLower()]
    } else {
        # Default naming convention
        $OutputFile = "$($RepoName.ToLower().Replace(' ', '-'))-changelog.md"
    }
} elseif (-not $OutputFile) {
    $OutputFile = "changelog.md"
}

Write-Host "Fetching changelog markdown..." -ForegroundColor Cyan

# Build URL with optional repo filter
$url = $ApiUrl
if ($RepoName) {
    $encodedRepo = [System.Uri]::EscapeDataString($RepoName)
    $url += "?repo=$encodedRepo"
    Write-Host "Repository: $RepoName" -ForegroundColor Yellow
    Write-Host "Output file: $OutputFile" -ForegroundColor Yellow
} else {
    Write-Host "Fetching all repositories" -ForegroundColor Yellow
    Write-Host "Output file: $OutputFile" -ForegroundColor Yellow
}

try {
    $response = Invoke-WebRequest -Uri $url -Method GET
    
    if ($response.StatusCode -eq 200) {
        # Always overwrite the file (delete old, write new)
        if (Test-Path $OutputFile) {
            Remove-Item $OutputFile -Force
        }
        $response.Content | Out-File -FilePath $OutputFile -Encoding UTF8
        $lineCount = (Get-Content $OutputFile | Measure-Object -Line).Lines
        Write-Host "✓ Changelog refreshed and saved to: $OutputFile" -ForegroundColor Green
        Write-Host "  Total lines: $lineCount" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "You can now copy the contents of this file into your wiki." -ForegroundColor Yellow
    } else {
        Write-Host "Error: HTTP $($response.StatusCode)" -ForegroundColor Red
        exit 1
    }
} catch {
    Write-Host "Error fetching changelog:" -ForegroundColor Red
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
