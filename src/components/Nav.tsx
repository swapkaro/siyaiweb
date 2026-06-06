'use client'
import { Icon } from './Icons'

interface NavProps {
  solid: boolean
  dark: boolean
  onToggle: () => void
  onCreate: () => void
}

export default function Nav({ solid, dark, onToggle, onCreate }: NavProps) {
  return (
    <nav className={'nav' + (solid ? ' solid' : '')}>
      <div className="nav-inner">
        <div className="logo">SIY<span className="ai">AI</span></div>
        <div className="nav-links">
          <a href="#created">The films</a>
          <a href="#how">How it works</a>
          <a href="#gifts">Gifts</a>
          <a href="#way">The SiyAI Way</a>
        </div>
        <div className="nav-actions">
          <button className="theme-toggle" onClick={onToggle} aria-label="Toggle dark mode">
            {dark ? <Icon.sun /> : <Icon.moon />}
          </button>
          <button className="btn btn-light nav-talk">Talk to us</button>
          <button className="btn btn-primary btn-sm" onClick={onCreate}>
            Create<span className="nav-cta-long"> a memory film</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
