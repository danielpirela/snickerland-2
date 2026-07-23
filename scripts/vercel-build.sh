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

# ── Build the app (Nitro serverAssets picks up bin/) ───────────────────────
echo "→ Building…"
pnpm run build
echo "✓ Build complete"
