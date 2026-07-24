#!/usr/bin/env bash
set -euo pipefail

# ── Build the app ─────────────────────────────────────────────────────────
echo "→ Building…"
pnpm run build
echo "✓ Build complete"
