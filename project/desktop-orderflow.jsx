/* ============ SiyAI Desktop — Post-CTA order modal ============ */
const D_RELATIONS = ['Maa','Papa','Dadi','Dadu','Nana','Nani','Partner','Someone else'];
const D_OCCASIONS = ['Birthday','Anniversary','Diwali','Wedding','Retirement','Just because'];
const D_LANGS = ['Hindi','Telugu','Tamil','Bengali','Punjabi','Marathi','English','Mixed'];
const D_WA_NUMBER = '919000000000';

function DChip({label, active, onClick}){
  return <button type="button" className={'dof-chip'+(active?' on':'')} onClick={onClick}>{label}</button>;
}

function DesktopOrderModal({order, onClose, embed=false, initialStep=0, initialData}){
  const open = !!order;
  const [step,setStep]=React.useState(initialStep);
  const [data,setData]=React.useState(initialData||{recipient:'',relation:'',occasion:'',language:'',name:'',phone:''});

  React.useEffect(()=>{
    if(open && !embed){ setStep(initialStep); setData(initialData||{recipient:'',relation:'',occasion:'',language:'',name:'',phone:''}); }
  },[open, order && order.name]);

  React.useEffect(()=>{
    if(embed) return;
    const onKey=e=>{ if(e.key==='Escape') onClose(); };
    if(open) window.addEventListener('keydown',onKey);
    return ()=>window.removeEventListener('keydown',onKey);
  },[open,onClose,embed]);

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
  const waHref = `https://wa.me/${D_WA_NUMBER}?text=${waText}`;
  const orderNo = '10'+String(42+(order.name.length||0)).slice(0,2);

  const next=()=>{ if(step<3){ setStep(step+1); } else { setStep(4); } };
  const back=()=>{ if(step>0 && step<4) setStep(step-1); };

  const titles=['Who is it for?','The occasion','Their language','Almost there'];
  const subs=[
    'We\u2019ll shape the story around them.',
    'So the words land at the right moment.',
    'The way your family actually speaks.',
    'Where we\u2019ll send the finished film.'
  ];

  const modalInner = (
    <React.Fragment>
        {/* left rail */}
        <aside className="dof-rail" style={{background:order.grad}}>
          <div className="dof-rail-veil"></div>
          <div className="dof-rail-top">
            <div className="logo">SIY<span className="ai">AI</span></div>
          </div>
          <div className="dof-rail-mid">
            <div className="dof-rail-kicker">{step<4?'You\u2019re creating':'Confirmed'}</div>
            <div className="dof-rail-name">{order.name}</div>
            <div className="dof-rail-price"><b>₹{order.price}</b>{order.was && <s>₹{order.was}</s>}</div>
          </div>
          <ul className="dof-trust">
            <li><Icon.people/> Crafted by real filmmakers</li>
            <li><Icon.whatsapp width="18" height="18"/> Delivered on WhatsApp</li>
            <li><Icon.shield/> {order.ready||'Ready in 48 hrs'} · loved or refunded</li>
          </ul>
        </aside>

        {/* main */}
        <div className="dof-main">
          <button className="dof-x" onClick={onClose} aria-label="Close">×</button>

          {step<4 ? (
            <React.Fragment>
              <div className="dof-dots">
                {[0,1,2,3].map(i=><span key={i} className={'dof-dot'+(i===step?' cur':'')+(i<step?' done':'')}></span>)}
              </div>
              <div className="dof-step" key={step}>
                <h3 className="dof-title">{titles[step]}</h3>
                <p className="dof-sub">{subs[step]}</p>

                {step===0 && (
                  <div className="dof-fields">
                    <div className="dof-chips">
                      {D_RELATIONS.map(r=><DChip key={r} label={r} active={data.relation===r} onClick={()=>set('relation',r)}/>)}
                    </div>
                    <label className="dof-label">Their name <span>(optional)</span></label>
                    <input className="dof-input" placeholder="e.g. Sushila" value={data.recipient} onChange={e=>set('recipient',e.target.value)}/>
                  </div>
                )}
                {step===1 && (
                  <div className="dof-chips">
                    {D_OCCASIONS.map(o=><DChip key={o} label={o} active={data.occasion===o} onClick={()=>set('occasion',o)}/>)}
                  </div>
                )}
                {step===2 && (
                  <div className="dof-chips">
                    {D_LANGS.map(l=><DChip key={l} label={l} active={data.language===l} onClick={()=>set('language',l)}/>)}
                  </div>
                )}
                {step===3 && (
                  <div className="dof-fields">
                    <div className="dof-row2">
                      <div>
                        <label className="dof-label">Your name</label>
                        <input className="dof-input" placeholder="e.g. Priya" value={data.name} onChange={e=>set('name',e.target.value)}/>
                      </div>
                      <div>
                        <label className="dof-label">WhatsApp number</label>
                        <input className="dof-input" inputMode="numeric" placeholder="+91 ·····" value={data.phone} onChange={e=>set('phone',e.target.value.replace(/[^\d+ ]/g,''))}/>
                      </div>
                    </div>
                    <div className="dof-summary">
                      <div className="dof-srow"><span>For</span><b>{data.relation}{data.recipient?` · ${data.recipient}`:''}</b></div>
                      <div className="dof-srow"><span>Occasion</span><b>{data.occasion}</b></div>
                      <div className="dof-srow"><span>Language</span><b>{data.language}</b></div>
                      <div className="dof-srow total"><span>{order.name}</span><b>₹{order.price}</b></div>
                    </div>
                  </div>
                )}
              </div>

              <div className="dof-foot">
                <div className="dof-actions">
                  {step>0 && <button className="dof-back" onClick={back}><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg> Back</button>}
                  <button className="btn btn-primary dof-next" disabled={!canNext} onClick={next}>{step<3?'Continue':`Pay ₹${order.price}`}</button>
                </div>
                <a className="dof-wa" href={waHref} target="_blank" rel="noopener">Prefer to chat? Message us on WhatsApp <Icon.arrow/></a>
              </div>
            </React.Fragment>
          ) : (
            <div className="dof-done">
              <div className="dof-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7"/></svg></div>
              <h3 className="dof-title">Payment confirmed</h3>
              <p className="dof-sub">Order <b>#{orderNo}</b> · we’ve reserved a filmmaker for {data.relation||'your family'}.</p>
              <div className="dof-hand">
                <div className="dof-hand-row"><Icon.whatsapp width="20" height="20"/><span>Continue on WhatsApp</span></div>
                <p>Send a few photos, a voice note, or just tell us the memory — right where you already chat. Your film arrives there in {order.ready?order.ready.replace('Ready in ',''):'a few hours'}.</p>
              </div>
              <div className="dof-done-cta">
                <a className="btn btn-primary dof-next" href={waHref} target="_blank" rel="noopener"><Icon.whatsapp width="20" height="20"/> Open WhatsApp</a>
                <button className="dof-wa" onClick={onClose}>Back to SiyAI</button>
              </div>
            </div>
          )}
        </div>
    </React.Fragment>
  );

  if(embed){
    return (
      <div className="dof-modal dof-modal--embed" role="dialog" aria-modal="true">
        {modalInner}
      </div>
    );
  }
  return (
    <div className={'dof-overlay'+(open?' show':'')} onClick={onClose}>
      <div className={'dof-modal'+(open?' in':'')} role="dialog" aria-modal="true" onClick={e=>e.stopPropagation()}>
        {modalInner}
      </div>
    </div>
  );
}

window.DesktopOrderModal = DesktopOrderModal;
