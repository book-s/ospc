#!/usr/bin/env sh

set -e

npm run build

cd docs/.vitepress/dist

# 创建一个域名绑定文件信息
echo 'ospc.run' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:book-s/ospc.git master:gh-pages

cd -