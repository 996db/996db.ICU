#!/usr/bin/env sh

set -e

commit=$(date "+Update site %Y-%m-%d %H:%M:%S")

# 生成静态文件
yarn build

# 进入生成的文件夹
cp -rf ./vuepress/* ./.deploy/

cd .deploy

git add -A
git commit -m "$commit"

git pull
git push git@github.com:996db/996db.ICU.git gh-pages

cd -
