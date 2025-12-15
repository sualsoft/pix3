#!/bin/bash
# rebuild.sh - Rebuild script for Vue assets

echo "🚀 Starting asset rebuild process..."

# Navigate to the project directory
cd "$(dirname "$0")"

echo "📦 Installing/updating npm dependencies..."
npm install

echo "🧹 Cleaning previous build..."
rm -rf public/build

echo "🔨 Building assets..."
npm run build

echo "✅ Build completed!"

# Check if build was successful
if [ -d "public/build" ]; then
    echo "📁 Build directory contents:"
    ls -la public/build
    echo "📄 Manifest file:"
    if [ -f "public/build/manifest.json" ]; then
        cat public/build/manifest.json | grep -E "(timelapse|drone)" || echo "No timelapse/drone entries found"
    else
        echo "❌ Manifest file not found"
    fi
else
    echo "❌ Build directory not found"
fi

echo "📋 Don't forget to upload the new build files to production!"