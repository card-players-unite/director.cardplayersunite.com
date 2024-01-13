#!/bin/bash

##

sourceDirectory=".."

appName="workr/updatr.py"

##

reset

clear

##

set -e

set -x

##

echo
echo "start cascade template design"
echo

##

find $sourceDirectory -iname "*.html" -exec python3 $appName {} \;
