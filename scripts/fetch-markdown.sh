#!/bin/bash

# Bash script to fetch markdown changelog
# Usage: ./scripts/fetch-markdown.sh [repo-name] [output-file]
# Examples:
#   ./scripts/fetch-markdown.sh                          # All repos
#   ./scripts/fetch-markdown.sh "LLM Wiki"               # Specific repo
#   ./scripts/fetch-markdown.sh "LLM Wiki" wiki.md       # Custom output file

REPO_NAME=${1:-""}
OUTPUT_FILE=${2:-"changelog.md"}
API_URL=${CHANGELOG_API_URL:-"http://localhost:3000/api/changelog/markdown"}

echo "Fetching changelog markdown..."

# Build URL with optional repo filter
URL="$API_URL"
if [ -n "$REPO_NAME" ]; then
    ENCODED_REPO=$(python3 -c "import urllib.parse; print(urllib.parse.quote('$REPO_NAME'))" 2>/dev/null || echo "$REPO_NAME")
    URL="${API_URL}?repo=${ENCODED_REPO}"
    echo "Filtering by repository: $REPO_NAME"
else
    echo "Fetching all repositories"
fi

if command -v curl &> /dev/null; then
    curl -s "$URL" -o "$OUTPUT_FILE"
    if [ $? -eq 0 ]; then
        echo "✓ Changelog saved to: $OUTPUT_FILE"
        echo ""
        echo "You can now copy the contents of this file into your wiki."
    else
        echo "✗ Error fetching changelog"
        echo ""
        echo "Make sure the Next.js server is running:"
        echo "  npm run dev"
        echo ""
        echo "Available repositories:"
        echo "  - LLM Change Management"
        echo "  - LLM Support Tickets"
        echo "  - LLM Wiki"
        exit 1
    fi
elif command -v wget &> /dev/null; then
    wget -q -O "$OUTPUT_FILE" "$URL"
    if [ $? -eq 0 ]; then
        echo "✓ Changelog saved to: $OUTPUT_FILE"
        echo ""
        echo "You can now copy the contents of this file into your wiki."
    else
        echo "✗ Error fetching changelog"
        exit 1
    fi
else
    echo "✗ Error: curl or wget is required"
    exit 1
fi
