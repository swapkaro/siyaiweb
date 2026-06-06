import type { SVGProps } from 'react'

type P = SVGProps<SVGSVGElement>

export function Grain({ opacity = 0.5 }: { opacity?: number }) {
  return (
    <svg className="grain" preserveAspectRatio="none" style={{ opacity }}>
      <filter id="grn">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves={2} stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grn)" opacity="0.5" />
    </svg>
  )
}

export function Ph({ grad, grain = true }: { grad: string; grain?: boolean }) {
  return (
    <div className="ph" style={{ background: grad }}>
      {grain && <Grain opacity={0.16} />}
    </div>
  )
}

export const Icon = {
  people: (p: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M16 19v-1.5A3.5 3.5 0 0 0 12.5 14h-5A3.5 3.5 0 0 0 4 17.5V19" />
      <circle cx="10" cy="8" r="3.2" />
      <path d="M20 19v-1.4a3.4 3.4 0 0 0-2.6-3.3" />
      <path d="M15.5 5.2a3.2 3.2 0 0 1 0 6" />
    </svg>
  ),
  shield: (p: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 3l7 3v5c0 4.6-3 7.6-7 9-4-1.4-7-4.4-7-9V6z" />
      <path d="M9 12l2 2 4-4.2" />
    </svg>
  ),
  chat: (p: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 18l-1.2 2.6L6.4 19A8.5 7.5 0 1 0 4 13.6 7 7 0 0 0 5 18z" />
    </svg>
  ),
  archive: (p: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="4" y="4" width="16" height="4" rx="1" />
      <path d="M5 8v10a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 19 18V8" />
      <path d="M10 12h4" />
    </svg>
  ),
  whatsapp: (p: P) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-2.9.8.8-2.8-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.25-.13-1.5-.74-1.73-.82s-.4-.13-.57.13-.65.82-.8 1-.3.19-.55.06a6.7 6.7 0 0 1-2-1.22 7.4 7.4 0 0 1-1.36-1.7c-.14-.25 0-.38.11-.5s.25-.3.38-.44a1.7 1.7 0 0 0 .25-.42.46.46 0 0 0 0-.44c-.06-.13-.57-1.38-.78-1.89s-.42-.43-.57-.43l-.49-.01a.94.94 0 0 0-.68.32 2.86 2.86 0 0 0-.9 2.13 4.96 4.96 0 0 0 1.05 2.64 11.4 11.4 0 0 0 4.38 3.87c.61.26 1.09.42 1.46.54a3.5 3.5 0 0 0 1.62.1 2.64 2.64 0 0 0 1.73-1.22 2.14 2.14 0 0 0 .15-1.22c-.06-.11-.23-.18-.48-.31z" />
    </svg>
  ),
  chevron: (p: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" {...p}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  ),
  arrow: (p: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  sun: (p: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" {...p}>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6M18.7 18.7l-1.6-1.6M6.9 6.9 5.3 5.3" />
    </svg>
  ),
  moon: (p: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" {...p}>
      <path d="M20 14.5A8.2 8.2 0 0 1 9.5 4 8.2 8.2 0 1 0 20 14.5z" />
    </svg>
  ),
  back: (p: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" {...p}>
      <path d="M15 18l-6-6 6-6" />
    </svg>
  ),
  check: (p: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  ),
  grid: (p: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  ),
  film: (p: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M7 4v16M17 4v16M2 9h5M17 9h5M2 15h5M17 15h5" />
    </svg>
  ),
  settings: (p: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  ),
}
