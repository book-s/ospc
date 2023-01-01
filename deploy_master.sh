#!/usr/bin/env sh


cd ./
rm -rf ./docs/.vitepress/dist
rm -rf ./docs/.vitepress/cache
git init
git add .
git commit -m 'master'

git push -f git@github.com:book-s/ospc.git master