import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const VENDOR = 'https://vendor.honestly.co.in'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  const scrollTo = (id) => {
    setOpen(false)
    if (pathname !== '/') { window.location.href = `/#${id}`; return }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="nav-logo">Honestly<em>.</em></Link>

      <ul className="nav-center">
        <li><button onClick={() => scrollTo('how')} className="nav-link">How it works</button></li>
        <li><button onClick={() => scrollTo('pricing')} className="nav-link">Pricing</button></li>
        <li><button onClick={() => scrollTo('businesses')} className="nav-link">For businesses</button></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
      </ul>

      <div className="nav-right">
        <a href={`${VENDOR}/login`} className="nav-login">Log in</a>
        <a href={`${VENDOR}/signup`} className="nav-signup">Get started</a>
      </div>

      <button className={`hamburger ${open ? 'open' : ''}`} onClick={() => setOpen(v => !v)}>
        <span /><span /><span />
      </button>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <button onClick={() => scrollTo('how')} className="mobile-link">How it works</button>
        <button onClick={() => scrollTo('pricing')} className="mobile-link">Pricing</button>
        <button onClick={() => scrollTo('businesses')} className="mobile-link">For businesses</button>
        <Link to="/contact" className="mobile-link" onClick={() => setOpen(false)}>Contact</Link>
        <div className="mobile-actions">
          <a href={`${VENDOR}/login`} className="mobile-login">Log in</a>
          <a href={`${VENDOR}/signup`} className="mobile-signup">Get started →</a>
        </div>
      </div>
    </nav>
  )
}