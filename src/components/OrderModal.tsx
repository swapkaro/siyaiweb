'use client'
import { useState, useEffect } from 'react'
import { type Product, D_RELATIONS, D_OCCASIONS, D_LANGS, WA_NUMBER } from '@/lib/data'
import { Icon } from './Icons'

interface OrderData {
  recipient: string; relation: string; occasion: string
  language: string; name: string; phone: string
}

const EMPTY: OrderData = { recipient: '', relation: '', occasion: '', language: '', name: '', phone: '' }

export default function OrderModal({ order, onClose }: { order: Product | null; onClose: () => void }) {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<OrderData>(EMPTY)

  useEffect(() => {
    if (order) { setStep(0); setData(EMPTY) }
  }, [order?.name])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    if (order) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [order, onClose])

  if (!order) return null

  const set = (k: keyof OrderData, v: string) => setData(d => ({ ...d, [k]: v }))

  const canNext = [
    data.relation,
    data.occasion,
    data.language,
    data.name.trim() && data.phone.trim().length >= 10,
  ][step]

  const waText = encodeURIComponent(
    `Hi SiyAI! I'd like to create a ${order.name}` +
    (data.relation ? ` for my ${data.relation}` : '') +
    (data.occasion ? ` — ${data.occasion}` : '') +
    (data.language ? ` (${data.language})` : '') + '.'
  )
  const waHref = `https://wa.me/${WA_NUMBER}?text=${waText}`
  const orderNo = '10' + String(42 + (order.name.length || 0)).slice(0, 2)

  const next = () => step < 3 ? setStep(step + 1) : setStep(4)
  const back = () => step > 0 && step < 4 && setStep(step - 1)

  const titles = ["Who is it for?", "The occasion", "Their language", "Almost there"]
  const subs = [
    "We'll shape the story around them.",
    "So the words land at the right moment.",
    "The way your family actually speaks.",
    "Where we'll send the finished film.",
  ]

  return (
    <div className={'dof-overlay' + (order ? ' show' : '')} onClick={onClose}>
      <div className={'dof-modal' + (order ? ' in' : '')} role="dialog" aria-modal="true" onClick={e => e.stopPropagation()}>

        {/* rail */}
        <aside className="dof-rail" style={{ background: order.grad }}>
          <div className="dof-rail-veil" />
          <div className="dof-rail-top">
            <div className="logo">SIY<span className="ai">AI</span></div>
          </div>
          <div className="dof-rail-mid">
            <div className="dof-rail-kicker">{step < 4 ? "You're creating" : 'Confirmed'}</div>
            <div className="dof-rail-name">{order.name}</div>
            <div className="dof-rail-price">
              <b>₹{order.price}</b>
              {order.was && <s>₹{order.was}</s>}
            </div>
          </div>
          <ul className="dof-trust">
            <li><Icon.people /> Crafted by real filmmakers</li>
            <li><Icon.whatsapp width={18} height={18} /> Delivered on WhatsApp</li>
            <li><Icon.shield /> {order.ready ?? 'Ready in 48 hrs'} · loved or refunded</li>
          </ul>
        </aside>

        {/* main */}
        <div className="dof-main">
          <button className="dof-x" onClick={onClose} aria-label="Close">×</button>

          {step < 4 ? (
            <>
              <div className="dof-dots">
                {[0, 1, 2, 3].map(i => (
                  <span key={i} className={'dof-dot' + (i === step ? ' cur' : '') + (i < step ? ' done' : '')} />
                ))}
              </div>
              <div className="dof-step" key={step}>
                <h3 className="dof-title">{titles[step]}</h3>
                <p className="dof-sub">{subs[step]}</p>

                {step === 0 && (
                  <div className="dof-fields">
                    <div className="dof-chips">
                      {D_RELATIONS.map(r => (
                        <button type="button" key={r} className={'dof-chip' + (data.relation === r ? ' on' : '')} onClick={() => set('relation', r)}>{r}</button>
                      ))}
                    </div>
                    <label className="dof-label">Their name <span>(optional)</span></label>
                    <input className="dof-input" placeholder="e.g. Sushila" value={data.recipient} onChange={e => set('recipient', e.target.value)} />
                  </div>
                )}
                {step === 1 && (
                  <div className="dof-chips">
                    {D_OCCASIONS.map(o => (
                      <button type="button" key={o} className={'dof-chip' + (data.occasion === o ? ' on' : '')} onClick={() => set('occasion', o)}>{o}</button>
                    ))}
                  </div>
                )}
                {step === 2 && (
                  <div className="dof-chips">
                    {D_LANGS.map(l => (
                      <button type="button" key={l} className={'dof-chip' + (data.language === l ? ' on' : '')} onClick={() => set('language', l)}>{l}</button>
                    ))}
                  </div>
                )}
                {step === 3 && (
                  <div className="dof-fields">
                    <div className="dof-row2">
                      <div>
                        <label className="dof-label">Your name</label>
                        <input className="dof-input" placeholder="e.g. Priya" value={data.name} onChange={e => set('name', e.target.value)} />
                      </div>
                      <div>
                        <label className="dof-label">WhatsApp number</label>
                        <input className="dof-input" inputMode="numeric" placeholder="+91 ·····" value={data.phone} onChange={e => set('phone', e.target.value.replace(/[^\d+ ]/g, ''))} />
                      </div>
                    </div>
                    <div className="dof-summary">
                      <div className="dof-srow"><span>For</span><b>{data.relation}{data.recipient ? ` · ${data.recipient}` : ''}</b></div>
                      <div className="dof-srow"><span>Occasion</span><b>{data.occasion}</b></div>
                      <div className="dof-srow"><span>Language</span><b>{data.language}</b></div>
                      <div className="dof-srow total"><span>{order.name}</span><b>₹{order.price}</b></div>
                    </div>
                  </div>
                )}
              </div>

              <div className="dof-foot">
                <div className="dof-actions">
                  {step > 0 && <button className="dof-back" onClick={back}><Icon.back /> Back</button>}
                  <button className="btn btn-primary dof-next" disabled={!canNext} onClick={next}>
                    {step < 3 ? 'Continue' : `Pay ₹${order.price}`}
                  </button>
                </div>
                <a className="dof-wa" href={waHref} target="_blank" rel="noopener noreferrer">
                  Prefer to chat? Message us on WhatsApp <Icon.arrow />
                </a>
              </div>
            </>
          ) : (
            <div className="dof-done">
              <div className="dof-check"><Icon.check width={36} height={36} /></div>
              <h3 className="dof-title">Payment confirmed</h3>
              <p className="dof-sub">Order <b>#{orderNo}</b> · we&apos;ve reserved a filmmaker for {data.relation || 'your family'}.</p>
              <div className="dof-hand">
                <div className="dof-hand-row"><Icon.whatsapp width={20} height={20} /><span>Continue on WhatsApp</span></div>
                <p>Send a few photos, a voice note, or just tell us the memory — right where you already chat. Your film arrives there in {order.ready?.replace('Ready in ', '') ?? 'a few hours'}.</p>
              </div>
              <div className="dof-done-cta">
                <a className="btn btn-primary dof-next" href={waHref} target="_blank" rel="noopener noreferrer">
                  <Icon.whatsapp width={20} height={20} /> Open WhatsApp
                </a>
                <button className="dof-wa" onClick={onClose}>Back to SiyAI</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
