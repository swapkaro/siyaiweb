import { STEPS } from '@/lib/data'
import { Ph } from './Icons'

const desc = [
  'Send a photo, a voice note, or just tell us the memory.',
  'Our team crafts your film, song or letter by hand.',
  'It arrives on WhatsApp, archived in your vault forever.',
]

export default function HowItWorks() {
  return (
    <section className="section how" id="how">
      <div className="wrap">
        <span className="eyebrow reveal">How it works</span>
        <h2 className="how-title reveal">Three steps. <span className="accent">That&apos;s it.</span></h2>
        <div className="steps-row">
          {STEPS.map((s, i) => (
            <div className="step reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="device">
                <div className="notch" />
                <div className="scr"><Ph grad={s.grad} grain={s.label !== 'Upload'} /></div>
              </div>
              <div className="step-num">{s.n}</div>
              <div className="step-label">{s.label}</div>
              <p className="step-desc">{desc[i]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
