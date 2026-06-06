'use client'
import { useState } from 'react'
import { MOMENTS } from '@/lib/data'

export default function Moments() {
  const [sel, setSel] = useState<number | null>(null)
  return (
    <section className="section dark-sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="lead">
            <h2 className="h-serif moment-title">
              Pick the <span className="gold">moment.</span> We&apos;ll find the story
            </h2>
            <p className="sub" style={{ color: 'rgba(255,255,255,.5)' }}>Har pal mein ek kahani chupi hai</p>
          </div>
        </div>
        <div className="moment-grid">
          {MOMENTS.map((m, i) => (
            <button
              className={'moment-tile reveal d' + (i % 4) + (sel === i ? ' sel' : '')}
              key={m}
              onClick={() => setSel(sel === i ? null : i)}
            >
              <span className="dot" />{m}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
