/* ============ SiyAI — sections A: Hero, Created, Products ============ */
const {useState} = React;

function Header({onMenu}){
  return (
    <div className="hero-top">
      <div className="logo">SIY<span className="ai">AI</span></div>
      <button className="hamburger" aria-label="Menu" onClick={onMenu}>
        <span></span><span></span><span></span>
      </button>
    </div>
  );
}

function Hero({onMenu, onCreate}){
  return (
    <section className="hero" data-section>
      <Header onMenu={onMenu}/>
      <h1 className="hero-headline">
        Turn your<br/>memories<br/>into <span className="films">films</span>
      </h1>
      <button className="btn btn-primary hero-cta" onClick={onCreate}>Create a memory film</button>

      <div className="film-rail">
        {FILMS.map((f,i)=>(
          <div className="film-card" key={i} style={{background:f.grad}}>
            <Grain opacity={0.14}/>
            <div className="film-no">{f.no} · Film</div>
            <div className="film-cap">{f.cap}</div>
            <div className="film-foot">
              <span className="film-for">{f.who}</span>
              <span className="film-dur">{f.dur}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-tiles">
        {['Upload','Preserve','Share'].map(t=>(
          <button className="glass-tile" key={t}><span>{t}</span></button>
        ))}
      </div>
    </section>
  );
}

function LangStrip(){
  const items=[
    ['सुनो, नन्हे','Hindi'],['విను, చిన్నారి','Telugu'],['கேள், செல்லம்','Tamil'],
    ['শোনো, সোনা','Bengali'],['ਸੁਣ, ਬੱਚਿਆ','Punjabi'],['ऐक, बाळा','Marathi'],
  ];
  const row=[...items,...items];
  return (
    <div className="lang-strip">
      <div className="lang-track">
        {row.map((it,i)=>(
          <span className="lang-item" key={i}>
            <span className="leaf"></span>
            <span className="lang-native">{it[0]}</span>
            <span className="lang-en">{it[1]}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Created({onMake}){
  const [tab,setTab]=useState(0);
  return (
    <section className="sec sec-pad reveal" data-reveal>
      <div className="m-eyebrow">The films</div>
      <h2 className="h-serif" style={{fontSize:'34px'}}>What we created<br/>for people</h2>
      <p className="sub" style={{marginTop:'12px'}}>Films, songs, voice letters and more</p>

      <div className="tabs">
        {TABS.map((t,i)=>(
          <button className={'tab'+(i===tab?' active':'')} key={t} onClick={()=>setTab(i)}>
            {t}<span className="ink"></span>
          </button>
        ))}
      </div>

      <div className="created-rail">
        {CREATED.map((c,i)=>(
          <div className="created-card" key={i}>
            <Ph grad={c.grad}/>
            <div className="veil"></div>
            <div className="created-name">{c.name[0]} <span className="arr">→</span> {c.name[1]}</div>
            <div className="created-meta">{c.meta}</div>
            <button className="btn btn-primary btn-sm" onClick={onMake}>Make like this</button>
          </div>
        ))}
      </div>

      <div className="stats">
        <div className="stat"><b>10,000+</b><span>families</span></div>
        <div className="stat"><b>4.9/5</b><span>rating</span></div>
        <div className="stat"><b>50,000+</b><span>gifts</span></div>
      </div>
    </section>
  );
}

function Products({onGift}){
  return (
    <section className="sec sec-pad reveal" data-reveal>
      <div className="m-eyebrow">The gifts</div>
      <div className="sec-head">
        <h2 className="h-serif" style={{fontSize:'33px',maxWidth:'250px'}}>Most personal gift they will ever receive</h2>
        <a className="see-all">See all <Icon.arrow/></a>
      </div>

      <div className="prod-grid">
        {PRODUCTS.map((p,i)=>(
          <div className="prod-card" key={i}>
            <div className="prod-media">
              <Ph grad={p.grad}/>
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
              <button className="btn btn-primary btn-sm" onClick={()=>onGift(p)}>Gift this</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, {Hero, LangStrip, Created, Products});
