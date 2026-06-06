/* ============ SiyAI Desktop — app shell ============ */

function Toast({msg}){ return <div className={'toast'+(msg?' show':'')}>{msg}</div>; }

const DESK_DEFAULT_PRODUCT = (typeof PRODUCTS!=='undefined' && PRODUCTS[0]) || {name:'Memory Film',price:'299',was:'499',grad:'linear-gradient(160deg,#d6a96f,#6a4526)',ready:'Ready in 4 hrs'};

function App(){
  const [solid,setSolid]=React.useState(false);
  const [dark,setDark]=React.useState(()=>{ try{return localStorage.getItem('siyai-theme')==='dark';}catch(e){return false;} });
  const [toast,setToast]=React.useState('');
  const [order,setOrder]=React.useState(null);
  const tRef=React.useRef(null);

  const ping=React.useCallback((m)=>{
    setToast(m);
    clearTimeout(tRef.current);
    tRef.current=setTimeout(()=>setToast(''),1900);
  },[]);

  const startOrder=React.useCallback((p)=>setOrder(p||DESK_DEFAULT_PRODUCT),[]);

  React.useEffect(()=>{
    document.body.style.overflow = order ? 'hidden' : '';
  },[order]);

  React.useEffect(()=>{
    document.body.classList.toggle('dark',dark);
    try{localStorage.setItem('siyai-theme',dark?'dark':'light');}catch(e){}
  },[dark]);

  React.useEffect(()=>{
    const onScroll=()=>setSolid(window.scrollY>620);
    window.addEventListener('scroll',onScroll,{passive:true});
    onScroll();
    return ()=>window.removeEventListener('scroll',onScroll);
  },[]);

  React.useEffect(()=>{
    const els=document.querySelectorAll('.reveal');
    const io=new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
    },{threshold:0.12, rootMargin:'0px 0px -6% 0px'});
    els.forEach(el=>io.observe(el));
    return ()=>io.disconnect();
  },[]);

  return (
    <div className="page">
      <Nav solid={solid} dark={dark} onToggle={()=>setDark(d=>!d)} onCreate={()=>startOrder()}/>
      <Hero onCreate={()=>startOrder()} ping={ping}/>
      <LangStrip/>
      <Created onMake={()=>startOrder()}/>
      <Products onGift={startOrder}/>
      <Moments/>
      <HowItWorks/>
      <SiyaiWay/>
      <Love/>
      <NotSure onTalk={()=>ping('Opening WhatsApp…')}/>
      <MoreSoon/>
      <Note onGift={()=>startOrder()} onPreserve={()=>startOrder()}/>
      <FAQ/>
      <Footer/>
      <Toast msg={toast}/>
      <DesktopOrderModal order={order} onClose={()=>setOrder(null)}/>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
