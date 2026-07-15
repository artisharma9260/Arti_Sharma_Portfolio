import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { label: 'CGPA', value: '8.99', icon: '🎓' },
  { label: 'LeetCode Solved', value: '280+', icon: '💡' },
  { label: 'Graduation Year', value: '2027', icon: '🎯' },
  { label: 'Location', value: 'MP, India', icon: '📍' },
]

const interests = [
  'Full Stack Development',
  'Artificial Intelligence',
  'Problem Solving',
  'Open Source',
  'Product Development',
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <SectionLabel>About Me</SectionLabel>
      <SectionTitle inView={inView}>
        Passionate builder,{' '}
        <span style={{ color: 'var(--accent)' }}>curious learner</span>
      </SectionTitle>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        marginTop: '3rem',
        alignItems: 'start',
      }}>
        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <img
            src="/profile.jpeg"
            alt="Profile"
            style={{
              width: '100%',
              maxWidth: 360,
              borderRadius: '1.5rem',
              boxShadow: '0 24px 80px rgba(0,0,0,0.12)',
              objectFit: 'cover',
            }}
          />
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: '#4A3A2E',
            marginBottom: '2rem',
          }}>
            I am a Computer Science Engineering student at <strong style={{ color: 'var(--primary)' }}>VIT Bhopal University</strong> with
            a CGPA of 8.99. I enjoy building web applications, exploring AI-powered solutions, solving data structures
            and algorithms problems, and contributing to student-focused initiatives.
          </p>

          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.95rem',
            fontWeight: 600,
            color: 'var(--muted-foreground)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '0.875rem',
          }}>
            I'm particularly interested in
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
            {interests.map(i => (
              <span
                key={i}
                style={{
                  display: 'inline-block',
                  padding: '0.4rem 1rem',
                  background: 'var(--secondary)',
                  color: 'var(--primary)',
                  borderRadius: '100px',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: '0.85rem',
                  border: '1px solid rgba(139,107,74,0.2)',
                }}
              >
                {i}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              style={{
                background: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(201,138,106,0.2)',
                borderRadius: '1rem',
                padding: '1.5rem',
                textAlign: 'center',
                boxShadow: '0 4px 24px rgba(139,107,74,0.08)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(201,138,106,0.18)'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 24px rgba(139,107,74,0.08)'
              }}
            >
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{s.icon}</div>
              <div style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: '1.5rem',
                color: 'var(--primary)',
                marginBottom: '0.25rem',
              }}>{s.value}</div>
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.8rem',
                color: 'var(--muted-foreground)',
                fontWeight: 500,
              }}>{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: 'Inter, sans-serif',
      fontWeight: 600,
      fontSize: '0.78rem',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: '0.75rem',
    }}>
      {children}
    </p>
  )
}

export function SectionTitle({ children, inView }: { children: React.ReactNode; inView?: boolean }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={inView !== false ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 700,
        fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
        letterSpacing: '-0.02em',
        color: 'var(--foreground)',
        lineHeight: 1.2,
        marginBottom: '0.5rem',
      }}
    >
      {children}
    </motion.h2>
  )
}
