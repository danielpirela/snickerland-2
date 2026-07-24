import { createServerFn } from '@tanstack/react-start'
import ytdl from '@distube/ytdl-core'

function extractVideoId(input: string): string | null {
  let m = input.match(/(?:v=|youtu\.be\/|shorts\/)([a-zA-Z0-9_-]{11})/)
  if (m) return m[1]
  m = input.match(/^[a-zA-Z0-9_-]{11}$/)
  return m ? m[0] : null
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
    // YouTube bot detection workaround: pass cookies if configured
    const cookieHeader = process.env.YT_COOKIES?.trim()

    const info = await ytdl.getInfo(url, {
      ...(cookieHeader ? {
        requestOptions: {
          headers: {
            cookie: cookieHeader,
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
          },
        },
      } : {
        requestOptions: {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
          },
        },
      }),
    })

    // Pick best format with both video and audio (no separate streams)
    const formats = info.formats.filter(
      (f) => f.hasVideo && f.hasAudio && f.container === 'mp4',
    )

    // Sort by quality (height), then by bitrate
    formats.sort((a, b) => {
      const ha = a.height ?? 0
      const hb = b.height ?? 0
      if (hb !== ha) return hb - ha
      return (b.bitrate ?? 0) - (a.bitrate ?? 0)
    })

    const best = formats[0]
    if (!best?.url) throw new Error('No suitable format found')

    return {
      url: best.url,
      title: info.videoDetails.title,
      quality: `${best.height ?? '?'}p`,
      duration: secondsToDuration(parseInt(info.videoDetails.lengthSeconds, 10)),
      thumbnail: info.videoDetails.thumbnails?.at(-1)?.url ?? null,
    }
  })

function secondsToDuration(total: number): string {
  if (!total || isNaN(total)) return '--:--'
  const m = Math.floor(total / 60)
  const s = total % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}
