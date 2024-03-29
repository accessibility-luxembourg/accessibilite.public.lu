#!/bin/bash
set -e
branch=$(git rev-parse --abbrev-ref HEAD)
if [ $branch == "prod" ]; then
    export NODE_ENV="production";
fi
#export NODE_ENV="production"
rm -rf ./src/html/* ./dist/*

mkdir -p ./src/html/fr/files
mkdir -p ./src/html/fr/rgaa4/files
mkdir -p ./src/html/fr/rgaa4.1/files
mkdir -p ./src/html/fr/rgaa4.1.2/files
mkdir -p ./src/html/fr/raweb1/files
mkdir -p ./src/html/fr/raam1
mkdir -p ./src/html/fr/rapdf1
mkdir -p ./src/html/fr/tools
mkdir -p ./src/html/fr/support
mkdir -p ./src/html/fr/monitoring
mkdir -p ./src/html/fr/news/og

cp ./src/files/rgaa4/* ./src/html/fr/rgaa4/files
cp ./src/files/rgaa4.1/* ./src/html/fr/rgaa4.1/files
cp ./src/files/rgaa4.1.2/* ./src/html/fr/rgaa4.1.2/files
cp ./src/files/raweb1/* ./src/html/fr/raweb1/files
cp ./src/files/general/* ./src/html/fr/files
cp ./src/static/* ./src/html
node gen.js

npx parcel build ./src/html/index.html ./src/html/fr/404.html ./src/html/fr/nl-success.html ./src/html/fr/monitoring/audit-simpl.html ./src/html/fr/news/feed.xml ./src/html/fr/rgaa4/*.html ./src/html/fr/rgaa4.1/*.html ./src/html/fr/rgaa4.1.2/*.html ./src/html/fr/raweb1/*.html

cp ./src/html/robots.txt ./src/static/browserconfig.xml ./src/static/favicon.ico ./src/static/web.config ./src/img/twitter.jpg ./src/img/linkedin.jpg ./src/img/newsletter.png ./dist

cp -r ./content/news/datasource ./dist/fr/news
cp -r ./content/news/img ./dist/fr/news
cp -r ./src/html/fr/news/og ./dist/fr/news
