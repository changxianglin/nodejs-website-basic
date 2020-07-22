#!/bin/sh
cd /Users/zhourong/coding/nodejs-website-basic/blog-1/logs
cp access.log $(date +%Y-%m-%d).access.log
echo "" > access.log