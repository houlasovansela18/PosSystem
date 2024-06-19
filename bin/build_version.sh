#!/usr/bin/env sh

NODE_PATH=$(which node)

# Check if NODE_PATH is empty (node not found)
if [ -z "$NODE_PATH" ]; then
  echo "Node.js not found in PATH."
  exit 1
fi
# the string "#@" is used to parse comment from shell script to node cli.
$NODE_PATH semver.js "$@"
