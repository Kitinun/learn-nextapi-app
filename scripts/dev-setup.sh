#!/bin/bash
set -e

echo "🚀 Setting up development environment..."

# ติดตั้ง dev dependencies
npm install

# ตั้งค่า environment
cp .env.example .env.development.local

# รัน Prisma migrations
npx prisma migrate dev

echo "✅ Development setup complete!"