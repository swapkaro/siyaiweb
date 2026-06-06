'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Icon } from '@/components/Icons'

const NAV = [
  { label: 'Overview',  icon: 'grid',     href: '/dashboard' },
  { label: 'Orders',    icon: 'archive',  href: '/dashboard/orders' },
  { label: 'Films',     icon: 'film',     href: '/dashboard/films' },
  { label: 'Settings',  icon: 'settings', href: '/dashboard/settings' },
]

const ORDERS = [
  { id: '#1042', customer: 'Priya S.',  product: 'Memory Film',    for: 'Papa · 60th',       lang: 'Hindi',   price: '₹299', status: 'done'    },
  { id: '#1043', customer: 'Arjun M.', product: 'Voice Letter',   for: 'Mummy · Anniversary', lang: 'Telugu', price: '₹499', status: 'making'  },
  { id: '#1044', customer: 'Neha R.',  product: 'Custom Song',    for: 'Dadi · Diwali',      lang: 'Marathi', price: '₹699', status: 'making'  },
  { id: '#1045', customer: 'Vikram P.',product: 'Living Portrait',for: 'Nana ji · Birthday', lang: 'Punjabi', price: '₹499', status: 'pending' },
  { id: '#1046', customer: 'Sneha K.', product: 'Memory Film',    for: 'Partner · Just because', lang: 'English', price: '₹299', status: 'pending' },
]

export default function Dashboard() {
  const [active, setActive] = useState('/dashboard')

  return (
    <div className="dash-layout">
      <aside className="dash-sidebar">
        <div className="dash-logo">
          <Link href="/" className="logo" style={{ display: 'inline-block' }}>
            SIY<span className="ai">AI</span>
          </Link>
        </div>
        <nav className="dash-nav">
          {NAV.map(item => {
            const I = Icon[item.icon as keyof typeof Icon] as (p: React.SVGProps<SVGSVGElement>) => React.ReactElement
            return (
              <button
                key={item.href}
                className={'dash-nav-item' + (active === item.href ? ' active' : '')}
                onClick={() => setActive(item.href)}
              >
                <I />{item.label}
              </button>
            )
          })}
        </nav>
      </aside>

      <div className="dash-main">
        <div className="dash-topbar">
          <h1>Overview</h1>
          <Link href="/" className="btn btn-primary btn-sm">← Back to site</Link>
        </div>
        <div className="dash-content">
          <div className="dash-grid">
            <div className="dash-card">
              <div className="dash-card-label">Total orders</div>
              <div className="dash-card-value">1,046</div>
              <div className="dash-card-sub"><span>+12%</span> vs last month</div>
            </div>
            <div className="dash-card">
              <div className="dash-card-label">Revenue</div>
              <div className="dash-card-value">₹3.2L</div>
              <div className="dash-card-sub"><span>+18%</span> vs last month</div>
            </div>
            <div className="dash-card">
              <div className="dash-card-label">Films delivered</div>
              <div className="dash-card-value">987</div>
              <div className="dash-card-sub"><span>94.4%</span> on time</div>
            </div>
          </div>

          <div className="dash-table-wrap">
            <div className="dash-table-head">
              <h2>Recent orders</h2>
              <button className="btn btn-ghost btn-sm">View all</button>
            </div>
            <table className="dash-table">
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Customer</th>
                  <th>Product</th>
                  <th>For</th>
                  <th>Language</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {ORDERS.map(o => (
                  <tr key={o.id}>
                    <td style={{ fontWeight: 600, color: 'var(--ink)' }}>{o.id}</td>
                    <td>{o.customer}</td>
                    <td style={{ color: 'var(--ink)', fontWeight: 500 }}>{o.product}</td>
                    <td>{o.for}</td>
                    <td>{o.lang}</td>
                    <td style={{ fontWeight: 600, color: 'var(--ink)' }}>{o.price}</td>
                    <td>
                      <span className={`dash-badge ${o.status}`}>
                        {o.status === 'done' ? '✓ Delivered' : o.status === 'making' ? '⟳ In progress' : '· Pending'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
