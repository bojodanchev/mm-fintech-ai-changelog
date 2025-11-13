#!/bin/bash

# Bash script to fetch markdown changelog
# Usage: ./scripts/fetch-markdown.sh [output-file]

OUTPUT_FILE=${1:-"changelog.md"}
API_URL=${CHANGELOG_API_URL:-"http://localhost:3000/api/changelog/markdown"}

echo "Fetching changelog markdown from $API_URL..."

if command -v curl &> /dev/null; then
    curl -s "$API_URL" -o "$OUTPUT_FILE"
    if [ $? -eq 0 ]; then
        echo "✓ Changelog saved to: $OUTPUT_FILE"
        echo ""
        echo "You can now copy the contents of this file into your wiki."
    else
        echo "✗ Error fetching changelog"
        echo ""
        echo "Make sure the Next.js server is running:"
        echo "  npm run dev"
        exit 1
    fi
elif command -v wget &> /dev/null; then
    wget -q -O "$OUTPUT_FILE" "$API_URL"
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

