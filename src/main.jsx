import React from 'react'
import { createRoot } from 'react-dom/client'
import { motion } from 'framer-motion'
import { Building2, Home, ShieldCheck, TrendingUp, Mail, MapPin } from 'lucide-react'
import './styles.css'

const logoPath = '/tide-logo.png'

function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="container nav">
          <div className="brand">
            <img src={logoPath} alt="Tide Business Holdings LLC logo" className="brand-logo" />
            <div>
              <p className="brand-title">Tide Business Holdings LLC</p>
              <p className="brand-subtitle">Private Holdings & Real Estate Investment</p>
            </div>
          </div>
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#focus">Focus</a>
            <a href="#values">Values</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="container hero">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="eyebrow">Private Holding Company</p>
            <h1>Building durable assets with a long-term mindset.</h1>
            <p className="hero-text">Tide Business Holdings LLC is a private holding company focused on real estate ownership, disciplined investment, and long-term business value creation.</p>
            <div className="buttons">
              <a className="button primary" href="#contact">Contact Us</a>
              <a className="button secondary" href="#focus">Investment Focus</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="feature-card">
            <div className="logo-wrap"><img src={logoPath} alt="Tide Business Holdings LLC logo" className="main-logo" /></div>
            <div className="tile-grid">
              <div className="tile"><Building2 /><p>Holding Company</p><span>Structured for disciplined asset ownership.</span></div>
              <div className="tile dark"><Home /><p>Real Estate</p><span>Residential investment and property ownership.</span></div>
              <div className="tile"><ShieldCheck /><p>Stewardship</p><span>Protecting capital through careful execution.</span></div>
              <div className="tile"><TrendingUp /><p>Growth</p><span>Compounding value over time.</span></div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="section white">
          <div className="container narrow">
            <p className="eyebrow">About</p>
            <h2>A private platform for long-term ownership.</h2>
            <p>Tide Business Holdings LLC was established to acquire, hold, and manage business and real estate interests with a focus on stability, responsible growth, and operational discipline. The company is built around a simple principle: make thoughtful decisions today that create durable value tomorrow.</p>
          </div>
        </section>

        <section id="focus" className="container section">
          <p className="eyebrow">Investment Focus</p>
          <h2>Where we focus.</h2>
          <div className="cards">
            <Info title="Residential Real Estate" text="Acquiring and holding rental housing assets with practical, long-term fundamentals." />
            <Info title="Small Business Interests" text="Evaluating opportunities where disciplined ownership and operational improvement can create value." />
            <Info title="Capital Preservation" text="Prioritizing downside protection, clean structure, and responsible financial management." />
          </div>
        </section>

        <section id="values" className="section dark-section">
          <div className="container">
            <p className="eyebrow muted">Values</p>
            <h2>How we operate.</h2>
            <div className="cards">
              <Info title="Discipline" text="We value clean structure, careful underwriting, and thoughtful decision-making." dark />
              <Info title="Integrity" text="We aim to operate professionally with tenants, partners, service providers, and stakeholders." dark />
              <Info title="Patience" text="We believe lasting value is built through consistency, not shortcuts." dark />
            </div>
          </div>
        </section>

        <section id="contact" className="container section">
          <div className="contact-card">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Get in touch.</h2>
              <p>For inquiries related to Tide Business Holdings LLC, please contact us directly.</p>
            </div>
            <div className="contact-info">
              <p><Mail size={20} /> contact@tidebusinessholdings.com</p>
              <p><MapPin size={20} /> United States</p>
            </div>
          </div>
        </section>
      </main>

      <footer><div className="container footer"><p>© {new Date().getFullYear()} Tide Business Holdings LLC. All rights reserved.</p><p>Private holding company.</p></div></footer>
    </div>
  )
}

function Info({ title, text, dark }) {
  return <div className={dark ? 'info-card dark-card' : 'info-card'}><h3>{title}</h3><p>{text}</p></div>
}

createRoot(document.getElementById('root')).render(<App />)
