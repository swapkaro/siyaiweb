'use client'

export default function Note({ onCreate }: { onCreate: () => void }) {
  return (
    <section className="section">
      <div className="wrap">
        <div className="note reveal">
          <span className="eyebrow">A note from us</span>
          <p>We&apos;re building SiyAI so anyone can hold on to the moments that matter most. One film, one song, one letter at a time, made by hand.</p>
          <p>If you&apos;ve read this far, message us. We&apos;d love to hear who you&apos;re making this for.</p>
          <div className="note-cta">
            <button className="btn btn-primary" onClick={onCreate}>Gift a memory</button>
            <button className="btn btn-ghost" onClick={onCreate}>Preserve your own</button>
          </div>
          <div className="sign">
            <div className="sign-mono"><span>S</span><span>A</span><span>R</span></div>
            <div className="sign-by">— Sushant, Anjali &amp; Ravi</div>
          </div>
        </div>
      </div>
    </section>
  )
}
