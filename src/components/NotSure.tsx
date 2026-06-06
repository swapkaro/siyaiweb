'use client'
import { Icon } from './Icons'

export default function NotSure({ onCreate }: { onCreate: () => void }) {
  return (
    <section className="section tight">
      <div className="notsure-wrap">
        <div className="notsure reveal">
          <h3>Not sure what to create?</h3>
          <p>Tell us about your memory, and we&apos;ll help you find the perfect way to keep it.</p>
          <button className="btn btn-primary" onClick={onCreate}>
            <Icon.whatsapp width={20} height={20} /> Talk to our team
          </button>
        </div>
      </div>
    </section>
  )
}
