import { FOOTER_MAKE, FOOTER_FIND } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="footer-el">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="logo">SIY<span style={{ color: 'var(--gold)' }}>AI</span></div>
            <div className="foot-eyebrow">An emotional platform · End to end</div>
            <div className="foot-lead">A living world made from the memories of the people we love.</div>
            <p className="foot-desc">Built by people, for the people you love. Crafted in India.</p>
          </div>
          <div className="foot-col">
            <h5>What we make</h5>
            <div className="foot-links">{FOOTER_MAKE.map(l => <a key={l} href="#">{l}</a>)}</div>
          </div>
          <div className="foot-col">
            <h5>Find us</h5>
            <div className="foot-links">{FOOTER_FIND.map(l => <a key={l} href="#">{l}</a>)}</div>
          </div>
        </div>
        <div className="foot-rule" />
        <div className="foot-bottom">
          <span>© 2026 SIYAI</span>
          <span>Crafted in India · For families everywhere</span>
        </div>
      </div>
      <div className="foot-big">Leave your memories to us</div>
    </footer>
  )
}
