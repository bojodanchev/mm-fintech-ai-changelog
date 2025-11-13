# PowerShell script to fetch markdown changelog
# Usage: .\scripts\fetch-markdown.ps1 [output-file]

param(
    [string]$OutputFile = "changelog.md",
    [string]$ApiUrl = "http://localhost:3000/api/changelog/markdown"
)

Write-Host "Fetching changelog markdown from $ApiUrl..." -ForegroundColor Cyan

try {
    $response = Invoke-WebRequest -Uri $ApiUrl -Method GET
    
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
    exit 1
}

