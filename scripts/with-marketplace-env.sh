#!/bin/sh
# Runs a command against the marketplace-dev Neon branch (.env.marketplace)
# and refuses to run if those settings point at the live database in .env.
set -e
cd "$(dirname "$0")/.."
[ -f .env.marketplace ] || { echo "Missing .env.marketplace" >&2; exit 1; }
host() { sed -n "s/^$2=\"*[^@]*@\([^/:?\"]*\).*/\1/p" "$1" | head -1 | sed 's/-pooler//'; }
live=$(host .env DATABASE_URL)
for key in DATABASE_URL DATABASE_URL_UNPOOLED; do
  branch=$(host .env.marketplace "$key")
  if [ -z "$branch" ] || [ "$branch" = "$live" ]; then
    echo "Refusing to run: $key in .env.marketplace is missing or points at the live database." >&2
    exit 1
  fi
done
set -a
. ./.env.marketplace
set +a
exec "$@"
