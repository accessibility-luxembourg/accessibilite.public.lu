#!/bin/bash
set -e

#import .env
if [ -f .env ]
then
    set -a && source .env && set +a
fi

branch=$(git rev-parse --abbrev-ref HEAD)
if [ $branch == "prod" ]; then
    export NODE_ENV="production";
fi
#export NODE_ENV="production"

rm -rf ./dist/*

mkdir -p ./dist/fr/files
mkdir -p ./dist/fr/rgaa4/files
mkdir -p ./dist/fr/rgaa4.1/files
mkdir -p ./dist/fr/rgaa4.1.2/files
mkdir -p ./dist/fr/raweb1/files
mkdir -p ./dist/fr/raweb1.1/files
mkdir -p ./dist/fr/raam1
mkdir -p ./dist/fr/raam1.1
mkdir -p ./dist/fr/rapdf1
mkdir -p ./dist/fr/tools
mkdir -p ./dist/fr/support
mkdir -p ./dist/fr/monitoring
mkdir -p ./dist/fr/news/og
cp ./src/files/fr/rgaa4/* ./dist/fr/rgaa4/files
cp ./src/files/fr/rgaa4.1/* ./dist/fr/rgaa4.1/files
cp ./src/files/fr/rgaa4.1.2/* ./dist/fr/rgaa4.1.2/files
cp ./src/files/fr/raweb1/* ./dist/fr/raweb1/files
cp ./src/files/fr/raweb1.1/* ./dist/fr/raweb1.1/files
cp ./src/files/fr/general/* ./dist/fr/files
cp ./src/static/* ./dist


mkdir -p ./dist/en/files
mkdir -p ./dist/en/raweb1/files
mkdir -p ./dist/en/raweb1.1/files
mkdir -p ./dist/en/raam1    
mkdir -p ./dist/en/raam1.1
mkdir -p ./dist/en/rapdf1
mkdir -p ./dist/en/tools
mkdir -p ./dist/en/support
mkdir -p ./dist/en/monitoring
mkdir -p ./dist/en/news/og
cp ./src/files/en/raweb1/* ./dist/en/raweb1/files
cp ./src/files/en/raweb1.1/* ./dist/en/raweb1.1/files
cp ./src/files/en/general/* ./dist/en/files

node gen.js

cp ./src/static/browserconfig.xml ./src/static/site.webmanifest ./src/static/favicon.ico ./src/img/twitter.jpg ./src/img/linkedin.jpg ./src/img/newsletter.png ./dist

cp -r ./content/fr/news/datasource ./dist/fr/news
cp -r ./content/fr/news/img ./dist/fr/news
cp -r ./content/fr/news/*.js ./dist/fr/news
cp -r ./src/css ./dist/
cp -r ./src/js ./dist/
cp -r ./src/img ./dist/
cp -r ./src/fonts ./dist/
mkdir -p ./dist/en/news
cp -r ./content/en/news/datasource ./dist/en/news
cp -r ./content/en/news/img ./dist/en/news