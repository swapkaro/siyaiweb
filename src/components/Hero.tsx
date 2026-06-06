'use client'
import { FILMS } from '@/lib/data'
import { Grain } from './Icons'
import { Icon } from './Icons'

interface HeroProps {
  onCreate: () => void
  ping: (msg: string) => void
}

export default function Hero({ onCreate, ping }: HeroProps) {
  return (
    <header className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="eyebrow hero-eyebrow">Films · Songs · Letters</div>
            <h1 className="hero-headline">
              Turn your<br />memories into<br /><span className="films">films</span>
            </h1>
            <p className="hero-lead">
              Thirty seconds of their voice, an old photograph that smiles back — crafted by hand into something your family keeps forever.
            </p>
            <div className="hero-cta-row">
              <button className="btn btn-primary" onClick={onCreate}>Create a memory film</button>
              <button className="btn btn-light" style={{ height: '56px' }} onClick={() => ping('Browsing the films…')}>
                See the films
              </button>
            </div>
            <div className="hero-trust">
              <div className="t"><b>10,000+</b><span>families</span></div>
              <div className="t"><b>4.9/5</b><span>rating</span></div>
              <div className="t"><b>50,000+</b><span>gifts made</span></div>
            </div>
          </div>
          <div className="hero-right">
            <div className="film-grid">
              {FILMS.map((f, i) => (
                <div className="film-card" key={i} style={{ background: f.grad }}>
                  <Grain opacity={0.14} />
                  <div className="film-no">{f.no} · Film</div>
                  <div className="film-cap">{f.cap}</div>
                  <div className="film-foot">
                    <span className="film-for">{f.who}</span>
                    <span className="film-dur">{f.dur}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hero-tiles">
          {[['01', 'Upload'], ['02', 'Preserve'], ['03', 'Share']].map(([n, lbl]) => (
            <button className="glass-tile" key={lbl}>
              <div className="gt-in">
                <span className="gt-n">{n}</span>
                <span className="lbl">{lbl}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
