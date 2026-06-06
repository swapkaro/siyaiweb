/* ============ SiyAI — app shell ============ */
const {useEffect, useRef, useCallback} = React;

function Menu({open, onClose, onCreate}){
  return (
    <div className={'menu'+(open?' open':'')}>
      <div className="menu-top">
        <div className="logo">SIY<span className="ai">AI</span></div>
        <button className="menu-close" onClick={onClose} aria-label="Close">×</button>
      </div>
      <nav className="menu-nav">
        {MENU_LINKS.map(l=>(
          <a key={l} onClick={onClose}>{l}<span className="ar"><Icon.arrow/></span></a>
        ))}
      </nav>
      <div className="menu-foot">
        <button className="btn btn-primary btn-sm" onClick={onCreate}>Create a film</button>
      </div>
      <div className="menu-tag">Crafted in India · for families everywhere</div>
    </div>
  );
}

function Toast({msg}){
  return <div className={'toast'+(msg?' show':'')}>{msg}</div>;
}

const DEFAULT_PRODUCT = (typeof PRODUCTS!=='undefined' && PRODUCTS[0]) || {name:'Memory Film',price:'299',was:'499',grad:'linear-gradient(160deg,#d6a96f,#6a4526)',ready:'Ready in 4 hrs'};

function App(){
  const [menu,setMenu]=React.useState(false);
  const [toast,setToast]=React.useState('');
  const [order,setOrder]=React.useState(null);
  const screenRef=useRef(null);
  const tRef=useRef(null);

  const ping=useCallback((m)=>{
    setToast(m);
    clearTimeout(tRef.current);
    tRef.current=setTimeout(()=>setToast(''),1900);
  },[]);

  const startOrder=useCallback((p)=>{ setMenu(false); setOrder(p||DEFAULT_PRODUCT); },[]);

  // scroll reveal within the scroll container
  useEffect(()=>{
    const root=screenRef.current;
    const els=root.querySelectorAll('[data-reveal]');
    const io=new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
    },{root, threshold:0.12, rootMargin:'0px 0px -8% 0px'});
    els.forEach(el=>io.observe(el));
    return ()=>io.disconnect();
  },[]);

  useEffect(()=>{
    const lock = menu || order;
    const r=screenRef.current; if(r) r.style.overflow = lock ? 'hidden' : 'auto';
  },[menu, order]);

  return (
    <div className="phone">
      <div className="screen" ref={screenRef}>
        <Hero onMenu={()=>setMenu(true)} onCreate={()=>startOrder(DEFAULT_PRODUCT)}/>
        <LangStrip/>
        <Created onMake={()=>startOrder(DEFAULT_PRODUCT)}/>
        <Products onGift={startOrder}/>
        <Moments/>
        <HowItWorks/>
        <SiyaiWay/>
        <Love/>
        <NotSure onTalk={()=>ping('Opening WhatsApp…')}/>
        <MoreSoon/>
        <Note onGift={()=>startOrder(DEFAULT_PRODUCT)} onPreserve={()=>startOrder(DEFAULT_PRODUCT)}/>
        <FAQ/>
        <Footer/>
      </div>
      <Menu open={menu} onClose={()=>setMenu(false)} onCreate={()=>startOrder(DEFAULT_PRODUCT)}/>
      <OrderSheet order={order} onClose={()=>setOrder(null)}/>
      <Toast msg={toast}/>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
