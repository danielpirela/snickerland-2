import { createServerFn } from '@tanstack/react-start'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import { writeFile, unlink } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { randomUUID } from 'node:crypto'

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

  // yt-dlp requires Netscape-format cookies file (rejects --add-header)
  let cookieFile: string | undefined
  if (cookies) {
    cookieFile = join(tmpdir(), `yt-${randomUUID()}.txt`)
    const netscapeCookies = cookies.includes('\t') 
      ? cookies 
      : cookies.split(';').map(c => c.trim()).filter(Boolean)
          .map(c => {
            const [name, ...value] = c.split('=')
            return `.youtube.com\tTRUE\t/\tTRUE\t0\t${name}\t${value.join('=')}`
          }).join('\n')
    
    await writeFile(cookieFile, 
      '# Netscape HTTP Cookie File\n' + netscapeCookies + '\n', 
      'utf-8')
  }

  const cookieArgs = cookieFile ? ['--cookies', cookieFile] : []

  try {
    // Get the direct URL (-g) instead of dumping JSON
    const { stdout: directUrl } = await execFileAsync(bin, [
      ...cookieArgs,
      '-f', 'best',
      '-g',
      '--no-warnings',
      url,
    ], { timeout: 45000, maxBuffer: 1024 * 1024 })

    // Get metadata separately (without format restriction)
    const { stdout: json } = await execFileAsync(bin, [
      ...cookieArgs,
      '--dump-json',
      '--no-warnings',
      url,
    ], { timeout: 30000, maxBuffer: 1024 * 1024 })

    let info: any
    try { info = JSON.parse(json.trim()) } catch {
      throw new Error('Failed to parse video info')
    }

    return {
      url: directUrl.trim(),
      title: info.title,
      quality: info.format_note ?? `${info.height ?? '?'}p`,
      duration: info.duration_string ?? `${info.duration ?? 0}`,
      thumbnail: info.thumbnail ?? null,
    }
  } finally {
    if (cookieFile) await unlink(cookieFile).catch(() => {})
  }
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
