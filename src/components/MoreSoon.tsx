export default function MoreSoon() {
  return (
    <section className="section tight">
      <div className="wrap">
        <div className="sec-head reveal" style={{ marginBottom: '40px' }}>
          <div className="lead">
            <div className="eyebrow">On the way</div>
            <h2 className="h-serif">More from SiyAI soon</h2>
          </div>
        </div>
        <div className="more-grid">
          <div className="more-card capsule reveal">
            <span className="lbl">Timeless</span>
            <div className="more-name">Time<b>Capsule</b></div>
            <p className="more-sub">Record a message today, delivered to someone you love on a date far in the future.</p>
            <button className="more-pill">Know more</button>
          </div>
          <div className="more-card legacy reveal d1">
            <span className="lbl">Forever</span>
            <div className="more-name">Legacy<b>Vault</b></div>
            <p className="more-sub">A private, encrypted home for your family&apos;s films, voices and stories — passed down for generations.</p>
            <button className="more-pill">Know more</button>
          </div>
        </div>
      </div>
    </section>
  )
}
