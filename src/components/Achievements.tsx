import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionLabel, SectionTitle } from './About'

const achievements = [
  {
    title: 'Top 5% Nationwide',
    description: 'NPTEL Marketing Analytics — Elite + Gold badge with 97% score',
    icon: '🥇',
    color: '#C98A6A',
    stat: 'Top 5%',
  },
  {
    title: '280+ Problems Solved',
    description: 'Consistent problem-solver on LeetCode across data structures & algorithms',
    icon: '💡',
    color: '#8B6B4A',
    stat: '280+',
  },
  {
    title: 'Blockchain Club Co-Lead',
    description: 'Driving content, community & education at VIT Bhopal\'s Blockchain Club',
    icon: '⛓️',
    color: '#A0785A',
    stat: 'Co-Lead',
  },
  {
    title: 'Full Stack Projects',
    description: 'Built production-ready applications solving real student challenges',
    icon: '🚀',
    color: '#C98A6A',
    stat: '3+',
  },
]

export default function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="achievements" ref={ref} style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <SectionLabel>Achievements</SectionLabel>
      <SectionTitle inView={inView}>
        Milestones & <span style={{ color: 'var(--accent)' }}>recognitions</span>
      </SectionTitle>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: '1.5rem',
        marginTop: '3rem',
      }}>
        {achievements.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            style={{
              background: 'rgba(255,255,255,0.72)',
              backdropFilter: 'blur(12px)',
              border: `1px solid ${a.color}20`,
              borderRadius: '1.25rem',
              padding: '2rem 1.75rem',
              boxShadow: '0 4px 24px rgba(139,107,74,0.08)',
              textAlign: 'center',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px) scale(1.02)'
              ;(e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 40px ${a.color}28`
            }}
            onMouseLeave={e => {
              ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(0) scale(1)'
              ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 24px rgba(139,107,74,0.08)'
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{a.icon}</div>
            <div style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 800,
              fontSize: '1.75rem',
              color: a.color,
              marginBottom: '0.25rem',
            }}>
              {a.stat}
            </div>
            <h3 style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '0.95rem',
              color: 'var(--foreground)',
              margin: 0,
              marginBottom: '0.5rem',
            }}>
              {a.title}
            </h3>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.83rem',
              color: 'var(--muted-foreground)',
              lineHeight: 1.6,
              margin: 0,
            }}>
              {a.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
