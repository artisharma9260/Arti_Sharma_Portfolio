import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionLabel, SectionTitle } from './About'

const categories = [
  {
    title: 'Languages',
    icon: '💻',
    color: '#C98A6A',
    skills: [
      { name: 'C++', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'JavaScript', level: 90 },
    ],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    color: '#8B6B4A',
    skills: [
      { name: 'HTML/CSS', level: 92 },
      { name: 'React.js', level: 88 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: '#A0785A',
    skills: [
      { name: 'Node.js', level: 82 },
      { name: 'Express.js', level: 80 },
    ],
  },
  {
    title: 'Database',
    icon: '🗄️',
    color: '#C98A6A',
    skills: [
      { name: 'MongoDB', level: 78 },
      { name: 'MySQL', level: 75 },
    ],
  },
  {
    title: 'Tools',
    icon: '🛠️',
    color: '#8B6B4A',
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'NumPy', level: 72 },
      { name: 'Tkinter', level: 65 },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <SectionLabel>Technical Skills</SectionLabel>
      <SectionTitle inView={inView}>
        What I work with
      </SectionTitle>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1.5rem',
        marginTop: '3rem',
      }}>
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: ci * 0.1, ease: 'easeOut' }}
            style={{
              background: 'rgba(255,255,255,0.72)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(201,138,106,0.18)',
              borderRadius: '1.25rem',
              padding: '1.75rem',
              boxShadow: '0 4px 24px rgba(139,107,74,0.08)',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            }}
            onMouseEnter={e => {
              ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)'
              ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 36px rgba(201,138,106,0.18)'
            }}
            onMouseLeave={e => {
              ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
              ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 24px rgba(139,107,74,0.08)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: 44,
                height: 44,
                borderRadius: '0.75rem',
                background: `${cat.color}20`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.35rem',
              }}>
                {cat.icon}
              </div>
              <h3 style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: '1rem',
                color: 'var(--foreground)',
                margin: 0,
              }}>
                {cat.title}
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {cat.skills.map((skill, si) => (
                <div key={skill.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <span style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: 'var(--foreground)',
                    }}>
                      {skill.name}
                    </span>
                    <span style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: cat.color,
                    }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div style={{
                    height: '6px',
                    background: 'var(--secondary)',
                    borderRadius: '3px',
                    overflow: 'hidden',
                  }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 0.8, delay: ci * 0.1 + si * 0.1 + 0.3, ease: 'easeOut' }}
                      style={{
                        height: '100%',
                        background: `linear-gradient(90deg, ${cat.color}, ${cat.color}99)`,
                        borderRadius: '3px',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
