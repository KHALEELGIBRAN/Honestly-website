import { useState, useEffect } from 'react'
import './Home.css'

const VENDOR = 'https://vendor.honestly.co.in'

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

function Hero() {
    return (
        <section className="hero">
            <div className="hero-eyebrow">AI-powered Google reviews for businesses</div>
            {/* <h1 className="hero-title">
                <span className="problem">Your customers love you.</span><br />
                <em>They just never say so.</em>
            </h1> */}

            {/* Comic Panels */}
            <div className="hero-comics">
                <div className="comic-panel">
                    <div className="comic-label">Customers not posting
                        <br />a Google review?</div>
                    <div className="comic-img">
                        {/* Save image as: src/assets/comic-1-leaving.png */}
                        <img src="/images/comic-1-leaving.png" alt="Customer leaving without reviewing" />
                    </div>
                </div>
                <div className="comic-panel">
                    <div className="comic-label">Now they can post one<br /><span className="comic-highlight">in just 3 taps.</span></div>
                    <div className="comic-img">
                        {/* Save image as: src/assets/comic-2-scanning.png */}
                        <img src="/images/comic-2-scanning.png" alt="Customer scanning QR card" />
                    </div>
                </div>
            </div>

            <div className="hero-workflow">
                <span className="wf-step">Customer visits</span>
                <span className="wf-arrow">→</span>
                <span className="wf-step">Scans QR card</span>
                <span className="wf-arrow">→</span>
                <span className="wf-step">AI writes review</span>
                <span className="wf-arrow">→</span>
                <span className="wf-step">Posts to Google</span>
            </div>

            <div className="hero-actions">
                <a href={`${VENDOR}/signup`} className="btn-white">Try for ₹499</a>
                <a href={`${VENDOR}/login`} className="btn-ghost btn-ghost-outlined">Log in</a>
            </div>

            <div className="hero-tagline"><strong>Tell the world,</strong> honestly.</div>
        </section>
    )
}

