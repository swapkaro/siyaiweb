'use client'
import { useState, useEffect, useRef } from 'react'
import { CREATED, TABS } from '@/lib/data'
import { Ph, Icon } from './Icons'

export default function Created() {
  const [tab, setTab] = useState(0)
  const [muted, setMuted] = useState(true)
  const [lightbox, setLightbox] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const lightboxVideo = CREATED.find(c => c.video)

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = muted
  }, [muted])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(false) }
    if (lightbox) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  useEffect(() => {
    if (!lightbox) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [lightbox])

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
            <div
              className={'created-card reveal d' + i}
              key={i}
              onClick={() => c.video && setLightbox(true)}
              style={c.video ? { cursor: 'pointer' } : undefined}
            >
              {c.video ? (
                <>
                  <video ref={videoRef} className="ph" src={c.video} autoPlay muted={muted} loop playsInline />
                  <button
                    type="button"
                    className="vid-mute"
                    aria-label={muted ? 'Unmute preview' : 'Mute preview'}
                    onClick={e => { e.stopPropagation(); setMuted(m => !m) }}
                  >
                    {muted ? <Icon.mute width={18} height={18} /> : <Icon.volume width={18} height={18} />}
                  </button>
                </>
              ) : (
                <Ph grad={c.grad} />
              )}
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

      {lightboxVideo && (
        <div className={'vid-overlay' + (lightbox ? ' show' : '')} onClick={() => setLightbox(false)}>
          <div className={'vid-modal' + (lightbox ? ' in' : '')} role="dialog" aria-modal="true" onClick={e => e.stopPropagation()}>
            <button className="dof-x vid-x" onClick={() => setLightbox(false)} aria-label="Close">×</button>
            {lightbox && (
              <video className="vid-modal-el" src={lightboxVideo.video} controls autoPlay playsInline />
            )}
          </div>
        </div>
      )}
    </section>
  )
}
