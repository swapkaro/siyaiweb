/* ============ SiyAI Desktop — B: Moments, HowItWorks, Way, Love ============ */

function Moments(){
  const [sel,setSel]=React.useState(null);
  return (
    <section className="section dark-sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="lead">
            <h2 className="h-serif moment-title">Pick the <span className="gold">moment.</span> We'll find the story</h2>
            <p className="sub moment-sub">Har pal mein ek kahani chupi hai</p>
          </div>
        </div>
        <div className="moment-grid">
          {MOMENTS.map((m,i)=>(
            <button className={'moment-tile reveal d'+(i%4)+(sel===i?' sel':'')} key={m} onClick={()=>setSel(sel===i?null:i)}>
              <span className="dot"></span>{m}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks(){
  const desc=['Send a photo, a voice note, or just tell us the memory.','Our team crafts your film, song or letter by hand.','It arrives on WhatsApp, archived in your vault forever.'];
  return (
    <section className="section how" id="how">
      <div className="wrap">
        <span className="eyebrow reveal">How it works</span>
        <h2 className="how-title reveal">Three steps. <span className="accent">That's it.</span></h2>
        <div className="steps-row">
          {STEPS.map((s,i)=>(
            <div className="step reveal" key={i} style={{transitionDelay:(i*0.1)+'s'}}>
              <div className="device">
                <div className="notch"></div>
                <div className="scr"><Ph grad={s.grad} grain={s.label!=='Upload'}/></div>
              </div>
              <div className="step-num">{s.n}</div>
              <div className="step-label">{s.label}</div>
              <p className="step-desc">{desc[i]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SiyaiWay(){
  return (
    <section className="section tight" id="way">
      <div className="wrap">
        <h2 className="way-title reveal">The SiyAI Way</h2>
        <div className="way-card reveal">
          {WAY.map((w,i)=>{
            const I=Icon[w.ic];
            return (
              <div className="way-item" key={i}>
                <I className="ic"/>
                <h4>{w.h}</h4>
                <p>{w.p}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Love(){
  return (
    <section className="section tight">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="lead"><div className="eyebrow">Kind words</div><h2 className="h-serif">Love for Siyai</h2></div>
          <a className="see-all">Read more stories <Icon.arrow/></a>
        </div>
        <div className="love-grid">
          {LOVE.map((l,i)=>(
            <div className={'love-card c'+i+' reveal d'+i} key={i}>
              <div className="love-stars">★★★★★</div>
              <div className="love-quote">"{l.quote}"</div>
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
  );
}

Object.assign(window, {Moments, HowItWorks, SiyaiWay, Love});
