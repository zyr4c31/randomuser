#!/usr/bin/env sh

# abort on errors
set -e

git init
git add -A
git commit -m 'feat:query, first commit'
git remote add origin git@github.com:zyr4c31/randomuser.git
git branch -M master
git push -u origin master

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:zyr4c31/randomuser.git master

cd -