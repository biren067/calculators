#!/bin/bash

# Quick Start Script for Financial Calculator Website

echo "================================"
echo "Financial Calculator Website"
echo "Quick Start Guide"
echo "================================"
echo ""

# Check Node.js installation
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed"
else
    echo "✅ Dependencies already installed"
fi

echo ""
echo "================================"
echo "Choose an option:"
echo "================================"
echo "1) Run development server (npm run dev)"
echo "2) Build for production (npm run build)"
echo "3) Start production server (npm start)"
echo "4) Run linter (npm run lint)"
echo ""

read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        echo "🚀 Starting development server..."
        echo "📍 Open http://localhost:3000 in your browser"
        npm run dev
        ;;
    2)
        echo "🔨 Building project for production..."
        npm run build
        if [ $? -eq 0 ]; then
            echo "✅ Build completed successfully!"
        else
            echo "❌ Build failed. Check error messages above."
        fi
        ;;
    3)
        echo "🚀 Starting production server..."
        npm start
        ;;
    4)
        echo "🔍 Running linter..."
        npm run lint
        ;;
    *)
        echo "❌ Invalid choice"
        exit 1
        ;;
esac
