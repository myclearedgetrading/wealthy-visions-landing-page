import { useEffect, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import {
  cftcDisclosure,
  draftDisclosure,
  faqs,
  fullDisclosure,
  inside,
  links,
  mantra,
  nav,
  opportunities,
  pillars,
  steps,
  testimonials,
} from './content.js'
import './App.css'

function Brand() {
  return (
    <a className="brand" href="#home">
      <img src="/favicon.png" alt="" width="42" height="42" />
      <span>Wealthy Visions <small>Academy</small></span>
    </a>
  )
}

function ExternalLink({ href, className, children }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}

function JoinLink({ className = 'btn' }) {
  return (
    <ExternalLink href={links.community} className={className}>
      Join the Free Community <ArrowRight size={16} aria-hidden="true" />
    </ExternalLink>
  )
}

function MarketVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="visual-card">
        <div className="visual-top">
          <img src="/favicon.png" alt="" width="36" height="36" />
          <span>Identify. Confirm. Execute.</span>
        </div>
        <svg className="visual-chart" viewBox="0 0 460 230">
          <line x1="24" y1="48" x2="436" y2="48" />
          <line x1="24" y1="112" x2="436" y2="112" />
          <line x1="24" y1="176" x2="436" y2="176" />
          <path className="trace" d="M28 150 C 70 148, 100 78, 140 86 S 190 168, 236 150 S 280 70, 322 104 S 370 176, 410 140" />
          <circle cx="140" cy="86" r="4" />
          <circle cx="236" cy="150" r="4" />
          <circle cx="322" cy="104" r="4" />
        </svg>
        <ol>
          <li><b>01</b> Identify</li>
          <li><b>02</b> Confirm</li>
          <li><b>03</b> Execute</li>
        </ol>
      </div>
    </div>
  )
}

