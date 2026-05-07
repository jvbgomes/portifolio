import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: 6,
        background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '-0.02em',
      }}
    >
      JV
    </div>,
    { ...size },
  )
}
