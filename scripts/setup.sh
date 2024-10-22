#!/bin/bash

# Install dependencies
npm install

# Create .env file
if [ ! -f .env ]; then
    cp .env.example .env
    echo "Created .env file. Please update with your settings."
fi

# Setup database
npx prisma generate
npx prisma migrate dev

# Start development server
npm run dev