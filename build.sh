#!/usr/bin/env bash
set -e

echo "📦 Installing Python deps..."
pip install -r requirements.txt

echo "📦 Installing & building frontend..."
cd Frontend/TripAzGoFrontend
npm install
npm run build
cd ../../

echo "📥 Collecting static files..."
python manage.py collectstatic --noinput

echo "✅ Build complete!"