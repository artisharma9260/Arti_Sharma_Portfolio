import { motion } from 'framer-motion'

const fu = { initial: { opacity: 0, y: 32 }, animate: { opacity: 1, y: 0 } }
const ft = (delay = 0) => ({ duration: 0.7, ease: 'easeOut' as const, delay })

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 2rem 4rem',
        maxWidth: '1200px',
        margin: '0 auto',
        gap: '4rem',
      }}
    >
      <div style={{ flex: '1 1 500px' }}>
        <motion.div {...fu} transition={ft(0.1)}>
          <span style={{
            display: 'inline-block',
            background: 'var(--secondary)',
            color: 'var(--accent)',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '0.8rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            padding: '0.35rem 1rem',
            borderRadius: '100px',
            marginBottom: '1.5rem',
          }}>
            Available for Opportunities
          </span>
        </motion.div>

        <motion.h1 {...fu} transition={ft(0.2)} style={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 800,
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          color: 'var(--foreground)',
          marginBottom: '1rem',
        }}>
          Arti{' '}
          <span style={{
            background: 'linear-gradient(135deg, var(--accent), var(--primary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Sharma
          </span>
        </motion.h1>

        <motion.p {...fu} transition={ft(0.3)} style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 500,
          fontSize: '1.05rem',
          color: 'var(--muted-foreground)',
          marginBottom: '1.5rem',
          letterSpacing: '0.01em',
        }}>
          Computer Science Engineering Student &middot; Full Stack Developer &middot; Problem Solver
        </motion.p>

        <motion.p {...fu} transition={ft(0.4)} style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '1rem',
          lineHeight: 1.75,
          color: '#5A4A3A',
          maxWidth: '520px',
          marginBottom: '2.5rem',
        }}>
          Passionate about building impactful software solutions, solving real-world problems through technology,
          and continuously learning modern development practices.
        </motion.p>

        <motion.div {...fu} transition={ft(0.5)} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          <HeroBtn href="#projects" primary>View Projects</HeroBtn>
          <HeroBtn href="https://github.com/artisharma9260/ARTI_SHARMA_RESUME/blob/main/Arti_Sharma_uResume.pdf" target="_blank">Download Resume</HeroBtn>
          <HeroBtn href="#contact">Contact Me</HeroBtn>
        </motion.div>

        <motion.div {...fu} transition={ft(0.6)} style={{ display: 'flex', gap: '1.25rem' }}>
          <SocialLink href="https://github.com/artisharma9260" label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </SocialLink>
          <SocialLink href="https://leetcode.com/u/Arti_Sharma_02/" label="LeetCode">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
            </svg>
          </SocialLink>
          <SocialLink href="mailto:artirai7542@gmail.com" label="Email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </SocialLink>
        </motion.div>
      </div>

      {/* Avatar illustration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center' }}
        className="hidden lg:flex"
      >
        <AvatarIllustration />
      </motion.div>
    </section>
  )
}

function HeroBtn({ href, children, primary, target }: {
  href: string
  children: React.ReactNode
  primary?: boolean
  target?: string
}) {
  return (
    <a
      href={href}
      target={target}
      rel={target ? 'noopener noreferrer' : undefined}
      style={{
        display: 'inline-block',
        padding: '0.75rem 1.75rem',
        borderRadius: '100px',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: '0.9rem',
        textDecoration: 'none',
        transition: 'all 0.25s ease',
        cursor: 'pointer',
        ...(primary
          ? {
              background: 'linear-gradient(135deg, var(--accent), var(--primary))',
              color: 'white',
              boxShadow: '0 4px 20px rgba(201,138,106,0.35)',
            }
          : {
              background: 'transparent',
              color: 'var(--primary)',
              border: '1.5px solid var(--primary)',
            }),
      }}
      onMouseEnter={e => {
        if (primary) {
          e.currentTarget.style.transform = 'translateY(-2px)'
          e.currentTarget.style.boxShadow = '0 8px 28px rgba(201,138,106,0.45)'
        } else {
          e.currentTarget.style.background = 'var(--secondary)'
        }
      }}
      onMouseLeave={e => {
        if (primary) {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(201,138,106,0.35)'
        } else {
          e.currentTarget.style.background = 'transparent'
        }
      }}
    >
      {children}
    </a>
  )
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        width: 44,
        height: 44,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--secondary)',
        color: 'var(--primary)',
        textDecoration: 'none',
        transition: 'all 0.25s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'var(--accent)'
        e.currentTarget.style.color = 'white'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'var(--secondary)'
        e.currentTarget.style.color = 'var(--primary)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {children}
    </a>
  )
}

function AvatarIllustration() {
  return (
    <div style={{ position: 'relative', width: 360, height: 360 }}>
      {/* Background ring */}
      <div style={{
        position: 'absolute',
        inset: 0,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, var(--secondary), rgba(201,138,106,0.3))',
        animation: 'pulse 4s ease-in-out infinite',
      }} />
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.04); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
      `}</style>

      {/* Avatar SVG */}
      <div style={{
        position: 'absolute',
        inset: '20px',
        borderRadius: '50%',
        overflow: 'hidden',
        background: 'linear-gradient(160deg, #F5E6D3 0%, #E8C9A8 100%)',
        animation: 'float 5s ease-in-out infinite',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
      }}>
        <svg viewBox="0 0 320 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%' }}>
          {/* Body */}
          <rect x="80" y="210" width="160" height="130" rx="80" fill="#8B6B4A" opacity="0.9" />
          {/* Shirt detail */}
          <rect x="105" y="215" width="110" height="120" rx="55" fill="#C98A6A" opacity="0.6" />
          {/* Neck */}
          <rect x="140" y="185" width="40" height="35" rx="8" fill="#D4A574" />
          {/* Head */}
          <ellipse cx="160" cy="155" rx="62" ry="68" fill="#D4A574" />
          {/* Hair */}
          <ellipse cx="160" cy="110" rx="62" ry="38" fill="#5A3A1A" />
          <ellipse cx="98" cy="140" rx="12" ry="28" fill="#5A3A1A" />
          <ellipse cx="222" cy="140" rx="12" ry="28" fill="#5A3A1A" />
          {/* Bun */}
          <ellipse cx="160" cy="90" rx="28" ry="22" fill="#5A3A1A" />
          {/* Eyes */}
          <ellipse cx="138" cy="152" rx="9" ry="10" fill="white" />
          <ellipse cx="182" cy="152" rx="9" ry="10" fill="white" />
          <circle cx="140" cy="154" r="5" fill="#3D2010" />
          <circle cx="184" cy="154" r="5" fill="#3D2010" />
          <circle cx="142" cy="152" r="2" fill="white" />
          <circle cx="186" cy="152" r="2" fill="white" />
          {/* Eyebrows */}
          <path d="M127 140 Q138 136 149 140" stroke="#5A3A1A" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M171 140 Q182 136 193 140" stroke="#5A3A1A" strokeWidth="3" strokeLinecap="round" fill="none" />
          {/* Nose */}
          <ellipse cx="160" cy="168" rx="5" ry="6" fill="#C4956A" />
          {/* Smile */}
          <path d="M146 183 Q160 194 174 183" stroke="#9A5C3A" strokeWidth="3" strokeLinecap="round" fill="none" />
          {/* Earrings */}
          <circle cx="98" cy="162" r="5" fill="#C98A6A" />
          <circle cx="222" cy="162" r="5" fill="#C98A6A" />
          {/* Laptop on lap hint */}
          <rect x="90" y="295" width="140" height="8" rx="4" fill="#A0896E" opacity="0.5" />
        </svg>
      </div>

      {/* Floating badges */}
      <FloatingBadge top={20} right={-10} delay="0s">React ⚛️</FloatingBadge>
      <FloatingBadge bottom={60} left={-20} delay="1s">Node.js 🌿</FloatingBadge>
      <FloatingBadge top={200} right={-30} delay="2s">280+ LC 🏆</FloatingBadge>
    </div>
  )
}

function FloatingBadge({ top, bottom, left, right, delay, children }: {
  top?: number; bottom?: number; left?: number; right?: number; delay: string; children: React.ReactNode
}) {
  return (
    <div style={{
      position: 'absolute',
      top, bottom, left, right,
      background: 'rgba(255,255,255,0.85)',
      backdropFilter: 'blur(8px)',
      border: '1px solid var(--border)',
      borderRadius: '100px',
      padding: '0.4rem 1rem',
      fontFamily: 'Inter, sans-serif',
      fontWeight: 600,
      fontSize: '0.78rem',
      color: 'var(--primary)',
      boxShadow: '0 4px 16px rgba(139,107,74,0.12)',
      animation: `float 5s ease-in-out infinite ${delay}`,
      whiteSpace: 'nowrap',
    }}>
      {children}
    </div>
  )
}
