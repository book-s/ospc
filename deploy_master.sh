#!/usr/bin/env sh


cd ./
rm -rf ./docs/.vitepress/dist
git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:book-s/ospc.git master