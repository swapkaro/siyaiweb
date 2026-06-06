import { LOVE } from '@/lib/data'
import { Icon } from './Icons'

export default function Love() {
  return (
    <section className="section tight">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="lead">
            <div className="eyebrow">Kind words</div>
            <h2 className="h-serif">Love for Siyai</h2>
          </div>
          <a className="see-all" href="#">Read more stories <Icon.arrow /></a>
        </div>
        <div className="love-grid">
          {LOVE.map((l, i) => (
            <div className={`love-card c${i} reveal d${i}`} key={i}>
              <div className="love-stars">★★★★★</div>
              <div className="love-quote">&ldquo;{l.quote}&rdquo;</div>
              <div className="love-by">
                <div>
                  <div className="love-name">{l.name}</div>
                  <div className="love-loc">{l.loc}</div>
                </div>
                <div className="love-tag">{l.tag}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
