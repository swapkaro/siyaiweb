'use client'
import { useState } from 'react'
import { CREATED, TABS } from '@/lib/data'
import { Ph } from './Icons'

export default function Created() {
  const [tab, setTab] = useState(0)
  return (
    <section className="section" id="created">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="lead">
            <div className="eyebrow">The films</div>
            <h2 className="h-serif">What we created for people</h2>
            <p className="sub">Films, songs, voice letters and more — every one made by hand.</p>
          </div>
          <div className="tabs" style={{ border: 'none', margin: 0 }}>
            {TABS.slice(0, 5).map((t, i) => (
              <button className={'tab' + (i === tab ? ' active' : '')} key={t} onClick={() => setTab(i)} style={{ paddingBottom: '10px' }}>
                {t}<span className="ink" />
              </button>
            ))}
          </div>
        </div>
        <div className="created-grid">
          {CREATED.map((c, i) => (
            <div className={'created-card reveal d' + i} key={i}>
              <Ph grad={c.grad} />
              <div className="veil" />
              <div className="created-name">{c.name[0]} <span className="arr">→</span> {c.name[1]}</div>
              <div className="created-meta">{c.meta}</div>
            </div>
          ))}
        </div>
        <div className="stats-band reveal">
          <div className="stat"><b>10,000+</b><span>families trusted us</span></div>
          <div className="stat"><b>4.9/5</b><span>average rating</span></div>
          <div className="stat"><b>50,000+</b><span>memories gifted</span></div>
        </div>
      </div>
    </section>
  )
}
