import { Link } from 'react-router-dom'
import './Footer.css'

const VENDOR = 'https://vendor.honestly.co.in'

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    else window.location.href = `/#${id}`
  }

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">Honestly<em>.</em></div>
          <div className="footer-tagline">Reputation infrastructure for Indian businesses. A QR card on your counter. Real reviews. Real results.</div>
          <div className="footer-legal">© 2026 Honestly.</div>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Product</div>
          <ul className="footer-links">
            <li><button onClick={() => scrollTo('how')} className="footer-btn">How it works</button></li>
            <li><button onClick={() => scrollTo('pricing')} className="footer-btn">Pricing</button></li>
            <li><button onClick={() => scrollTo('chains')} className="footer-btn">For chains</button></li>
            <li><a href={`${VENDOR}/signup`} className="footer-a">Get started</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Company</div>
          <ul className="footer-links">
            <li><Link to="/contact" className="footer-a">Contact</Link></li>
            <li><a href={`${VENDOR}/login`} className="footer-a">Log in</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Legal</div>
          <ul className="footer-links">
            <li><Link to="/privacy" className="footer-a">Privacy policy</Link></li>
            <li><Link to="/terms" className="footer-a">Terms of service</Link></li>
            <li><Link to="/refund" className="footer-a">Refund policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">Tell the world, honestly.</div>
        <div className="footer-copy">honestly.co.in</div>
      </div>
    </footer>
  )
}