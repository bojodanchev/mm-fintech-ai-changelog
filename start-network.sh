#!/bin/bash

echo "========================================"
echo "MM Fintech AI Changelog - Network Mode"
echo "========================================"
echo ""

# Get local IP address
IP=$(hostname -I | awk '{print $1}')
echo "Your local IP address: $IP"
echo ""

echo "Building production version..."
npm run build
if [ $? -ne 0 ]; then
    echo "Build failed! Please check the errors above."
    exit 1
fi

echo ""
echo "========================================"
echo "Server starting..."
echo "========================================"
echo ""
echo "Your colleagues can access the changelog at:"
echo "  http://$IP:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm start -- -H 0.0.0.0