function HowItWorks() {
    const steps = [
        {
            num: '01',
            title: 'Scan the QR card',
            desc: 'A printed card sits on your counter. Customer points their camera, it opens instantly in their browser. No app, no account, no friction.',
            tag: '2 seconds',
            img: '/images/how-step-1.png',
            alt: 'Customer scanning QR card',
        },
        {
            num: '02',
            title: 'Tap what stood out',
            desc: 'Simple button - coffee, staff, ambience, food, speed, value. One tap selects. They can add a line in their own words, or skip straight to next.',
            tag: '2 seconds',
            img: '/images/how-step-2.png',
            alt: 'Customer tapping chips on phone',
        },
        {
            num: '03',
            title: 'AI writes it. Posted to Google.',
            desc: "AI generates a genuine, specific review from their selections. Sounds like a real person because the experience was. One tap and it's live on your Google listing.",
            tag: 'Under 5 seconds total',
            img: '/images/how-step-3.png',
            alt: 'Review posted to Google',
        },
    ]

    return (
        <section className="how-section" id="how">
            <div className="container">
                <div className="section-eyebrow reveal">How it works</div>
                <h2 className="section-title reveal" style={{ textAlign: 'center' }}>
                    3 taps.<br /><em>One real review.</em>
                </h2>
                <p className="section-sub reveal">
                    No app download. No account. Your customer leaves a genuine Google review in seconds.
                </p>
                <div className="how-cards reveal">
                    {steps.map(s => (
                        <div className="how-card" key={s.num}>
                            <div className="how-card-img">
                                <img src={s.img} alt={s.alt} />
                            </div>
                            <div className="how-card-bottom">
                                <div className="how-card-num">STEP {s.num}</div>
                                <div className="how-card-title">{s.title}</div>
                                <div className="how-card-desc">{s.desc}</div>
                                <span className="how-card-tag">{s.tag}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function PhoneDemo() {
    return (
        <div className="demo-section" id="demo">
            <div className="demo-inner">
                <div className="demo-left reveal">
                    <div className="demo-eyebrow">See it in action</div>
                    <h2 className="demo-title">This is what your<br />customers <em>see.</em></h2>
                    <p className="demo-desc">Clean. Fast. Warm. Designed to feel like a natural conversation — not a feedback form. Your shop name at the top. Honestly stays in the background.</p>
                    <ul className="demo-steps">
                        {[['Works on any phone', ' - no app download, no account'], ['Your shop name at the top', ' - feels native to your business'], ['Every review is real', ' - from a real visit, a real experience'], ["Posts to your Google listing", " - one tap, it's live"]].map(([b, r]) => (
                            <li key={b} className="demo-step">
                                <div className="demo-dot"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                                <span className="demo-step-text"><strong>{b}</strong>{r}</span>
                            </li>
                        ))}
                    </ul>
                    <a href={`${VENDOR}/signup`} className="demo-cta">Try for ₹499 </a>
                </div>
                <div className="demo-right reveal">
                    <div className="phone-mockup">
                        <div className="phone-inner">
                            <div className="phone-bar">
                                <span className="phone-shop">Aromas Coffee Co.</span>
                                <span className="phone-logo">Honestly<em>.</em></span>
                            </div>
                            <div className="phone-screen">
                                <div className="phone-dots">
                                    <div className="phone-dot-pill on" /><div className="phone-dot-pill" /><div className="phone-dot-pill" />
                                </div>
                                <div className="phone-step-label">Step 2 of 3</div>
                                <div className="phone-heading">What stood<br />out for you?</div>
                                <div className="phone-chips">
                                    {['Coffee', 'Ambience', 'Staff', 'Food', 'Quick service', 'Value'].map(c => (
                                        <div key={c} className={`phone-chip${['Coffee', 'Staff'].includes(c) ? ' on' : ''}`}>{c}</div>
                                    ))}
                                </div>
                                <div className="phone-review-box">
                                    <div className="phone-review-text">The coffee here is genuinely one of the best I've had in the city. The barista remembered my order - that kind of detail is rare anywhere.</div>
                                    <div className="phone-review-stars">★★★★★</div>
                                </div>
                                <div className="phone-cta-btn">Post to Google Reviews →</div>
                                <div className="phone-powered">Powered by <strong>Honestly.</strong></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Businesses() {
    const [open, setOpen] = useState(null)
    const items = [
        { cat: 'Food & Beverage', name: 'Cafés & Restaurants', desc: 'The highest review-reading category in India. A 0.2 star difference between you and the café next door determines who gets the walk-in. Ratings are your most powerful marketing tool - and most visible customers never leave one.', examples: 'Cafés · Restaurants · Bakeries · Cloud kitchens · Juice bars · Dhaba · Food courts' },
        { cat: 'Beauty & Wellness', name: 'Salons & Spas', desc: "First-time customers almost always check reviews before booking a salon or spa. Salons with 200+ reviews get automatic trust. Salons with 15 reviews get scrolled past - even when they're better.", examples: 'Hair salons · Spas · Nail studios · Barbershops · Wellness centres · Threading parlours' },
        { cat: 'Healthcare', name: 'Clinics & Pharmacies', desc: 'Patients choosing between two nearby clinics almost always pick the one with better, more recent reviews. Trust is built review by review - and happy patients almost never think to write one unprompted.', examples: 'Dental clinics · General physicians · Pharmacies · Diagnostics · Eye care · Physiotherapy' },
        { cat: 'Fitness', name: 'Gyms & Studios', desc: 'New members research gyms before signing up. Reviews that mention equipment quality, cleanliness, and trainer approach are what convert a casual browse into a visit and a visit into a membership.', examples: 'Gyms · Yoga studios · CrossFit boxes · Dance academies · Pilates studios · Martial arts' },
        { cat: 'Retail', name: 'Shops & Boutiques', desc: 'Retail discovery increasingly starts on Google Maps. A clothing boutique, electronics shop, or bookstore with more reviews ranks higher in local search - and looks more trustworthy when a customer is deciding between two options.', examples: 'Clothing · Electronics · Books · Home goods · Grocery · Specialty retail · Gift shops' },
        { cat: 'Automotive', name: 'Garages & Service Centres', desc: "Car owners are extremely review-conscious before trusting anyone with their vehicle. A garage with strong reviews about honest pricing and quality work earns customers for life.", examples: 'Car service centres · Bike workshops · Tyre shops · Auto accessories · Detailing' },
    ]
    return (
        <div className="biz-section" id="businesses">
            <div className="container">
                <div className="section-eyebrow reveal">Who it's for</div>
                <h2 className="section-title reveal">Every business<br /><em>with a Google listing.</em></h2>
                <p className="section-sub reveal" style={{ marginBottom: 0 }}>If your customers find you on Google Maps, your rating is your reputation.</p>
                <div className="biz-accordion reveal">
                    {items.map((b, i) => (
                        <div key={i} className={`biz-item${open === i ? ' open' : ''}`}>
                            <button className="biz-trigger" onClick={() => setOpen(open === i ? null : i)}>
                                <div className="biz-trigger-left">
                                    <span className="biz-cat">{b.cat}</span>
                                    <span className="biz-name">{b.name}</span>
                                </div>
                                <div className="biz-trigger-right">
                                    <span className="biz-hint">{open === i ? '' : ''}</span>
                                    <div className="biz-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19" />{open !== i && <line x1="5" y1="12" x2="19" y2="12" />}</svg></div>
                                </div>
                            </button>
                            <div className="biz-body">
                                <div className="biz-desc">{b.desc}</div>
                                <div className="biz-examples">{b.examples}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

function ReviewsMarquee() {
    const reviews = [
        { stars: '★★★★★', text: "Came in for a trim, stayed for the experience. They actually listened. Left looking better than I expected.", author: 'Rahul K.', biz: '' },
        { stars: '★★★★★', text: "Dr. Mehta explained everything clearly and didn't rush the appointment. Dentists that don't make you feel judged are hard to find.", author: 'Ananya S.', biz: '' },
        { stars: '★★★★★', text: "Best gym I've been a member of. Equipment maintained, no waiting at peak hours, trainers who actually track progress.", author: 'Vikram T.', biz: '' },
        { stars: '★★★★☆', text: "Food was excellent and portions generous. Service took a while but the ambience made it worth it. Will definitely be back.", author: 'Meera R.', biz: '' },
        { stars: '★★★★★', text: "Walked in without an appointment and they fit me in. The facial was relaxing and products were high quality. Worth every rupee.", author: 'Deepa V.', biz: '' },
        { stars: '★★★★★', text: "Finally a pharmacy that explains what each medicine does. Staff are patient and never make you feel rushed.", author: 'Suresh M.', biz: '' },
    ]
    return (
        <div className="reviews-section">
            <div className="container">
                <div className="section-eyebrow reveal">Real reviews, generated by Honestly</div>
                <h2 className="section-title reveal">What real customers<br /><em>actually say.</em></h2>
            </div>
            <div className="reviews-wrapper">
                <div className="reviews-track">
                    {[...reviews, ...reviews].map((r, i) => (
                        <div key={i} className="review-card">
                            <div className="review-stars">{r.stars}</div>
                            <div className="review-text">{r.text}</div>
                            <div className="review-meta"><span className="review-author">{r.author}</span><span className="review-biz">{r.biz}</span></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

function Pricing() {
    const plans = [
        { tier: 'Monthly', amount: '₹999', period: 'per month · billed monthly', eff: 'Full flexibility · cancel anytime', effType: 'neutral', features: ['AI review generation', 'QR card for your counter', 'Google redirect flow', 'Real-time report', 'Shop dashboard', 'Cancel anytime'], cta: 'Get started →', featured: false },
        { tier: '6 Months', amount: '₹5,499', period: 'billed once · ₹917/month', eff: 'Save ₹495', effType: 'neutral', features: ['AI review generation', 'QR card for your counter', 'Google redirect flow', 'Real-time report', 'Shop dashboard', 'Good for steady businesses'], cta: 'Get started →', featured: false },
        { tier: 'Annual Partner', amount: '₹8,999', period: 'billed once · ₹750/month', eff: 'Save ₹2,989 · 2 months free', effType: 'good', badge: 'Most popular', features: ['AI review generation', 'QR card for your counter', 'Google redirect flow', 'Real-time report', 'Shop dashboard', 'Locked in at best rate'], cta: 'Become a Partner →', featured: true },
    ]
    return (
        <div className="pricing-section" id="pricing">
            <div className="container">
                <div className="section-eyebrow reveal">Pricing</div>
                <h2 className="section-title reveal">Simple pricing.<br /><em>No surprises.</em></h2>
                <p className="section-sub reveal" style={{ marginBottom: 40 }}>One flat fee per store. No setup cost. No per-review charges.</p>
                <div className="trial-banner reveal">
                    <div>
                        <div className="trial-label">Not sure yet?</div>
                        <div className="trial-text">Try Honestly for ₹499 - your first month</div>
                        <div className="trial-sub">See the results before deciding. No contract.</div>
                    </div>
                    <a href={`${VENDOR}/signup`} className="trial-btn">Try for ₹499 </a>
                </div>
                <div className="pricing-grid reveal">
                    {plans.map(p => (
                        <div key={p.tier} className={`price-card${p.featured ? ' featured' : ''}`}>
                            {p.badge && <div className="price-badge">{p.badge}</div>}
                            <div className="price-tier">{p.tier}</div>
                            <div className="price-amount">{p.amount}</div>
                            <div className="price-period">{p.period}</div>
                            <div className={`price-eff ${p.effType}`}>{p.eff}</div>
                            <ul className="price-features">{p.features.map(f => <li key={f}>{f}</li>)}</ul>
                            <a href={`${VENDOR}/signup`} className={`price-cta${p.featured ? ' price-cta-light' : ' price-cta-dark'}`}>{p.cta}</a>
                        </div>
                    ))}
                </div>
                <div className="pricing-note reveal">First month ₹499 on any plan · No setup fee · Cancel monthly plans anytime</div>
            </div>
        </div>
    )
}

function Chains() {
    return (
        <div className="chain-section" id="chains">
            <div className="chain-inner">
                <div className="chain-left reveal">
                    <div className="chain-eyebrow">Store chains & multi-outlet brands</div>
                    <h2 className="chain-title">Got a<br /><em>store chain?</em></h2>
                    <p className="chain-desc">Running multiple locations? Honestly gives you one platform to manage Google reviews across every outlet - so every store builds its rating, consistently.</p>
                    <ul className="chain-features">
                        {["One dashboard - see every location's performance in one place", "Per-location analytics - spot and fix underperforming outlets", "Pricing scaled to your number of outlets"].map(f => (
                            <li key={f}>
                                <div className="chain-check"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                                <span>{f}</span>
                            </li>
                        ))}
                    </ul>
                    <a href="/contact" className="chain-contact-btn">Talk to us about your chain →</a>
                    <div className="chain-note">Custom pricing · we'll get back within 24 hours</div>
                </div>
                {/* <div className="chain-right reveal">
                    <div className="chain-card">
                        <div className="chain-card-title">Built for store chains</div>
                        <div className="chain-card-desc">Running multiple locations? Honestly gives you one platform to manage Google reviews across every outlet - so every store builds its rating, consistently.</div>
                        <ul className="chain-card-features">
                            <li>One dashboard for all locations</li>
                            <li>Per-location Google review tracking</li>
                            <li>Custom branded review pages per store</li>
                            <li>Pricing scaled to your number of outlets</li>
                        </ul>
                        <a href="/contact" className="chain-contact-btn">Talk to us about your chain →</a>
                        <div className="chain-note">Custom pricing · we'll get back within 24 hours</div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

function Testimonials() {
    const t = [
        { q: '"We went from 38 reviews and a 3.9 rating to 94 reviews and 4.5 in under two months. We didn\'t change anything about the café - just made it easier for happy customers to say so."', i: 'RK', n: 'Rohan K.', b: 'Café · Indiranagar, Bangalore' },
        { q: '"Setup took 5 minutes. Printed the card, put it on the reception desk, forgot about it. The monthly report shows what\'s happening. That\'s genuinely all I do."', i: 'SP', n: 'Sunita P.', b: 'Salon · Koramangala, Bangalore' },
        { q: '"Our Google rating went from 4.0 to 4.6 in 10 weeks. New patients mention seeing our reviews before booking. That\'s directly more business walking through the door."', i: 'AM', n: 'Dr. Ajay M.', b: 'Dental clinic · Whitefield, Bangalore' },
    ]
    return (
        <div className="testi-section">
            <div className="container">
                <div className="section-eyebrow reveal">From our shops</div>
                <h2 className="section-title reveal">What business<br /><em>owners say.</em></h2>
                <div className="testi-grid">
                    {t.map((x, i) => (
                        <div key={i} className="testi-card reveal">
                            <div className="testi-quote">{x.q}</div>
                            <div className="testi-meta">
                                <div className="testi-avatar">{x.i}</div>
                                <div><div className="testi-name">{x.n}</div><div className="testi-biz">{x.b}</div></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

function FAQ() {
    const [open, setOpen] = useState(null)

    const faqs = [
        { q: 'Are the reviews actually genuine?', a: "Yes. Every review on Honestly comes from someone who physically visited your business and scanned your QR. The AI helps them articulate what they experienced - it doesn't fabricate experiences. The customer had the visit, had the opinion. We just removed the blank page that was stopping them from sharing it." },
        { q: 'How does setup work?', a: "Sign up, add your store, link your Google Review URL. Your QR card is generated instantly - download and print at any local print shop for ₹20, or we ship you a premium card. Place it on your counter. Total setup time: under 10 minutes. No technical knowledge required." },
        { q: 'Can I add multiple stores?', a: "Yes. Add as many stores as you need under one account. Each store gets its own QR code, its own analytics, and its own review flow. Pricing is per store per month." },
        { q: 'What is the ₹499 trial?', a: "Your first month on any plan is ₹499 instead of the regular price. A low-risk way to see real results before committing to a longer plan. No contract, no lock-in on monthly. If you see reviews coming in and your rating moving - you decide what comes next." },
        { q: 'Can I cancel anytime?', a: "Monthly plans can be cancelled at the end of any billing cycle - no questions asked. 6-month and annual plans are billed upfront and non-refundable, but you keep full access until the period ends." },
        { q: 'Is there a setup fee?', a: "No setup fee for standalone shops. For chain clients requiring custom branded UI and central dashboard setup, there is a one-time onboarding fee depending on scope. Contact us and we'll give you an exact number upfront." },
    ]

    return (
        <div className="faq-section" id="faq">
            <div className="container">
                <div className="section-eyebrow">Questions</div>
                <h2 className="section-title">
                    Common<br /><em>questions.</em>
                </h2>

                <div className="faq-list">
                    {faqs.map((f, i) => (
                        <div
                            key={i}
                            className={`faq-item ${open === i ? 'open' : ''}`}
                            onClick={() => setOpen(open === i ? null : i)}
                        >
                            <div className="faq-q">
                                {f.q}
                                <span className="faq-icon">{open === i ? '−' : '+'}</span>
                            </div>

                            {open === i && (
                                <div className="faq-a">{f.a}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

function CTA() {
    return (
        <div className="cta-section">
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="cta-eyebrow reveal">Ready to start</div>
                <h2 className="cta-title reveal">Your customers<br />are leaving.<br /><em>Without reviewing.</em></h2>
                <p className="cta-sub reveal">Every visit that doesn't become a review is a missed opportunity. Put a card on your counter today.</p>
                <div className="cta-actions reveal">
                    <a href={`${VENDOR}/signup`} className="btn-white">Try for ₹499 </a>
                    <a href={`${VENDOR}/login`} className="btn-ghost">Already a member? Log in</a>
                </div>
                <div className="cta-tagline reveal"><strong>Tell the world,</strong> honestly.</div>
            </div>
        </div>
    )
}

export default function Home() {
    useReveal()
    return (
        <>
            <Hero />
            <HowItWorks />
            <PhoneDemo />
            <Businesses />
            <ReviewsMarquee />
            <Pricing />
            <Chains />
            <Testimonials />
            <FAQ />
            <CTA />
        </>
    )
}