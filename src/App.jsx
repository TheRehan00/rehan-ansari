import { useEffect, useState } from 'react'
import './App.css'

const navItems = ['AI Builder', 'Projects', 'Skills', 'About', 'Contact']

const starterHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Generated landing page</title>
    <style>
      * { box-sizing: border-box; }
      body { margin: 0; min-height: 100vh; display: grid; place-items: center; padding: 2rem; color: #e2e8f0; background: #0f172a; font-family: system-ui, sans-serif; }
      main { max-width: 620px; text-align: center; }
      .tag { color: #67e8f9; font: 700 0.72rem/1 monospace; letter-spacing: .18em; text-transform: uppercase; }
      h1 { margin: 1rem 0; color: #f8fafc; font-size: clamp(2.4rem, 8vw, 5rem); line-height: .95; }
      p { color: #94a3b8; font-size: 1.1rem; line-height: 1.7; }
      a { display: inline-block; margin-top: 1rem; padding: .85rem 1.2rem; border-radius: 10px; color: #082f49; background: #67e8f9; text-decoration: none; font-weight: 700; }
    </style>
  </head>
  <body><main><span class="tag">AI generated concept</span><h1>Your next bold idea starts here.</h1><p>Describe a page in the prompt and Rehan's AI builder will shape the first draft for you.</p><a href="#start">Explore the idea</a></main></body>
</html>`

const promptStarters = [
  'A launch page for a climate-tech startup',
  'A portfolio for an experimental photographer',
  'A waitlist page for a new music app',
]

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
  const [isLoading, setIsLoading] = useState(true)
  const [prompt, setPrompt] = useState('A bold landing page for a creative studio')
  const [style, setStyle] = useState('Electric')
  const [generatedHtml, setGeneratedHtml] = useState(starterHtml)
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState(false)
  const [generatedAt, setGeneratedAt] = useState('Starter concept loaded')

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => setIsLoading(false), 1500)

    return () => window.clearTimeout(loadingTimer)
  }, [])

  const generateHtml = () => {
    setIsGenerating(true)
    window.setTimeout(() => {
      const safePrompt = prompt.trim() || 'A polished landing page for a new digital product'
      const palette = {
        Electric: ['#67e8f9', '#2563eb', '#020617'],
        Editorial: ['#fbbf24', '#b45309', '#1c1917'],
        Soft: ['#86efac', '#15803d', '#052e16'],
      }[style]
      setGeneratedHtml(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${safePrompt}</title>
    <style>
      * { box-sizing: border-box; } body { margin: 0; min-height: 100vh; display: grid; place-items: center; padding: 2rem; color: #f8fafc; background: radial-gradient(circle at 80% 10%, ${palette[1]}, transparent 35%), ${palette[2]}; font-family: system-ui, sans-serif; } main { max-width: 700px; } .tag { color: ${palette[0]}; font: 700 .72rem monospace; letter-spacing: .18em; text-transform: uppercase; } h1 { max-width: 12ch; margin: 1rem 0; font-size: clamp(2.8rem, 8vw, 6.4rem); line-height: .92; letter-spacing: -.06em; } p { max-width: 52ch; color: #cbd5e1; font-size: 1.12rem; line-height: 1.7; } a { display: inline-block; margin-top: 1.2rem; padding: .9rem 1.25rem; border-radius: 10px; color: ${palette[2]}; background: ${palette[0]}; text-decoration: none; font-weight: 800; }
    </style>
  </head>
  <body><main><span class="tag">${style} direction / 01</span><h1>${safePrompt}</h1><p>A considered first draft with a clear point of view, responsive type, and one decisive call to action.</p><a href="#discover">See what's possible</a></main></body>
</html>`)
  setGeneratedAt(`Generated just now / ${style} direction`)
      setIsGenerating(false)
    }, 650)
  }

  const copyHtml = async () => {
    await navigator.clipboard.writeText(generatedHtml)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  const downloadHtml = () => {
    const file = new Blob([generatedHtml], { type: 'text/html' })
    const url = URL.createObjectURL(file)
    const link = document.createElement('a')
    link.href = url
    link.download = 'rehan-ai-draft.html'
    link.click()
    URL.revokeObjectURL(url)
  }

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
    <>
      {isLoading && (
        <div className="loading-screen" role="status" aria-live="polite" aria-label="Loading portfolio">
          <div className="loading-mark">&lt;/&gt;</div>
          <div className="loading-copy">
            <span>REHAN</span>
            <span className="loading-accent">.DEV</span>
          </div>
          <div className="loading-track" aria-hidden="true">
            <span />
          </div>
          <p>INITIALIZING EXPERIENCE</p>
        </div>
      )}

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

        <section id="ai-builder" className="section-shell ai-builder-section reveal-on-scroll">
          <div className="ai-builder-intro">
            <p className="eyebrow">(AI HTML BUILDER)</p>
            <h2>Give it a brief.<br /><span>Get a first draft.</span></h2>
            <p>Describe what you want to make and let the builder turn the idea into clean, responsive HTML.</p>
            <div className="ai-signal"><span className="status-dot" /> READY TO GENERATE</div>
          </div>

          <div className="ai-builder-workspace">
            <div className="ai-controls">
              <label htmlFor="ai-prompt">YOUR BRIEF</label>
              <textarea id="ai-prompt" value={prompt} onChange={(event) => setPrompt(event.target.value)} placeholder="Describe the page you want to make..." />
              <div className="prompt-starters">
                <span>TRY A STARTER</span>
                <div>
                  {promptStarters.map((starter) => (
                    <button key={starter} type="button" onClick={() => setPrompt(starter)}>{starter}</button>
                  ))}
                </div>
              </div>
              <div className="style-control">
                <label>VISUAL DIRECTION</label>
                <div className="style-options" role="group" aria-label="Visual direction">
                  {['Electric', 'Editorial', 'Soft'].map((option) => (
                    <button key={option} type="button" className={style === option ? 'style-option active' : 'style-option'} onClick={() => setStyle(option)}>{option}</button>
                  ))}
                </div>
              </div>
              <button type="button" className="generate-btn" onClick={generateHtml} disabled={isGenerating}>
                {isGenerating ? 'BUILDING...' : 'GENERATE HTML'} <span aria-hidden="true">-&gt;</span>
              </button>
            </div>

            <div className="ai-preview-wrap">
              <div className="preview-toolbar">
                <span><i /> LIVE PREVIEW <small>{generatedAt}</small></span>
                <div><button type="button" onClick={copyHtml}>{copied ? 'COPIED' : 'COPY HTML'}</button><button type="button" onClick={downloadHtml}>DOWNLOAD</button></div>
              </div>
              <iframe title="Generated HTML preview" className="ai-preview" srcDoc={generatedHtml} />
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
    </>
  )
}

export default App
