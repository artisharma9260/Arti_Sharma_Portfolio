import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionLabel, SectionTitle } from './About'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" ref={ref} style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <SectionLabel>Experience</SectionLabel>
      <SectionTitle inView={inView}>Where I've contributed</SectionTitle>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, delay: 0.2 }}
        style={{
          marginTop: '3rem',
          background: 'rgba(255,255,255,0.75)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(201,138,106,0.22)',
          borderRadius: '1.5rem',
          padding: '2.5rem',
          boxShadow: '0 8px 40px rgba(139,107,74,0.1)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem',
          alignItems: 'center',
        }}
      >
        {/* Left info */}
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(201,138,106,0.12)',
            color: 'var(--accent)',
            padding: '0.3rem 0.9rem',
            borderRadius: '100px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.78rem',
            fontWeight: 600,
            marginBottom: '1rem',
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', animation: 'blink 1.5s ease-in-out infinite' }} />
            Currently Active
          </div>
          <style>{`@keyframes blink { 0%,100% { opacity: 1 } 50% { opacity: 0.3 } }`}</style>

          <h3 style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 700,
            fontSize: '1.35rem',
            color: 'var(--foreground)',
            margin: 0,
            marginBottom: '0.25rem',
          }}>
            Content Writer & Co-Lead
          </h3>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1rem',
            color: 'var(--accent)',
            fontWeight: 600,
            margin: 0,
            marginBottom: '0.5rem',
          }}>
            Blockchain Club, VIT Bhopal
          </p>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.875rem',
            color: 'var(--muted-foreground)',
            margin: 0,
          }}>
            Dec 2024 – Present
          </p>
        </div>

        {/* Responsibilities */}
        <div>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.78rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--muted-foreground)',
            marginBottom: '1rem',
          }}>
            Responsibilities
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
            {[
              'Creating technical articles on blockchain & Web3',
              'Managing content strategy and editorial calendar',
              'Social media promotion and community engagement',
              'Team mentoring and coordination',
            ].map((r, i) => (
              <motion.div
                key={r}
                initial={{ opacity: 0, x: 12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.08 }}
                style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}
              >
                <span style={{
                  marginTop: '3px',
                  flexShrink: 0,
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  background: 'rgba(201,138,106,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  fontSize: '0.7rem',
                }}>✓</span>
                <span style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.9rem',
                  color: '#4A3A2E',
                  lineHeight: 1.5,
                }}>
                  {r}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
