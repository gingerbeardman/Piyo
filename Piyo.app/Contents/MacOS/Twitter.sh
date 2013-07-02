#!/bin/sh
iam="$0"
profDir=$(dirname "$iam")
profDir=$(dirname "$profDir")
profDir="$profDir/Profile"
exec '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' --app="http://twitter.com" --window-size=532,666 --disk-cache-dir="/dev/null/" --disk-cache-size=1 --user-data-dir="$profDir" "$@"

# --window-position=1391,32