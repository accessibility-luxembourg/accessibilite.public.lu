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
    export DISABLE_EN="true";
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
cp ./src/files/fr/rgaa4/* ./src/html/fr/rgaa4/files
cp ./src/files/fr/rgaa4.1/* ./src/html/fr/rgaa4.1/files
cp ./src/files/fr/rgaa4.1.2/* ./src/html/fr/rgaa4.1.2/files
cp ./src/files/fr/raweb1/* ./src/html/fr/raweb1/files
cp ./src/files/fr/general/* ./src/html/fr/files
cp ./src/static/* ./src/html

if [[ "$DISABLE_EN" != "true" ]]
then
    mkdir -p ./src/html/en/files
    mkdir -p ./src/html/en/raweb1/files
    mkdir -p ./src/html/en/raam1
    mkdir -p ./src/html/en/rapdf1
    mkdir -p ./src/html/en/tools
    mkdir -p ./src/html/en/support
    mkdir -p ./src/html/en/monitoring
    mkdir -p ./src/html/en/news/og
    cp ./src/files/en/raweb1/* ./src/html/en/raweb1/files
    cp ./src/files/en/general/* ./src/html/en/files
else
    echo "English version disabled!"
fi

node gen.js

en_files="./src/html/en/404.html ./src/html/en/nl-subscribe.html ./src/html/en/monitoring/audit-simpl.html ./src/html/en/news/feed.xml ./src/html/en/raweb1/*.html"
if [[ "$DISABLE_EN" == "true" ]]
then
    en_files=""
fi
npx parcel build ./src/html/index.html ./src/html/fr/404.html ./src/html/fr/nl-subscribe.html ./src/html/fr/monitoring/audit-simpl.html ./src/html/fr/news/feed.xml ./src/html/fr/rgaa4/*.html ./src/html/fr/rgaa4.1/*.html ./src/html/fr/rgaa4.1.2/*.html ./src/html/fr/raweb1/*.html $en_files

# english only
# npx parcel build ./src/html/index.html $en_files

cp ./src/html/robots.txt ./src/static/browserconfig.xml ./src/static/favicon.ico ./src/static/web.config ./src/img/twitter.jpg ./src/img/linkedin.jpg ./src/img/newsletter.png ./dist

cp -r ./content/fr/news/datasource ./dist/fr/news
cp -r ./src/html/fr/news/og ./dist/fr/news
cp -r ./content/fr/news/img ./dist/fr/news

if [[ "$DISABLE_EN" != "true" ]]
then
    mkdir -p ./dist/en/news
    cp -r ./content/en/news/datasource ./dist/en/news
    cp -r ./src/html/en/news/og ./dist/en/news
fi