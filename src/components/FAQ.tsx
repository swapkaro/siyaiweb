'use client'
import { useState, useRef } from 'react'
import { FAQS } from '@/lib/data'
import { Icon } from './Icons'

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section" style={{ background: 'var(--paper-2)' }}>
      <div className="wrap">
        <div className="faq-grid">
          <h2 className="faq-title reveal">
            Things people ask us
            <span className="sub">Still wondering? Message us on WhatsApp — a real person replies.</span>
          </h2>
          <div className="faq-list reveal d1">
            {FAQS.map((f, i) => {
              const isOpen = open === i
              return (
                <div className={'faq-item' + (isOpen ? ' open' : '')} key={i}>
                  <button className="faq-q" onClick={() => setOpen(isOpen ? -1 : i)}>
                    {f.q}<Icon.chevron className="chev" />
                  </button>
                  <div
                    className="faq-a"
                    ref={(el) => { if (el) el.style.maxHeight = isOpen ? el.scrollHeight + 'px' : '0px' }}
                  >
                    <div className="faq-a-inner">{f.a}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
