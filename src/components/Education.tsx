import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionLabel, SectionTitle } from './About'

const timeline = [
  {
    institution: 'VIT Bhopal University',
    degree: 'B.Tech in Computer Science and Engineering',
    period: '2023 – 2027',
    detail: 'CGPA: 8.99',
    icon: '🎓',
    current: true,
  },
  {
    institution: 'Little Flower House, Varanasi',
    degree: 'Class XII',
    period: '2021 – 2022',
    detail: 'Percentage: 88.8%',
    icon: '📚',
    current: false,
  },
  {
    institution: 'Shah Faiz Public School, Ghazipur',
    degree: 'Class X',
    period: '2019 – 2020',
    detail: 'Percentage: 89.4%',
    icon: '🏫',
    current: false,
  },
]

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="education"
      ref={ref}
      style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, transparent 0%, rgba(245,230,211,0.4) 50%, transparent 100%)',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <SectionLabel>Education</SectionLabel>
        <SectionTitle inView={inView}>Academic Journey</SectionTitle>

        <div style={{ position: 'relative', marginTop: '3rem' }}>
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            style={{
              position: 'absolute',
              left: '28px',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'linear-gradient(180deg, var(--accent), var(--secondary))',
              transformOrigin: 'top',
              borderRadius: '1px',
            }}
          />

          {timeline.map((item, i) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15, ease: 'easeOut' }}
              style={{
                display: 'flex',
                gap: '2rem',
                marginBottom: '2.5rem',
                position: 'relative',
              }}
            >
              {/* Dot */}
              <div style={{
                flexShrink: 0,
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: item.current
                  ? 'linear-gradient(135deg, var(--accent), var(--primary))'
                  : 'var(--secondary)',
                border: `3px solid ${item.current ? 'var(--accent)' : 'var(--border)'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                boxShadow: item.current ? '0 4px 20px rgba(201,138,106,0.3)' : 'none',
                zIndex: 1,
              }}>
                {item.icon}
              </div>

              {/* Card */}
              <div
                style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.7)',
                  backdropFilter: 'blur(12px)',
                  border: `1px solid ${item.current ? 'rgba(201,138,106,0.35)' : 'var(--border)'}`,
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  boxShadow: item.current
                    ? '0 4px 24px rgba(201,138,106,0.12)'
                    : '0 2px 12px rgba(139,107,74,0.06)',
                  transition: 'transform 0.25s ease',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.transform = 'translateX(6px)')}
                onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.transform = 'translateX(0)')}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <h3 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    fontSize: '1.05rem',
                    color: 'var(--foreground)',
                    margin: 0,
                  }}>
                    {item.institution}
                  </h3>
                  {item.current && (
                    <span style={{
                      display: 'inline-block',
                      padding: '0.2rem 0.75rem',
                      background: 'rgba(201,138,106,0.15)',
                      color: 'var(--accent)',
                      borderRadius: '100px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                    }}>
                      Current
                    </span>
                  )}
                </div>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.9rem',
                  color: 'var(--muted-foreground)',
                  margin: '0.25rem 0',
                }}>{item.degree}</p>
                <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.75rem' }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600 }}>
                    📅 {item.period}
                  </span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600 }}>
                    ⭐ {item.detail}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
