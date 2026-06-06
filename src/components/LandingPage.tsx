'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { PRODUCTS, type Product } from '@/lib/data'
import Nav from './Nav'
import Hero from './Hero'
import LangStrip from './LangStrip'
import Created from './Created'
import Products from './Products'
import Moments from './Moments'
import HowItWorks from './HowItWorks'
import SiyaiWay from './SiyaiWay'
import Love from './Love'
import NotSure from './NotSure'
import MoreSoon from './MoreSoon'
import Note from './Note'
import FAQ from './FAQ'
import Footer from './Footer'
import OrderModal from './OrderModal'

function Toast({ msg }: { msg: string }) {
  return <div className={'toast' + (msg ? ' show' : '')}>{msg}</div>
}

export default function LandingPage() {
  const [solid, setSolid] = useState(false)
  const [dark, setDark] = useState(false)
  const [toast, setToast] = useState('')
  const [order, setOrder] = useState<Product | null>(null)
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // init dark from localStorage after hydration
  useEffect(() => {
    try { setDark(localStorage.getItem('siyai-theme') === 'dark') } catch { /* noop */ }
  }, [])

  const ping = useCallback((msg: string) => {
    setToast(msg)
    if (toastTimer.current) clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(''), 2200)
  }, [])

  const startOrder = useCallback((p?: Product) => {
    setOrder(p ?? PRODUCTS[0])
  }, [])

  useEffect(() => {
    document.body.style.overflow = order ? 'hidden' : ''
  }, [order])

  useEffect(() => {
    document.body.classList.toggle('dark', dark)
    try { localStorage.setItem('siyai-theme', dark ? 'dark' : 'light') } catch { /* noop */ }
  }, [dark])

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 620)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal')
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }),
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="page">
      <Nav solid={solid} dark={dark} onToggle={() => setDark(d => !d)} onCreate={startOrder} />
      <Hero onCreate={startOrder} ping={ping} />
      <LangStrip />
      <Created onMake={startOrder} />
      <Products onGift={startOrder} />
      <Moments />
      <HowItWorks />
      <SiyaiWay />
      <Love />
      <NotSure onCreate={startOrder} />
      <MoreSoon />
      <Note onCreate={startOrder} />
      <FAQ />
      <Footer />
      <Toast msg={toast} />
      <OrderModal order={order} onClose={() => setOrder(null)} />
    </div>
  )
}
