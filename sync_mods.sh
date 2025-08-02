#!/usr/bin/env bash

common_mods=$(comm -12 <(ls -1 client/mods | sort) <(ls -1 server/mods | sort))

for mod in $common_mods; do
  cp "client/mods/$mod" "common/mods/"
  rm "client/mods/$mod" "server/mods/$mod"
  echo "Moved mod: $mod"
done

echo "Done! Common mods have been moved to common/mods"
