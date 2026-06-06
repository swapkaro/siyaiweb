/* ============ SiyAI — sections B: Moments, HowItWorks, Way, Love ============ */

function Moments(){
  const [sel,setSel]=React.useState(null);
  return (
    <section className="dark-sec reveal" data-reveal>
      <h2 className="h-serif moment-title" style={{fontSize:'37px'}}>
        Pick the <span className="gold">moment.</span><br/>We'll find the story
      </h2>
      <p className="moment-sub">Har pal mein ek kahani chupi hai</p>
      <div className="moment-grid">
        {MOMENTS.map((m,i)=>(
          <button
            className={'moment-tile'+(sel===i?' sel':'')}
            key={m}
            onClick={()=>setSel(sel===i?null:i)}
          >
            <span className="dot"></span>{m}
          </button>
        ))}
      </div>
    </section>
  );
}

function HowItWorks(){
  return (
    <section className="how reveal" data-reveal>
      <span className="eyebrow">How it works</span>
      <h2 className="how-title">Three steps.<br/><span className="accent">That's it.</span></h2>
      <div className="steps">
        {STEPS.map((s,i)=>(
          <div className="step" key={i}>
            <div className="device">
              <div className="notch"></div>
              <div className="scr"><Ph grad={s.grad} grain={s.label!=='Upload'}/></div>
            </div>
            <div className="step-num">{s.n}</div>
            <div className="step-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SiyaiWay(){
  return (
    <section className="way reveal" data-reveal>
      <h2 className="way-title">The SiyAI Way</h2>
      <div className="way-card">
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
    </section>
  );
}

function Love(){
  return (
    <section className="love reveal" data-reveal>
      <div className="sec"><h2 className="love-title">Love for Siyai</h2></div>
      <div className="love-rail">
        {LOVE.map((l,i)=>(
          <div className={'love-card c'+i} key={i}>
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
    </section>
  );
}

Object.assign(window, {Moments, HowItWorks, SiyaiWay, Love});
