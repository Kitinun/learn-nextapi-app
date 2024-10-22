#!/bin/bash
set -e

echo "🚀 Setting up production environment..."

# ติดตั้ง production dependencies
npm install --production

# ตั้งค่า environment
cp .env.example .env.production.local

# รัน Prisma migrations
npx prisma migrate deploy

# Build project
npm run build

echo "✅ Production setup complete!"