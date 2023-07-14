npm run build
cd ./dist
whitelist=$(npx glyphhanger ./index.html --family="Fira Sans" --spider-limit=30)
echo "whitelist=$whitelist"
cd ../src/fonts
npx glyphhanger --formats=woff2 --LATIN --whitelist=$whitelist --subset=*.ttf
cd ../..
npm run build