function FaqList() {
  const [current, setCurrent] = useState(null)
  return (
    <div className="faq-list">
      {faqs.map((item) => {
        const open = current === item.id
        const panelId = `faq-${item.id}`
        return (
          <div className={open ? 'faq-item open' : 'faq-item'} key={item.id}>
            <h3>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setCurrent(open ? null : item.id)}
              >
                {item.q}
                <span aria-hidden="true">{open ? '–' : '+'}</span>
              </button>
            </h3>
            <div id={panelId} role="region" hidden={!open}>
              <p>{item.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const visibleOpportunities = opportunities.filter((item) => item.enabled !== false)

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site">
      <a className="skip" href="#main">Skip to content</a>
      <header>
        <div className="container nav">
          <Brand />
          <button
            type="button"
            className="menu-btn"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          </button>
          <nav id="site-nav" className={menuOpen ? 'open' : ''} aria-label="Primary">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
            ))}
            <JoinLink />
          </nav>
        </div>
        {menuOpen && <button type="button" className="backdrop" aria-label="Close menu" onClick={closeMenu} />}
      </header>

      <main id="main">
        <section className="hero" id="home">
          <div className="glow" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Wealthy Visions Academy</p>
              <h1>Turn Your Trading Knowledge Into a <em>Repeatable Process.</em></h1>
              <p>Wealthy Visions Academy helps traders build structure, develop their skills, and grow alongside a community committed to becoming better every day.</p>
              <div className="buttons">
                <JoinLink />
                <a className="btn alt" href="#opportunities">Explore WVA</a>
              </div>
              <p className="support-line">Education. Execution. Community.</p>
            </div>
            <MarketVisual />
          </div>
        </section>

        <section className="section" id="problem">
          <div className="container">
            <div className="head">
              <h2>You’ve Learned a Lot. Now It’s Time to Put It Together.</h2>
              <p>You’ve watched the videos. You’ve studied the charts. You’ve tried different strategies.</p>
              <p>But when it’s time to trade, you still find yourself second-guessing your decisions, jumping between setups, or struggling to follow a consistent plan.</p>
              <p>You’re not alone.</p>
              <p>At Wealthy Visions Academy, we help traders move beyond collecting information and start building a structured process they can practice, review, and improve.</p>
            </div>
            <div className="feature-grid three">
              {pillars.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section band" id="about">
          <div className="container about-grid">
            <div className="head">
              <h2>A Community Built Around Growth.</h2>
              <p>Wealthy Visions Academy is a trading education community created to help traders develop the knowledge, structure, and discipline needed to navigate the markets with intention.</p>
              <p>We believe becoming a better trader takes more than finding another strategy. It takes education, practice, accountability, and a willingness to keep improving.</p>
              <p>Whether you’re just getting started or you’ve been trading for a while and are looking for more structure, there’s a place for you here.</p>
            </div>
            <p className="mantra">
              {mantra.map((line) => <span key={line}>{line}</span>)}
            </p>
          </div>
        </section>

        <section className="section" id="approach">
          <div className="container">
            <div className="head">
              <h2>A Clearer Way to Approach the Markets.</h2>
              <p>Our approach is built around helping traders simplify the decision-making process. Rather than chasing every move, we focus on understanding where price is, waiting for confirmation, and executing with a plan.</p>
            </div>
            <ol className="steps">
              {steps.map((step) => (
                <li key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </li>
              ))}
            </ol>
            <p className="principle">Liquidity first. Shift second. Entry last.</p>
            <ExternalLink href={links.playbook} className="btn">
              Explore the ICE Playbook <ArrowRight size={16} aria-hidden="true" />
            </ExternalLink>
          </div>
        </section>

        <section className="section band" id="opportunities">
          <div className="container">
            <div className="head">
              <h2>Find Your Place Inside Wealthy Visions.</h2>
              <p>Whether you’re looking for a community, live market education, or more personalized guidance, there’s a way to get involved.</p>
            </div>
            <div className="card-grid">
              {visibleOpportunities.map((item) => (
                <article className={item.featured ? 'opp-card featured' : 'opp-card'} key={item.id}>
                  <p className="kicker">{item.kicker}</p>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <p className="best"><span>Best for</span> {item.bestFor}</p>
                  {item.href ? (
                    <ExternalLink href={item.href} className="btn">
                      {item.cta} <ArrowRight size={16} aria-hidden="true" />
                    </ExternalLink>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="inside">
          <div className="container">
            <div className="head">
              <h2>More Than a Course. A Community in Action.</h2>
              <p>Inside Wealthy Visions, education doesn’t stop after you finish a lesson. Our community comes together throughout the week to study the markets, ask questions, review trades, and work toward becoming more disciplined traders.</p>
            </div>
            <div className="feature-grid four">
              {inside.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {testimonials.length > 0 && (
          <section className="section" id="voices">
            <div className="container">
              <div className="head">
                <h2>Real People. Real Progress.</h2>
              </div>
              <div className="card-grid">
                {testimonials.map((item) => (
                  <figure className="quote-card" key={item.name}>
                    <blockquote><p>{item.quote}</p></blockquote>
                    <figcaption>{item.name}{item.detail ? <span>{item.detail}</span> : null}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="section" id="faq">
          <div className="container faq-wrap">
            <div className="head">
              <h2>Common Questions</h2>
              <p>A few things people usually want to know before they join.</p>
            </div>
            <FaqList />
          </div>
        </section>

        <section className="section final" id="join">
          <div className="container">
            <div className="final-card">
              <h2>Your Next Chapter Starts With a Better Process.</h2>
              <p>You don’t have to figure it all out alone. Join the Wealthy Visions community and take the next step in your trading journey.</p>
              <div className="buttons">
                <JoinLink />
                <a className="btn alt" href="#opportunities">Explore Our Programs</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-top">
          <div>
            <Brand />
            <p className="operator">Wealthy Visions Academy is operated by Wealthy Visions LLC.</p>
          </div>
          <nav aria-label="Footer">
            {nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
            <ExternalLink href={links.community}>Join the Free Community</ExternalLink>
          </nav>
        </div>
        <div className="container legal">
          <p>{draftDisclosure}</p>
          <p>{fullDisclosure}</p>
          <p>{cftcDisclosure}</p>
          <p className="copyright">© 2026 Wealthy Visions LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
