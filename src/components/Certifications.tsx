import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionLabel, SectionTitle } from './About'

const certs = [
  {
    title: 'MERN Full Stack Certification Program',
    issuer: 'Ethnus Codemithra',
    year: '2025',
    badge: '💻',
    color: '#C98A6A',
  },
  {
    title: 'Microsoft Azure Data Fundamentals',
    issuer: 'Microsoft',
    year: '2025',
    badge: '☁️',
    color: '#0078D4',
  },
  {
    title: 'Introduction to Machine Learning',
    issuer: 'NPTEL',
    year: '2024',
    badge: '🤖',
    color: '#8B6B4A',
    extra: 'Silver Badge · 75%',
  },
  {
    title: 'Marketing Analytics',
    issuer: 'NPTEL',
    year: '2024',
    badge: '📊',
    color: '#A0785A',
    extra: 'Elite + Gold · Top 5% · 97%',
  },
]

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="certifications"
      ref={ref}
      style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, transparent, rgba(245,230,211,0.3), transparent)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionLabel>Certifications</SectionLabel>
        <SectionTitle inView={inView}>
          Credentials & <span style={{ color: 'var(--accent)' }}>achievements</span>
        </SectionTitle>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1.5rem',
          marginTop: '3rem',
        }}>
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
              style={{
                background: 'rgba(255,255,255,0.72)',
                backdropFilter: 'blur(12px)',
                border: `1px solid ${cert.color}25`,
                borderRadius: '1.25rem',
                padding: '1.75rem',
                boxShadow: '0 4px 24px rgba(139,107,74,0.08)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 36px ${cert.color}22`
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 24px rgba(139,107,74,0.08)'
              }}
            >
              {/* Decorative corner */}
              <div style={{
                position: 'absolute',
                top: -20,
                right: -20,
                width: 80,
                height: 80,
                borderRadius: '50%',
                background: `${cert.color}10`,
              }} />

              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{cert.badge}</div>

              <h3 style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: '0.95rem',
                color: 'var(--foreground)',
                margin: 0,
                marginBottom: '0.5rem',
                lineHeight: 1.4,
              }}>
                {cert.title}
              </h3>

              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.82rem',
                color: cert.color,
                fontWeight: 600,
                margin: 0,
                marginBottom: cert.extra ? '0.5rem' : 0,
              }}>
                {cert.issuer} · {cert.year}
              </p>

              {cert.extra && (
                <span style={{
                  display: 'inline-block',
                  padding: '0.2rem 0.7rem',
                  background: `${cert.color}15`,
                  color: cert.color,
                  borderRadius: '100px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                }}>
                  {cert.extra}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
