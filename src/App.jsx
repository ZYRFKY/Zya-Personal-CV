import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Award, BriefcaseBusiness, Code2, ExternalLink, Globe2, Menu, X, Download, Instagram, Linkedin, Github, Sparkles } from 'lucide-react'
import { content, timeline, achievements, experiences, projects, skills } from './data/content'

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }
function Reveal({ children, className = '' }) { return <motion.div className={className} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.14 }}>{children}</motion.div> }
function SectionTitle({ index, label, title }) { return <div className="section-title"><div className="eyebrow"><span>{index}</span><span>{label}</span></div><h2>{title}</h2></div> }

export default function App() {
  const [lang, setLang] = useState('en')
  const [menuOpen, setMenuOpen] = useState(false)
  const t = content[lang]
  const navIds = ['about', 'journey', 'recognition', 'leadership', 'projects', 'contact']
  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false) }

  return <div className="site-shell">
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <header className="topbar">
      <a className="wordmark" href="#top" aria-label="ZYA home">Z<span>/</span></a>
      <nav className="desktop-nav">{t.nav.map((item, i) => <button key={item} onClick={() => scrollTo(navIds[i])}>{item}</button>)}</nav>
      <div className="nav-actions"><button className="language-toggle" onClick={() => setLang(lang === 'en' ? 'id' : 'en')} aria-label="Change language"><Globe2 size={14}/>{lang.toUpperCase()}</button><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button></div>
    </header>
    {menuOpen && <div className="mobile-menu">{t.nav.map((item, i) => <button key={item} onClick={() => scrollTo(navIds[i])}>{item}<ArrowUpRight size={16}/></button>)}</div>}

    <main id="top">
      <section className="hero section-wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"/>{t.eyebrow}</div>
          <p className="hero-pretitle">A PERSONAL DIGITAL ARCHIVE</p>
          <h1>ZYA<br/><em>REFKY ZUNZILA</em><span className="hero-period">.</span></h1>
          <p className="hero-tagline">{t.heroTitle}</p>
          <p className="hero-description">{t.heroText}</p>
          <div className="hero-buttons"><button className="button-primary" onClick={() => scrollTo('journey')}>{t.explore}<ArrowDown size={16}/></button><a className="button-ghost" href="/cv/zya-cv.pdf" download>{t.download}<Download size={15}/></a></div>
        </div>
        <div className="hero-art" aria-label="Abstract metallic orbital artwork">
          <div className="art-grid"/><div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="orbit orbit-c"/><div className="orb-core"><div className="orb-highlight"/></div><div className="art-cross cross-a"/><div className="art-cross cross-b"/><span className="art-coordinate">05°33' N<br/>95°19' E</span><span className="art-index">FIG. 001 / IDENTITY</span>
        </div>
        <div className="hero-bottom"><span>{t.location}</span><span className="scroll-cue">SCROLL TO EXPLORE <ArrowDown size={13}/></span><span>{t.status}</span></div>
      </section>

      <section id="about" className="section-wrap section-block about-grid"><div><SectionTitle index="01" label={t.aboutLabel} title={t.aboutTitle}/></div><Reveal className="about-copy"><p>{t.aboutText}</p><div className="about-meta"><div><span>BASED IN</span><strong>Banda Aceh, Indonesia</strong></div><div><span>FOCUS</span><strong>Technology & Leadership</strong></div><div><span>EDUCATION</span><strong>Computer Engineering</strong></div></div></Reveal></section>

      <section id="journey" className="section-wrap section-block"><SectionTitle index="02" label={t.journeyLabel} title={t.journeyTitle}/><div className="timeline">{timeline.map((item, i) => <Reveal className="timeline-item" key={item.year}><div className="timeline-year">{item.year}</div><div className="timeline-marker"><span/></div><div className="timeline-content"><div className="timeline-type">{item.type === 'award' ? t.award : item.type === 'education' ? t.education : t.organization}</div><h3>{lang === 'en' ? item.title : item.titleId}</h3><p className="timeline-place">{item.place}</p><p>{lang === 'en' ? item.desc : item.descId}</p></div></Reveal>)}</div></section>

      <section id="recognition" className="section-wrap section-block"><SectionTitle index="03" label={t.recognitionLabel} title={t.recognitionTitle}/><div className="achievement-grid">{achievements.map((item, i) => <Reveal className="achievement-card" key={item.title}><div className="card-topline"><span>{item.level}</span><Award size={19}/></div>{item.image && <img className="achievement-photo" src={item.image} alt={item.imageAlt || item.title} loading="lazy"/>}<div className="achievement-year">{item.year}</div><h3>{item.title}</h3><div className="achievement-result">{item.result}</div><p>{item.note}</p><span className="card-number">0{i + 1}</span></Reveal>)}</div></section>

      <section id="leadership" className="section-wrap section-block"><SectionTitle index="04" label={t.leadershipLabel} title={t.leadershipTitle}/><div className="experience-list">{experiences.map((item, i) => <Reveal className={`experience-row ${item.image ? 'experience-featured' : ''}`} key={item.organization}>{item.image && <img className="experience-photo" src={item.image} alt={item.imageAlt || item.organization} loading="lazy"/>}<div className="experience-period">{item.period}</div><div className="experience-main"><h3>{lang === 'en' ? item.role : (item.roleId || item.role)}</h3><p>{item.organization}</p><span>{lang === 'en' ? item.description : (item.descriptionId || item.description)}</span></div><BriefcaseBusiness className="row-icon" size={20}/></Reveal>)}</div></section>

      <section id="projects" className="section-wrap section-block"><SectionTitle index="05" label={t.projectsLabel} title={t.projectsTitle}/><div className="project-grid">{projects.map((item, i) => <Reveal className="project-card" key={item.name}><div className={`project-visual visual-${i + 1}`}><span>0{i + 1}</span><div className="project-symbol">{i === 0 ? <Sparkles/> : i === 1 ? <Globe2/> : <Code2/>}</div><span className="project-status">{item.status}</span></div><div className="project-info"><div className="project-category">{item.category}</div><h3>{item.name}</h3><p>{item.description}</p><span className="project-link">CASE STUDY <ArrowUpRight size={14}/></span></div></Reveal>)}</div></section>

      <section className="section-wrap section-block skills-section"><SectionTitle index="06" label={t.skillsLabel} title={t.skillsTitle}/><div className="skills-cloud">{skills.map(skill => <span key={skill}>{skill}<span className="skill-plus">+</span></span>)}</div><p className="small-note">Capabilities are presented as a developing skill set, not proficiency ratings.</p></section>

      <section className="section-wrap section-block archive-section"><SectionTitle index="07" label={t.archiveLabel} title={t.archiveTitle}/><div className="archive-gallery">
        <figure className="archive-item archive-item-wide"><img src="/images/achievements/international-award-2023.jpg" alt="Zya holding an international award certificate and medal" loading="lazy"/><figcaption><span>2023 · INTERNATIONAL RECOGNITION</span><strong>A milestone worth remembering</strong></figcaption></figure>
        <figure className="archive-item"><img src="/images/university/university-event-speaking.jpg" alt="Zya speaking at an event" loading="lazy"/><figcaption><span>UNIVERSITY · EVENT DOCUMENTATION</span><strong>Finding a voice in the room</strong></figcaption></figure>
        <figure className="archive-item"><img src="/images/organization/osis-sman1-banda-aceh-2023-2024.jpg" alt="Zya during his high-school student council period" loading="lazy"/><figcaption><span>2023–2024 · HIGH SCHOOL</span><strong>Leadership begins with participation</strong></figcaption></figure>
      </div></section>

      <section id="contact" className="section-wrap contact-section"><div className="eyebrow"><span>08</span><span>{t.contactLabel}</span></div><h2>{t.contactTitle}</h2><p>{t.contactText}</p><a className="contact-link" href="mailto:zyazunzila.juni@gmail.com">zyazunzila.juni@gmail.com <ArrowUpRight/></a><div className="social-links"><a href="https://www.instagram.com/zyrfky/" target="_blank" rel="noreferrer"><Instagram size={16}/> Instagram</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a><a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a></div></section>
    </main>
    <footer className="footer section-wrap"><a className="wordmark" href="#top">Z<span>/</span></a><p>{t.footer}</p><span>© {new Date().getFullYear()} ZYA REFky ZUNZILA</span></footer>
  </div>
}
