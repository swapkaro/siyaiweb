/* ============ SiyAI — Figma board · Desktop modal states ============ */
const PRODD = (window.PRODUCTS && window.PRODUCTS[0]) || {name:'Memory Film',price:'299',was:'499',grad:'linear-gradient(160deg,#d6a96f,#6a4526)',ready:'Ready in 4 hrs'};

const DD = {
  s0:{recipient:'',relation:'Papa',occasion:'',language:'',name:'',phone:''},
  s1:{recipient:'',relation:'Papa',occasion:'Anniversary',language:'',name:'',phone:''},
  s2:{recipient:'',relation:'Papa',occasion:'Anniversary',language:'Hindi',name:'',phone:''},
  s3:{recipient:'',relation:'Papa',occasion:'Anniversary',language:'Hindi',name:'Priya',phone:'98765 43210'},
  s4:{recipient:'',relation:'Papa',occasion:'Anniversary',language:'Hindi',name:'Priya',phone:'98765 43210'},
};

const DFRAMES = [
  {step:0, data:DD.s0, label:'Who is it for?', sub:'Step 1 · Recipient'},
  {step:1, data:DD.s1, label:'The occasion', sub:'Step 2 · Moment'},
  {step:2, data:DD.s2, label:'Their language', sub:'Step 3 · Language'},
  {step:3, data:DD.s3, label:'Almost there', sub:'Step 4 · Details + pay'},
  {step:4, data:DD.s4, label:'Payment confirmed', sub:'Hand-off to WhatsApp'},
];

function DFrame({f}){
  return (
    <div className="fig-frame">
      <div className="fig-cap">
        <div className={'fig-num'+(f.step===4?' done':'')}>{f.step===4?'✓':f.step+1}</div>
        <div className="fig-cap-txt">
          <span className="fig-cap-label">{f.label}</span>
          <span className="fig-cap-sub">{f.sub}</span>
        </div>
      </div>
      <div className="fig-stage-desktop">
        <DesktopOrderModal order={PRODD} embed={true} initialStep={f.step} initialData={f.data} onClose={()=>{}}/>
      </div>
    </div>
  );
}

function DBoard(){
  return (
    <div className="fig-body">
      <div className="fig-top">
        <div className="fig-kicker">SiyAI · Order flow</div>
        <h1 className="fig-h1">Desktop — centered modal</h1>
        <p className="fig-lead">The post-CTA flow on the wide canvas: a two-column modal with the product/trust rail on the left and the guided steps on the right. Each frame is a real, pixel-accurate state — ready to drop into Figma.</p>
      </div>
      <div className="fig-board">
        <div className="fig-row stack">
          {DFRAMES.map(f=><DFrame key={f.step} f={f}/>)}
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<DBoard/>);
