#!/usr/bin/env bash
set -euo pipefail

# ── Download yt-dlp binary for Vercel (Linux x86_64) ──────────────────────
BIN_DIR="bin"
mkdir -p "$BIN_DIR"

YT_DLP_URL="https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp_linux"
YT_DLP_BIN="$BIN_DIR/yt-dlp"

if [ ! -f "$YT_DLP_BIN" ]; then
  echo "→ Downloading yt-dlp…"
  curl -fSL "$YT_DLP_URL" -o "$YT_DLP_BIN"
  chmod +x "$YT_DLP_BIN"
  echo "✓ yt-dlp ready"
else
  echo "✓ yt-dlp already cached"
fi

# ── Build ─────────────────────────────────────────────────────────────────
echo "→ Building…"
pnpm run build
echo "✓ Build complete"

# ── Copy binary to Vercel serverless function output ──────────────────────
FUNC_OUTPUT=".vercel/output/functions/__server.func/bin"
if [ -d ".vercel/output/functions/__server.func" ]; then
  mkdir -p "$FUNC_OUTPUT"
  cp "$YT_DLP_BIN" "$FUNC_OUTPUT/yt-dlp"
  chmod +x "$FUNC_OUTPUT/yt-dlp"
  echo "✓ yt-dlp copied to server function"
fi
