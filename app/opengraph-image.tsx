import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import path from 'node:path'

export const alt = 'Manor Laundromat — Laundromat in Lancaster, PA'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const logoBuffer = await readFile(path.join(process.cwd(), 'public/ManorLaundromat_Logo.png'))
  const logoSrc = `data:image/png;base64,${logoBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <img src={logoSrc} style={{ maxWidth: '900px', objectFit: 'contain' }} />
      </div>
    ),
    size,
  )
}
