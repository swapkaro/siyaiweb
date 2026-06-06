/* ============ SiyAI — sections C: NotSure, More, Note, FAQ, Footer ============ */

function NotSure({onTalk}){
  return (
    <section className="notsure reveal" data-reveal>
      <h3>Not sure what to create?</h3>
      <p>Tell us about your memory,<br/>we'll help you with the perfect way</p>
      <button className="btn btn-primary" onClick={onTalk}><Icon.whatsapp width="20" height="20"/> Talk to our team</button>
    </section>
  );
}

function MoreSoon(){
  return (
    <section className="more reveal" data-reveal>
      <h2 className="h-serif" style={{fontSize:'33px'}}>More from SiyAI soon</h2>
      <div className="more-card capsule">
        <span className="lbl">Timeless</span>
        <div className="more-name">Time<b>Capsule</b></div>
        <button className="more-pill">Know more</button>
      </div>
      <div className="more-card legacy">
        <span className="lbl">Forever</span>
        <div className="more-name">Legacy<b>Vault</b></div>
        <button className="more-pill">Know more</button>
      </div>
    </section>
  );
}

function Note({onGift, onPreserve}){
  return (
    <section className="note reveal" data-reveal>
      <span className="eyebrow">A note from us</span>
      <p>We're building SiyAI so anyone can hold on to the moments that matter most. One film, one song, one letter at a time, made by hand.</p>
      <p>If you've read this far, message us. We'd love to hear who you're making this for.</p>
      <div className="stack">
        <button className="btn btn-primary" onClick={onGift}>Gift a memory</button>
        <button className="btn btn-ghost" onClick={onPreserve}>Preserve your own</button>
      </div>
      <div className="sign">
        <div className="sign-mono"><span>S</span><span>A</span><span>R</span></div>
        <div className="sign-by">— Sushant, Anjali &amp; Ravi</div>
      </div>
    </section>
  );
}

function FAQ(){
  const [open,setOpen]=React.useState(null);
  return (
    <section className="faq reveal" data-reveal>
      <h2 className="faq-title">Things people ask us</h2>
      <div className="faq-list">
        {FAQS.map((f,i)=>{
          const isOpen=open===i;
          return (
            <div className={'faq-item'+(isOpen?' open':'')} key={i}>
              <button className="faq-q" onClick={()=>setOpen(isOpen?null:i)}>
                {f.q}<Icon.chevron className="chev"/>
              </button>
              <div className="faq-a" ref={el=>{ if(el) el.style.maxHeight = isOpen ? el.scrollHeight+'px' : '0px'; }}>
                <div className="faq-a-inner">{f.a}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Footer(){
  return (
    <footer className="footer">
      <div className="logo">SIY<span style={{color:'var(--gold)'}}>AI</span></div>
      <div className="foot-eyebrow">An emotional platform · End to end</div>
      <div className="foot-lead">A living world made from the memories of the people we love.</div>
      <p className="foot-desc">Built by people, for the people you love. Crafted in India.</p>
      <div className="foot-cols">
        <div className="foot-col">
          <h5>What we make</h5>
          <div className="foot-links">{FOOTER_MAKE.map(l=><a key={l}>{l}</a>)}</div>
        </div>
        <div className="foot-col">
          <h5>Find us</h5>
          <div className="foot-links">{FOOTER_FIND.map(l=><a key={l}>{l}</a>)}</div>
        </div>
      </div>
      <div className="foot-rule"></div>
      <div className="foot-meta">
        <span>© 2026 SIYAI</span>
        <span>Crafted in India · For families everywhere</span>
      </div>
      <div className="foot-big">Leave your memories to us</div>
    </footer>
  );
}

Object.assign(window, {NotSure, MoreSoon, Note, FAQ, Footer});
