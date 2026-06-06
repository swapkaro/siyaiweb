'use client'
import { PRODUCTS, type Product } from '@/lib/data'
import { Ph, Icon } from './Icons'

export default function Products({ onGift }: { onGift: (p: Product) => void }) {
  return (
    <section className="section tight" id="gifts" style={{ background: 'var(--paper-2)' }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="lead">
            <div className="eyebrow">The gifts</div>
            <h2 className="h-serif">The most personal gift they will ever receive</h2>
            <p className="sub">Ready in hours. Delivered straight to WhatsApp.</p>
          </div>
          <a className="see-all" href="#">See all gifts <Icon.arrow /></a>
        </div>
        <div className="prod-grid">
          {PRODUCTS.map((p, i) => (
            <div className={'prod-card reveal d' + (i % 4)} key={i}>
              <div className="prod-media">
                <Ph grad={p.grad} />
                <div className="badge-row">
                  <span className="badge">{p.off}</span>
                  <span className="badge">{p.ready}</span>
                </div>
                {p.stock && <span className="badge stock">{p.stock}</span>}
              </div>
              <div className="prod-body">
                <div className="prod-name">{p.name}</div>
                <div className="prod-desc">{p.desc}</div>
                <div className="prod-rate"><span className="star">★</span> {p.rate} <span className="n">({p.count})</span></div>
                <div className="prod-price"><b>₹{p.price}</b><s>₹{p.was}</s></div>
                <div className="prod-deliver">Free delivery</div>
                <button className="btn btn-primary btn-sm" onClick={() => onGift(p)}>Gift this</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
