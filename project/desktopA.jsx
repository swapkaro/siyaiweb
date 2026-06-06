/* ============ SiyAI Desktop — A: Nav, Hero, Created, Products ============ */
const {useState, useEffect, useRef, useCallback} = React;

function Nav({solid, dark, onToggle, onCreate}){
  return (
    <nav className={'nav'+(solid?' solid':'')}>
      <div className="nav-inner">
        <div className="logo">SIY<span className="ai">AI</span></div>
        <div className="nav-links">
          <a href="#created">The films</a>
          <a href="#how">How it works</a>
          <a href="#gifts">Gifts</a>
          <a href="#way">The SiyAI Way</a>
        </div>
        <div className="nav-actions">
          <button className="theme-toggle" onClick={onToggle} aria-label="Toggle dark mode" title={dark?'Light mode':'Dark mode'}>
            {dark ? <Icon.sun/> : <Icon.moon/>}
          </button>
          <button className="btn btn-light nav-talk">Talk to us</button>
          <button className="btn btn-primary btn-sm" onClick={onCreate}>Create<span className="nav-cta-long"> a memory film</span></button>
        </div>
      </div>
    </nav>
  );
}

function Hero({onCreate, ping}){
  return (
    <header className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="eyebrow hero-eyebrow">Films · Songs · Letters</div>
            <h1 className="hero-headline">Turn your<br/>memories into<br/><span className="films">films</span></h1>
            <p className="hero-lead">Thirty seconds of their voice, an old photograph that smiles back — crafted by hand into something your family keeps forever.</p>
            <div className="hero-cta-row">
              <button className="btn btn-primary" onClick={onCreate}>Create a memory film</button>
              <button className="btn btn-light" style={{height:'56px'}} onClick={()=>ping('Browsing the films…')}>See the films</button>
            </div>
            <div className="hero-trust">
              <div className="t"><b>10,000+</b><span>families</span></div>
              <div className="t"><b>4.9/5</b><span>rating</span></div>
              <div className="t"><b>50,000+</b><span>gifts made</span></div>
            </div>
          </div>
          <div className="hero-right">
            <div className="film-grid">
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
          </div>
        </div>

        <div className="hero-tiles">
          {[['01','Upload'],['02','Preserve'],['03','Share']].map(t=>(
            <button className="glass-tile" key={t[1]}>
              <div className="gt-in">
                <span className="gt-n">{t[0]}</span>
                <span className="lbl">{t[1]}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </header>
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
    <section className="section" id="created">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="lead">
            <div className="eyebrow">The films</div>
            <h2 className="h-serif">What we created for people</h2>
            <p className="sub">Films, songs, voice letters and more — every one made by hand.</p>
          </div>
          <div className="tabs" style={{border:'none',margin:0}}>
            {TABS.slice(0,5).map((t,i)=>(
              <button className={'tab'+(i===tab?' active':'')} key={t} onClick={()=>setTab(i)} style={{paddingBottom:'10px'}}>
                {t}<span className="ink"></span>
              </button>
            ))}
          </div>
        </div>
        <div className="created-grid">
          {CREATED.map((c,i)=>(
            <div className={'created-card reveal d'+(i%4)} key={i}>
              <Ph grad={c.grad}/>
              <div className="veil"></div>
              <div className="created-name">{c.name[0]} <span className="arr">→</span> {c.name[1]}</div>
              <div className="created-meta">{c.meta}</div>
              <button className="btn btn-primary btn-sm" onClick={onMake}>Make like this</button>
            </div>
          ))}
        </div>
        <div className="stats-band reveal">
          <div className="stat"><b>10,000+</b><span>families trusted us</span></div>
          <div className="stat"><b>4.9/5</b><span>average rating</span></div>
          <div className="stat"><b>50,000+</b><span>memories gifted</span></div>
        </div>
      </div>
    </section>
  );
}

function Products({onGift}){
  return (
    <section className="section tight" id="gifts" style={{background:'var(--paper-2)'}}>
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="lead">
            <div className="eyebrow">The gifts</div>
            <h2 className="h-serif">The most personal gift they will ever receive</h2>
            <p className="sub">Ready in hours. Delivered straight to WhatsApp.</p>
          </div>
          <a className="see-all">See all gifts <Icon.arrow/></a>
        </div>
        <div className="prod-grid">
          {PRODUCTS.map((p,i)=>(
            <div className={'prod-card reveal d'+(i%4)} key={i}>
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
      </div>
    </section>
  );
}

Object.assign(window, {Nav, Hero, LangStrip, Created, Products});
