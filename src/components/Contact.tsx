import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionLabel, SectionTitle } from './About'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [copied, setCopied] = useState(false)
  const [sent, setSent] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('artirai7542@gmail.com').then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, transparent, rgba(245,230,211,0.4), transparent)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionLabel>Contact</SectionLabel>
        <SectionTitle inView={inView}>
          Let's <span style={{ color: 'var(--accent)' }}>connect</span>
        </SectionTitle>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          marginTop: '3rem',
          alignItems: 'start',
        }}>
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: '#4A3A2E',
              marginBottom: '2rem',
            }}>
              I'm always open to new opportunities, collaborations, or just a friendly chat
              about tech, AI, or development. Feel free to reach out!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              <ContactDetail icon="👤" label="Name" value="Arti Sharma" />
              <ContactDetail
                icon="📧"
                label="Email"
                value="artirai7542@gmail.com"
                action={
                  <button
                    onClick={copyEmail}
                    style={{
                      marginLeft: 'auto',
                      background: copied ? 'rgba(201,138,106,0.15)' : 'var(--secondary)',
                      color: 'var(--primary)',
                      border: 'none',
                      borderRadius: '100px',
                      padding: '0.3rem 0.9rem',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    {copied ? '✓ Copied!' : 'Copy'}
                  </button>
                }
              />
              <ContactDetail icon="📱" label="Phone" value="+91 9260952761" />
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <SocialCard href="https://github.com/artisharma9260" label="GitHub" icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              } />
              <SocialCard href="https://leetcode.com/u/Arti_Sharma_02/" label="LeetCode" icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                </svg>
              } />
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}
            onSubmit={handleSubmit}
            style={{
              background: 'rgba(255,255,255,0.72)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(201,138,106,0.2)',
              borderRadius: '1.5rem',
              padding: '2.5rem',
              boxShadow: '0 8px 40px rgba(139,107,74,0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            <FormField
              label="Your Name"
              value={form.name}
              onChange={v => setForm(f => ({ ...f, name: v }))}
              placeholder="Jane Doe"
              type="text"
              required
            />
            <FormField
              label="Email Address"
              value={form.email}
              onChange={v => setForm(f => ({ ...f, email: v }))}
              placeholder="jane@example.com"
              type="email"
              required
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--foreground)',
              }}>
                Message
              </label>
              <textarea
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                placeholder="Tell me about the opportunity or project..."
                required
                rows={4}
                style={{
                  padding: '0.875rem 1rem',
                  borderRadius: '0.75rem',
                  border: '1.5px solid var(--border)',
                  background: 'rgba(250,248,245,0.8)',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.9rem',
                  color: 'var(--foreground)',
                  resize: 'vertical',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                onBlur={e => (e.target.style.borderColor = 'var(--border)')}
              />
            </div>

            <button
              type="submit"
              style={{
                padding: '0.875rem',
                borderRadius: '100px',
                background: sent
                  ? 'rgba(201,138,106,0.15)'
                  : 'linear-gradient(135deg, var(--accent), var(--primary))',
                color: sent ? 'var(--accent)' : 'white',
                border: 'none',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '0.95rem',
                cursor: 'pointer',
                boxShadow: sent ? 'none' : '0 4px 20px rgba(201,138,106,0.35)',
                transition: 'all 0.3s ease',
              }}
            >
              {sent ? '✓ Message Sent!' : 'Send Message →'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function ContactDetail({ icon, label, value, action }: {
  icon: string; label: string; value: string; action?: React.ReactNode
}) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.875rem',
      padding: '0.875rem 1rem',
      background: 'rgba(255,255,255,0.65)',
      backdropFilter: 'blur(8px)',
      border: '1px solid var(--border)',
      borderRadius: '0.875rem',
    }}>
      <span style={{ fontSize: '1.1rem' }}>{icon}</span>
      <div style={{ flex: 1 }}>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.72rem',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--muted-foreground)',
          margin: 0,
        }}>{label}</p>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.9rem',
          color: 'var(--foreground)',
          fontWeight: 500,
          margin: 0,
        }}>{value}</p>
      </div>
      {action}
    </div>
  )
}

function FormField({ label, value, onChange, placeholder, type, required }: {
  label: string; value: string; onChange: (v: string) => void;
  placeholder: string; type: string; required?: boolean
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <label style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '0.85rem',
        fontWeight: 600,
        color: 'var(--foreground)',
      }}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        style={{
          padding: '0.875rem 1rem',
          borderRadius: '0.75rem',
          border: '1.5px solid var(--border)',
          background: 'rgba(250,248,245,0.8)',
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.9rem',
          color: 'var(--foreground)',
          outline: 'none',
          transition: 'border-color 0.2s',
        }}
        onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
        onBlur={e => (e.target.style.borderColor = 'var(--border)')}
      />
    </div>
  )
}

function SocialCard({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.625rem',
        padding: '0.625rem 1.25rem',
        background: 'var(--secondary)',
        color: 'var(--primary)',
        border: '1px solid var(--border)',
        borderRadius: '100px',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: '0.85rem',
        textDecoration: 'none',
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'var(--primary)'
        e.currentTarget.style.color = 'white'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'var(--secondary)'
        e.currentTarget.style.color = 'var(--primary)'
      }}
    >
      {icon}
      {label}
    </a>
  )
}
