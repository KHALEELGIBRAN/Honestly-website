import { useState, useEffect } from 'react'
import './Contact.css'
import { createClient } from '@supabase/supabase-js'

// Then add this function inside the component file, above the components:
function useReveal() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, i) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => entry.target.classList.add('visible'), (i % 4) * 80)
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
        )
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])
}

export default function Contact() {
    useReveal()
    const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', message: '' })
    const [submitted, setSubmitted] = useState(false)
    const [submitting, setSubmitting] = useState(false)

    const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

    const supabase = createClient(
        import.meta.env.VITE_SUPABASE_URL,
        import.meta.env.VITE_SUPABASE_ANON_KEY
    )

    const handleSubmit = async e => {
        e.preventDefault()
        setSubmitting(true)
        try {
            const { error } = await supabase.from('contact_messages').insert({
                name: form.name,
                email: form.email,
                phone: form.phone || null,
                business_type: form.type || null,
                message: form.message,
            })
            if (error) throw error
            setSubmitted(true)
        } catch (err) {
            console.error('Submit error:', err)
            alert('Something went wrong. Please try again.')
        }
        setSubmitting(false)
    }

    return (
        <main className="contact-page">
            <div className="contact-hero">
                <div className="container">
                    <div className="contact-eyebrow reveal">Get in touch</div>
                    <h1 className="contact-title reveal">Let's talk about<br /><em>your business.</em></h1>
                    <p className="contact-sub reveal">Whether you're a solo shop owner or running a chain of outlets — we're happy to answer questions, walk you through the product, or put together a custom plan.</p>
                </div>
            </div>

            <div className="contact-body">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-form-wrap reveal">
                            {submitted ? (
                                <div className="contact-success">
                                    <div className="success-icon">✓</div>
                                    <div className="success-title">Message sent.</div>
                                    <div className="success-sub">We'll get back to you within 24 hours. Check your inbox.</div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label className="form-label">Your name</label>
                                            <input name="name" value={form.name} onChange={handleChange} placeholder="Rajesh Kumar" required className="form-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Email address</label>
                                            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="rajesh@yourbusiness.com" required className="form-input" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label className="form-label">Phone <span className="form-opt">(optional)</span></label>
                                            <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className="form-input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Business type</label>
                                            <select name="type" value={form.type} onChange={handleChange} required className="form-input form-select">
                                                <option value="">Select your business</option>
                                                <option value="cafe">Café / Restaurant</option>
                                                <option value="salon">Salon / Spa</option>
                                                <option value="clinic">Clinic / Healthcare</option>
                                                <option value="gym">Gym / Fitness studio</option>
                                                <option value="retail">Retail shop</option>
                                                <option value="chain">Store chain (multiple outlets)</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Your message</label>
                                        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your business and what you'd like to know..." required rows={5} className="form-input form-textarea" />
                                    </div>
                                    <button type="submit" disabled={submitting} className="form-submit">
                                        {submitting ? <span className="submit-loading"><span className="submit-spinner" />Sending...</span> : 'Send message →'}
                                    </button>
                                </form>
                            )}
                        </div>

                        <div className="contact-info reveal">
                            <div className="info-block">
                                <div className="info-title">Get in touch</div>
                                <div className="contact-methods">
                                    {[{ icon: '✉', label: 'Email', value: 'hello@honestly.co.in', href: 'mailto:hello@honestly.co.in' }, { icon: '📱', label: 'WhatsApp', value: '+91 98765 43210', href: 'https://wa.me/919876543210' }, { icon: '🕐', label: 'Response time', value: 'Within 24 hours', href: null }].map(m => (
                                        <div key={m.label} className="contact-method">
                                            <div className="method-icon">{m.icon}</div>
                                            <div>
                                                <div className="method-label">{m.label}</div>
                                                {m.href ? <a href={m.href} className="method-value">{m.value}</a> : <div className="method-value">{m.value}</div>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="info-block">
                                <div className="info-title">For store chains</div>
                                <div className="info-text">Running multiple locations? We offer custom pricing, branded review pages, and a central dashboard. Reach out and we'll put together a tailored plan within 24 hours.</div>
                            </div>
                            <div className="info-block">
                                <div className="info-title">Support</div>
                                <div className="info-text">Already a customer? Email us at <a href="mailto:hello@honestly.co.in" className="inline-link">hello@honestly.co.in</a> or message us on WhatsApp for the fastest response.</div>
                            </div>
                            <div className="contact-location">
                                <span>📍</span>
                                <div>
                                    <div className="location-city">Bangalore, India</div>
                                    <div className="location-sub">Built for Indian businesses</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}