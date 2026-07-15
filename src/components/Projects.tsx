import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { SectionLabel, SectionTitle } from './About'

const projects = [
  {
    title: 'StudentSathi',
    subtitle: 'One-Stop Digital Guide for Student Empowerment',
    description:
      'A centralized platform providing verified information about government schemes, documents, certificates, academic resources, and emergency assistance through easy step-by-step workflows.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    tags: ['fullstack', 'social'],
    color: '#C98A6A',
    emoji: '🎓',
    github: 'https://github.com/artisharma9260',
  },
  {
    title: 'ClickCraft AI',
    subtitle: 'AI-Powered Thumbnail Generator',
    description:
      'An intelligent thumbnail generation platform that creates engaging thumbnails from user prompts with automated text placement, image enhancement, customizable templates, and real-time preview.',
    tech: ['React', 'AI APIs', 'Node.js'],
    tags: ['ai', 'fullstack'],
    color: '#8B6B4A',
    emoji: '🤖',
    github: 'https://github.com/artisharma9260',
  },
  {
    title: 'SkillSprint AI',
    subtitle: 'Opportunity Discovery Platform',
    description:
      'An AI-powered platform that helps students discover internships, hackathons, scholarships, and fellowships while performing GitHub-based skill analysis and identifying skill gaps against opportunity requirements.',
    tech: ['React', 'Node.js', 'MongoDB', 'AI'],
    tags: ['ai', 'fullstack', 'social'],
    color: '#A0785A',
    emoji: '🚀',
    github: 'https://github.com/artisharma9260',
  },
]

const allTags = ['all', 'fullstack', 'ai', 'social']

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all' ? projects : projects.filter(p => p.tags.includes(filter))

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, transparent 0%, rgba(245,230,211,0.35) 50%, transparent 100%)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionLabel>Featured Projects</SectionLabel>
        <SectionTitle inView={inView}>
          Things I've <span style={{ color: 'var(--accent)' }}>built</span>
        </SectionTitle>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '2rem', marginBottom: '3rem' }}
        >
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              style={{
                padding: '0.4rem 1.25rem',
                borderRadius: '100px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '0.82rem',
                textTransform: 'capitalize',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: filter === tag ? 'none' : '1.5px solid var(--border)',
                background: filter === tag
                  ? 'linear-gradient(135deg, var(--accent), var(--primary))'
                  : 'transparent',
                color: filter === tag ? 'white' : 'var(--muted-foreground)',
                boxShadow: filter === tag ? '0 4px 16px rgba(201,138,106,0.3)' : 'none',
              }}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '2rem',
        }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.45, delay: i * 0.1, ease: 'easeOut' }}
                style={{
                  background: 'rgba(255,255,255,0.75)',
                  backdropFilter: 'blur(14px)',
                  border: '1px solid rgba(201,138,106,0.2)',
                  borderRadius: '1.25rem',
                  overflow: 'hidden',
                  boxShadow: '0 4px 28px rgba(139,107,74,0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}
                onMouseEnter={e => {
                  ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(-8px)'
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 48px rgba(201,138,106,0.2)'
                }}
                onMouseLeave={e => {
                  ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 28px rgba(139,107,74,0.1)'
                }}
              >
                {/* Card header */}
                <div style={{
                  padding: '2rem',
                  background: `linear-gradient(135deg, ${p.color}18, ${p.color}08)`,
                  borderBottom: `1px solid ${p.color}22`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}>
                  <div style={{
                    width: 56,
                    height: 56,
                    borderRadius: '1rem',
                    background: `${p.color}22`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.75rem',
                    flexShrink: 0,
                  }}>
                    {p.emoji}
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 700,
                      fontSize: '1.15rem',
                      color: 'var(--foreground)',
                      margin: 0,
                      marginBottom: '0.2rem',
                    }}>
                      {p.title}
                    </h3>
                    <p style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.8rem',
                      color: p.color,
                      fontWeight: 500,
                      margin: 0,
                    }}>
                      {p.subtitle}
                    </p>
                  </div>
                </div>

                {/* Card body */}
                <div style={{ padding: '1.5rem 2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    color: '#5A4A3A',
                    margin: 0,
                    marginBottom: '1.5rem',
                    flex: 1,
                  }}>
                    {p.description}
                  </p>

                  {/* Tech stack */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {p.tech.map(t => (
                      <span
                        key={t}
                        style={{
                          padding: '0.25rem 0.75rem',
                          background: 'var(--secondary)',
                          color: 'var(--primary)',
                          borderRadius: '100px',
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          border: '1px solid rgba(139,107,74,0.15)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <ProjectBtn href={p.github}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: 6 }}>
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      GitHub
                    </ProjectBtn>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

function ProjectBtn({ href, children, primary, color }: {
  href: string; children: React.ReactNode; primary?: boolean; color?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.5rem 1.25rem',
        borderRadius: '100px',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: '0.82rem',
        textDecoration: 'none',
        transition: 'all 0.2s ease',
        ...(primary
          ? {
              background: color || 'var(--accent)',
              color: 'white',
              boxShadow: `0 3px 14px ${color || 'var(--accent)'}44`,
            }
          : {
              background: 'transparent',
              color: 'var(--primary)',
              border: '1.5px solid var(--border)',
            }),
      }}
      onMouseEnter={e => { e.currentTarget.style.opacity = '0.85' }}
      onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
    >
      {children}
    </a>
  )
}
