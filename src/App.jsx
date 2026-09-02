import { useEffect } from 'react'
import './App.css'

const navItems = ['Projects', 'Skills', 'About', 'Contact']

const projects = [
  {
    title: 'FinTrack Dashboard',
    category: 'Full-Stack SaaS',
    year: '2026',
    stack: ['Next.js', 'PostgreSQL', 'WebSocket'],
    accent: 'blue',
    image: 'dashboard',
  },
  {
    title: 'Orbit AI Copilot',
    category: 'AI / LLM Integration',
    year: '2026',
    stack: ['Python', 'FastAPI', 'OpenAI'],
    accent: 'purple',
    image: 'ai',
  },
  {
    title: 'Pulse Commerce',
    category: 'E-Commerce Platform',
    year: '2025',
    stack: ['React', 'Stripe', 'Node.js'],
    accent: 'cyan',
    image: 'commerce',
  },
  {
    title: 'SignalOps',
    category: 'Operations Intelligence',
    year: '2025',
    stack: ['TypeScript', 'GraphQL', 'AWS'],
    accent: 'orange',
    image: 'ops',
  },
]

const skills = [
  { name: 'React', level: 97, code: 'Re', tone: 'blue' },
  { name: 'Next.js', level: 95, code: 'Nx', tone: 'purple' },
  { name: 'TypeScript', level: 93, code: 'TS', tone: 'blue' },
  { name: 'Node.js', level: 90, code: 'No', tone: 'green' },
  { name: 'Python', level: 85, code: 'Py', tone: 'amber' },
  { name: 'PostgreSQL', level: 88, code: 'SQ', tone: 'cyan' },
  { name: 'TailwindCSS', level: 98, code: 'Tw', tone: 'cyan' },
  { name: 'Docker', level: 80, code: 'Dk', tone: 'blue' },
  { name: 'Git', level: 95, code: 'Gt', tone: 'orange' },
  { name: 'Figma', level: 78, code: 'Fi', tone: 'purple' },
  { name: 'AWS', level: 75, code: 'AW', tone: 'amber' },
  { name: 'GraphQL', level: 82, code: 'GQ', tone: 'pink' },
]

const stack = [
  'Redis',
  'MongoDB',
  'Prisma',
  'tRPC',
  'Zustand',
  'Framer Motion',
  'Jest',
  'Cypress',
  'Nginx',
  'Vercel',
  'Railway',
  'Supabase',
]

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll')

    if (!revealElements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    revealElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app-shell">
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />
      <div className="background-orb orb-three" />
      <div className="grid-overlay" />

      <header className="topbar reveal-on-scroll">
        <div className="brand-wrap">
          <div className="brand-mark">&lt;/&gt;</div>
          <span>
            Rehan<span className="brand-accent">.dev</span>
          </span>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hire-btn">
          HIRE ME
        </a>
      </header>

      <main>
        <section className="hero section-shell reveal-on-scroll">
          <div className="hero-copy">
            <p className="eyebrow">FULL-STACK DEVELOPER</p>
            <h1>
              REHAN
              <span className="highlight">ANSARI</span>
              <span className="muted">.DEV</span>
            </h1>
            <p className="subtext">
              I build fast, scalable web applications — from pixel-perfect interfaces
              to robust backend systems.
            </p>
            <div className="status-row">
              <span className="status-dot" />
              <span>STATUS: OPEN TO OPPORTUNITIES</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Technology orbit diagram">
            <div className="orbital-system">
              <div className="core-glow">&lt;/&gt;</div>

              <div className="orbit ring-inner orbit-fast">
                <span className="tech-badge blue">TS</span>
                <span className="tech-badge green">No</span>
                <span className="tech-badge cyan">Tw</span>
              </div>

              <div className="orbit ring-middle orbit-medium">
                <span className="tech-badge white">Nx</span>
                <span className="tech-badge blue-soft">SQ</span>
                <span className="tech-badge pink">GQ</span>
                <span className="tech-badge orange">Gt</span>
              </div>

              <div className="orbit ring-outer orbit-slow">
                <span className="tech-badge blue">Re</span>
                <span className="tech-badge dark-blue">Dk</span>
                <span className="tech-badge amber">Py</span>
                <span className="tech-badge purple">Fi</span>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section-shell project-section reveal-on-scroll">
          <div className="section-heading">
            <p className="eyebrow muted-eyebrow">(SELECTED WORK)</p>
            <h2>Projects That Ship.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`project-card ${project.accent} reveal-on-scroll`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="project-visual">
                  <div className={`project-image project-image-${project.image}`} />
                  <div className="project-label">{project.title.toUpperCase()}</div>
                </div>
                <div className="project-body">
                  <div className="project-meta">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <div className="stack-row">
                    {project.stack.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section-shell skills-section reveal-on-scroll">
          <div className="section-heading">
            <p className="eyebrow muted-eyebrow">(TECHNICAL EXPERTISE)</p>
            <h2>Skills & Technologies</h2>
          </div>

          <div className="skill-grid">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="skill-card reveal-on-scroll"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="skill-top">
                  <div className={`skill-icon ${skill.tone}`}>{skill.code}</div>
                  <div className="skill-copy">
                    <h3>{skill.name}</h3>
                    <span>{skill.name === 'React' ? 'Frontend' : skill.name === 'Next.js' ? 'Framework' : skill.name === 'Python' ? 'Language' : skill.name === 'PostgreSQL' ? 'Database' : skill.name === 'TailwindCSS' ? 'Styling' : skill.name === 'Docker' ? 'DevOps' : skill.name === 'Git' ? 'Version Control' : skill.name === 'Figma' ? 'Design' : skill.name === 'AWS' ? 'Cloud' : skill.name === 'GraphQL' ? 'API' : 'Language'}</span>
                  </div>
                  <strong>{skill.level}%</strong>
                </div>
                <div className="progress-bar">
                  <span style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="stack-strip">
            <p>ALSO COMFORTABLE WITH</p>
            <div className="stack-pills">
              {stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-shell about-section reveal-on-scroll">
          <div className="about-copy">
            <p className="eyebrow muted-eyebrow">(ABOUT ME)</p>
            <h2>Building the Web, Properly.</h2>
            <p>
              I'm Rehan Ansari — a full-stack developer who believes that great
              software is built at the intersection of clean engineering and
              thoughtful design.
            </p>
            <div className="stats-row">
              <div>
                <strong>4+</strong>
                <span>Years Exp</span>
              </div>
              <div>
                <strong>32+</strong>
                <span>Projects</span>
              </div>
            </div>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <span>2026</span>
              <h4>Senior Developer</h4>
            </div>
            <div className="timeline-item">
              <span>2023</span>
              <h4>FinTrack Acquisition</h4>
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell contact-section reveal-on-scroll">
          <div>
            <p className="eyebrow muted-eyebrow">(HIRE ME)</p>
            <h2>Let's build something great.</h2>
            <div className="email-line">
              Email:{' '}
              <a href="mailto:ansari.rehan.24092012@gmail.com">ansari.rehan.24092012@gmail.com</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
