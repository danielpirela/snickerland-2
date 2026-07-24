import { createServerFn } from '@tanstack/react-start'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import { join } from 'node:path'

const execFileAsync = promisify(execFile)

function extractVideoId(input: string): string | null {
  let m = input.match(/(?:v=|youtu\.be\/|shorts\/)([a-zA-Z0-9_-]{11})/)
  if (m) return m[1]
  m = input.match(/^[a-zA-Z0-9_-]{11}$/)
  return m ? m[0] : null
}

async function findYtDlp(): Promise<string> {
  const candidates = [
    () => join(process.cwd(), 'bin', 'yt-dlp'),
    () => join(process.cwd(), '..', 'bin', 'yt-dlp'),
    () => './bin/yt-dlp',
    () => 'yt-dlp',
    () => '/opt/homebrew/bin/yt-dlp',
    () => '/usr/local/bin/yt-dlp',
  ]

  for (const getPath of candidates) {
    const bin = getPath()
    try {
      await execFileAsync(bin, ['--version'], { timeout: 8000 })
      return bin
    } catch { continue }
  }

  throw new Error('yt-dlp not found')
}

async function runYtDlp(url: string, cookies?: string): Promise<any> {
  const bin = await findYtDlp()
  const args = ['-f', 'best', '--no-warnings', '--dump-json']

  // Pass cookies via header (more reliable than --cookies for simple strings)
  if (cookies) {
    args.push('--add-header', `Cookie: ${cookies}`)
  }

  const { stdout } = await execFileAsync(bin, args.concat(url), {
    timeout: 45000,
    maxBuffer: 5 * 1024 * 1024,
  })

  let info: any
  try { info = JSON.parse(stdout.trim()) } catch {
    throw new Error('Failed to parse video info')
  }

  if (!info?.title) throw new Error('Could not extract video data')
  return info
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
    const cookies = process.env.YT_COOKIES?.trim()
    const info = await runYtDlp(url, cookies)

    return {
      url: info.url,
      title: info.title,
      quality: info.format_note ?? `${info.height ?? '?'}p`,
      duration: info.duration_string ?? `${info.duration ?? 0}`,
      thumbnail: info.thumbnail ?? null,
    }
  })
