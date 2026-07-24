import { createServerFn } from '@tanstack/react-start'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import { fileURLToPath } from 'node:url'
import { dirname, resolve, join } from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const execFileAsync = promisify(execFile)

function extractVideoId(input: string): string | null {
  let m = input.match(/(?:v=|youtu\.be\/|shorts\/)([a-zA-Z0-9_-]{11})/)
  if (m) return m[1]
  m = input.match(/^[a-zA-Z0-9_-]{11}$/)
  return m ? m[0] : null
}

async function findYtDlp(): Promise<string> {
  const candidates = [
    // Vercel / serverless — binary bundled with serverAssets
    () => resolve(process.cwd(), 'bin', 'yt-dlp'),
    () => join(__dirname, '..', '..', 'bin', 'yt-dlp'),
    // Relative to module
    () => './bin/yt-dlp',
    // Local dev — system yt-dlp
    () => 'yt-dlp',
    // macOS local
    () => '/opt/homebrew/bin/yt-dlp',
    () => '/usr/local/bin/yt-dlp',
  ]

  for (const getPath of candidates) {
    const bin = getPath()
    try {
      await execFileAsync(bin, ['--version'], { timeout: 8000 })
      return bin
    } catch {
      continue
    }
  }

  throw new Error('yt-dlp not found')
}

async function ytDlp(args: string[], timeoutMs = 45000) {
  const bin = await findYtDlp()
  const { stdout } = await execFileAsync(bin, args, {
    timeout: timeoutMs,
    maxBuffer: 5 * 1024 * 1024, // 5MB
  })
  return stdout.trim()
}

export const getYtDirectUrl = createServerFn({ method: 'GET' })
  .validator((url: string) => {
    const trimmed = url?.trim()
    if (!trimmed) throw new Error('URL is required')
    const videoId = extractVideoId(trimmed)
    if (!videoId) throw new Error('Invalid YouTube URL')
    return trimmed
  })
  .handler(async ({ data: url }) => {
    // Use "best" — single combined format with video+audio (same as default yt-dlp -g fallback)
    const raw = await ytDlp([
      '-f', 'best',
      '--no-warnings',
      '--dump-json',
      url,
    ])

    let info: any
    try {
      info = JSON.parse(raw)
    } catch {
      throw new Error('Failed to parse video info')
    }

    if (!info || !info.title) {
      throw new Error('Could not extract video data')
    }

    return {
      url: info.url,
      title: info.title,
      quality: info.format_note ?? `${info.height ?? '?'}p`,
      duration: info.duration_string ?? `${info.duration ?? 0}`,
      thumbnail: info.thumbnail ?? null,
    }
  })
