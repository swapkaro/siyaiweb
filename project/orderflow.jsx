/* ============ SiyAI — Post-CTA order flow (guided sheet) ============ */
const RELATIONS = ['Maa','Papa','Dadi','Dadu','Nana','Nani','Partner','Someone else'];
const OCCASIONS = ['Birthday','Anniversary','Diwali','Wedding','Retirement','Just because'];
const FLOW_LANGS = ['Hindi','Telugu','Tamil','Bengali','Punjabi','Marathi','English','Mixed'];

const WA_NUMBER = '919000000000'; // placeholder business number

function Chip({label, active, onClick}){
  return <button type="button" className={'of-chip'+(active?' on':'')} onClick={onClick}>{label}</button>;
}

function Dots({step, total}){
  return (
    <div className="of-dots">
      {Array.from({length:total}).map((_,i)=>(
        <span key={i} className={'of-dot'+(i===step?' cur':'')+(i<step?' done':'')}></span>
      ))}
    </div>
  );
}

function OrderSheet({order, onClose, embed=false, initialStep=0, initialData}){
  const open = !!order;
  const [step,setStep]=React.useState(initialStep);
  const [data,setData]=React.useState(initialData||{recipient:'',relation:'',occasion:'',language:'',name:'',phone:''});
  const [paid,setPaid]=React.useState(false);
  const total = 5; // 4 form steps + confirmation

  React.useEffect(()=>{
    if(open && !embed){ setStep(initialStep); setPaid(false); setData(initialData||{recipient:'',relation:'',occasion:'',language:'',name:'',phone:''}); }
  },[open, order && order.name]);

  if(!order) return null;
  const set=(k,v)=>setData(d=>({...d,[k]:v}));

  const canNext = [
    data.relation, data.occasion, data.language, (data.name.trim() && data.phone.trim().length>=10)
  ][step];

  const waText = encodeURIComponent(
    `Hi SiyAI! I'd like to create a ${order.name}`+
    (data.relation?` for my ${data.relation}`:'')+
    (data.occasion?` — ${data.occasion}`:'')+
    (data.language?` (${data.language})`:'')+'.'
  );
  const waHref = `https://wa.me/${WA_NUMBER}?text=${waText}`;
  const orderNo = '10'+String(42+(order.name.length||0)).slice(0,2);

  const next=()=>{ if(step<3){ setStep(step+1); } else { setPaid(true); setStep(4); } };
  const back=()=>{ if(step>0 && step<4) setStep(step-1); };

  const titles=['Who is it for?','The occasion','Their language','Almost there'];
  const subs=[
    'We\u2019ll shape the story around them.',
    'So the words land at the right moment.',
    'The way your family actually speaks.',
    'Where we\u2019ll send the finished film.'
  ];

  return (
    <React.Fragment>
      {!embed && <div className={'of-scrim'+(open?' show':'')} onClick={onClose}></div>}
      <div className={'of-sheet'+(embed?' of-sheet--embed':(open?' open':''))} role="dialog" aria-modal="true">
        <div className="of-grab"></div>

        {/* product header */}
        <div className="of-head">
          <div className="of-thumb" style={{background:order.grad}}></div>
          <div className="of-head-txt">
            <div className="of-kicker">{step<4?'Creating':'Confirmed'}</div>
            <div className="of-name">{order.name}</div>
          </div>
          <div className="of-price">
            <b>₹{order.price}</b>
            {order.was && <s>₹{order.was}</s>}
          </div>
          <button className="of-x" onClick={onClose} aria-label="Close">×</button>
        </div>

        {step<4 && <Dots step={step} total={4}/>}

        <div className="of-body">
          {step<4 ? (
            <div className="of-step" key={step}>
              <h3 className="of-title">{titles[step]}</h3>
              <p className="of-sub">{subs[step]}</p>

              {step===0 && (
                <div className="of-fields">
                  <div className="of-chips">
                    {RELATIONS.map(r=><Chip key={r} label={r} active={data.relation===r} onClick={()=>set('relation',r)}/>)}
                  </div>
                  <label className="of-label">Their name <span>(optional)</span></label>
                  <input className="of-input" placeholder="e.g. Sushila" value={data.recipient} onChange={e=>set('recipient',e.target.value)}/>
                </div>
              )}
              {step===1 && (
                <div className="of-chips">
                  {OCCASIONS.map(o=><Chip key={o} label={o} active={data.occasion===o} onClick={()=>set('occasion',o)}/>)}
                </div>
              )}
              {step===2 && (
                <div className="of-chips">
                  {FLOW_LANGS.map(l=><Chip key={l} label={l} active={data.language===l} onClick={()=>set('language',l)}/>)}
                </div>
              )}
              {step===3 && (
                <div className="of-fields">
                  <label className="of-label">Your name</label>
                  <input className="of-input" placeholder="e.g. Priya" value={data.name} onChange={e=>set('name',e.target.value)}/>
                  <label className="of-label">WhatsApp number</label>
                  <input className="of-input" inputMode="numeric" placeholder="+91 ·····" value={data.phone} onChange={e=>set('phone',e.target.value.replace(/[^\d+ ]/g,''))}/>
                  <div className="of-summary">
                    <div className="of-srow"><span>For</span><b>{data.relation}{data.recipient?` · ${data.recipient}`:''}</b></div>
                    <div className="of-srow"><span>Occasion</span><b>{data.occasion}</b></div>
                    <div className="of-srow"><span>Language</span><b>{data.language}</b></div>
                    <div className="of-srow total"><span>{order.name}</span><b>₹{order.price}</b></div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="of-done">
              <div className="of-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7"/></svg></div>
              <h3 className="of-title">Payment confirmed</h3>
              <p className="of-sub">Order <b>#{orderNo}</b> · we’ve reserved a filmmaker for {data.relation||'your family'}.</p>
              <div className="of-hand">
                <div className="of-hand-row"><Icon.whatsapp width="18" height="18"/><span>Continue on WhatsApp</span></div>
                <p>Send a few photos, a voice note, or just tell us the memory — right where you already chat. Your film arrives there in {order.ready?order.ready.replace('Ready in ',''):'a few hours'}.</p>
              </div>
            </div>
          )}
        </div>

        {/* footer */}
        <div className="of-foot">
          {step<4 ? (
            <React.Fragment>
              <div className="of-actions">
                {step>0 && <button className="of-back" onClick={back} aria-label="Back"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg></button>}
                <button className="btn btn-primary of-next" disabled={!canNext} onClick={next}>
                  {step<3 ? 'Continue' : `Pay ₹${order.price}`}
                </button>
              </div>
              <a className="of-wa" href={waHref} target="_blank" rel="noopener">Prefer to chat? Message us on WhatsApp <Icon.arrow/></a>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <a className="btn btn-primary of-next" href={waHref} target="_blank" rel="noopener"><Icon.whatsapp width="20" height="20"/> Open WhatsApp</a>
              <button className="of-wa" onClick={onClose}>Back to SiyAI</button>
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

window.OrderSheet = OrderSheet;
