/* ============ SiyAI Desktop — C: NotSure, More, Note, FAQ, Footer ============ */

function NotSure({onTalk}){
  return (
    <section className="section tight">
      <div className="notsure-wrap">
        <div className="notsure reveal">
          <h3>Not sure what to create?</h3>
          <p>Tell us about your memory, and we'll help you find the perfect way to keep it.</p>
          <button className="btn btn-primary" onClick={onTalk}><Icon.whatsapp width="20" height="20"/> Talk to our team</button>
        </div>
      </div>
    </section>
  );
}

function MoreSoon(){
  return (
    <section className="section tight">
      <div className="wrap">
        <div className="sec-head reveal" style={{marginBottom:'40px'}}>
          <div className="lead"><div className="eyebrow">On the way</div><h2 className="h-serif">More from SiyAI soon</h2></div>
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
            <p className="more-sub">A private, encrypted home for your family's films, voices and stories — passed down for generations.</p>
            <button className="more-pill">Know more</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Note({onGift, onPreserve}){
  return (
    <section className="section">
      <div className="wrap">
        <div className="note reveal">
          <span className="eyebrow">A note from us</span>
          <p>We're building SiyAI so anyone can hold on to the moments that matter most. One film, one song, one letter at a time, made by hand.</p>
          <p>If you've read this far, message us. We'd love to hear who you're making this for.</p>
          <div className="note-cta">
            <button className="btn btn-primary" onClick={onGift}>Gift a memory</button>
            <button className="btn btn-ghost" onClick={onPreserve}>Preserve your own</button>
          </div>
          <div className="sign">
            <div className="sign-mono"><span>S</span><span>A</span><span>R</span></div>
            <div className="sign-by">— Sushant, Anjali &amp; Ravi</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ(){
  const [open,setOpen]=React.useState(0);
  return (
    <section className="section" style={{background:'var(--paper-2)'}}>
      <div className="wrap">
        <div className="faq-grid">
          <h2 className="faq-title reveal">Things people ask us
            <span className="sub">Still wondering? Message us on WhatsApp — a real person replies.</span>
          </h2>
          <div className="faq-list reveal d1">
            {FAQS.map((f,i)=>{
              const isOpen=open===i;
              return (
                <div className={'faq-item'+(isOpen?' open':'')} key={i}>
                  <button className="faq-q" onClick={()=>setOpen(isOpen?-1:i)}>
                    {f.q}<Icon.chevron className="chev"/>
                  </button>
                  <div className="faq-a" ref={el=>{ if(el) el.style.maxHeight = isOpen ? el.scrollHeight+'px' : '0px'; }}>
                    <div className="faq-a-inner">{f.a}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer(){
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="logo">SIY<span style={{color:'var(--gold)'}}>AI</span></div>
            <div className="foot-eyebrow">An emotional platform · End to end</div>
            <div className="foot-lead">A living world made from the memories of the people we love.</div>
            <p className="foot-desc">Built by people, for the people you love. Crafted in India.</p>
          </div>
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
        <div className="foot-bottom">
          <span>© 2026 SIYAI</span>
          <span>Crafted in India · For families everywhere</span>
        </div>
      </div>
      <div className="foot-big">Leave your memories to us</div>
    </footer>
  );
}

Object.assign(window, {NotSure, MoreSoon, Note, FAQ, Footer});
