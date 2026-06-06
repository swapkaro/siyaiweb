import React from 'react'
import { WAY } from '@/lib/data'
import { Icon } from './Icons'

export default function SiyaiWay() {
  return (
    <section className="section tight" id="way">
      <div className="wrap">
        <h2 className="way-title reveal">The SiyAI Way</h2>
        <div className="way-card reveal">
          {WAY.map((w, i) => {
            const I = Icon[w.ic as keyof typeof Icon] as (p: React.SVGProps<SVGSVGElement>) => React.ReactElement
            return (
              <div className="way-item" key={i}>
                <I className="ic" />
                <h4>{w.h}</h4>
                <p>{w.p}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
