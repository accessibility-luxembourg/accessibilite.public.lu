#!/bin/bash
branch=$(git rev-parse --abbrev-ref HEAD)
if [ $branch == "prod" ]; then
    export NODE_ENV="production";
fi
#export NODE_ENV="production"
rm -rf ./src/html/* ./dist/*

mkdir -p ./src/html/fr/files
mkdir -p ./src/html/fr/rgaa4/files
mkdir -p ./src/html/fr/rgaa4.1/files
mkdir -p ./src/html/fr/raam1
mkdir -p ./src/html/fr/tools
mkdir -p ./src/html/fr/support
mkdir -p ./src/html/fr/monitoring
mkdir -p ./src/html/fr/news

cp ./src/files/rgaa4/* ./src/html/fr/rgaa4/files
cp ./src/files/rgaa4.1/* ./src/html/fr/rgaa4.1/files
cp ./src/files/general/* ./src/html/fr/files
cp ./src/static/* ./src/html
node gen.js

npx parcel build  ./src/html/index.html ./src/html/fr/404.html ./src/html/fr/monitoring/audit-simpl.html ./src/html/fr/news/feed.xml
cp ./src/html/robots.txt ./src/static/browserconfig.xml ./src/static/favicon.ico ./src/static/web.config ./src/img/twitter.jpg ./src/img/linkedin.jpg ./dist

cp -r ./src/rapports ./dist/fr
cp -r ./content/news/datasource ./dist/fr/news

if [ $branch == "prod" ]; then
    npx subfont ./dist/index.html ./dist/fr/index.html -i -r
fi