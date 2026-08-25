import { useState, type MouseEvent } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";

const images = {
  hero: "/media/alex-hero-motion.webp",
  secondBrain: "/media/second-brain-project.webp",
  traffic: "/media/traffic-project.webp",
  spark: "/media/alex-spark-logo.webp",
  about: "/media/about.webp",
  education: "/media/education-journey.jpg",
};

const resumeUrl = "/media/alex-antony-resume.pdf";

const navItems = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
] as const;

const featuredProjects = [
  {
    number: "01",
    year: "2026",
    type: "AI learning product",
    title: "Second Brain",
    image: images.secondBrain,
    alt: "Abstract visual of layered learning cards for Second Brain",
    description:
      "A bilingual English/Malayalam learning app that explains technical topics through real-world analogies, then reinforces them with spaced repetition and AI-generated self-test questions. The mobile frontend is built with React Native and Expo, while FastAPI, RAG, and ChromaDB support the learning workflow behind it.",
    tech: ["FastAPI", "React Native", "Expo", "RAG", "ChromaDB"],
    link: "https://github.com/alex0077-git/Second-Brain",
  },
  {
    number: "02",
    year: "2026",
    type: "LLM-powered web app",
    title: "AI Interview Coach",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85",
    alt: "Laptop workspace representing an AI interview coaching platform",
    description:
      "An LLM-powered mock interview platform that helps candidates practise structured answers and receive real-time feedback. It combines LangChain and Groq's LLaMA 3.3 70B with a FastAPI backend and a React interface to make interview practice more structured and actionable.",
    tech: ["React", "FastAPI", "LangChain", "Groq API", "LLaMA 3.3 70B"],
    link: "https://github.com/alex0077-git/Ai-Interview-Coach",
  },
  {
    number: "03",
    year: "2026",
    type: "Computer vision system",
    title: "Smart Traffic Management",
    image: images.traffic,
    alt: "Abstract aerial traffic junction for Smart Traffic Management",
    description:
      "My MCA final-year project: a real-time traffic monitoring system that uses YOLOv8 to detect vehicles, a Flask backend to manage processing, and a React dashboard to present traffic information clearly. The project explores how computer vision can support more responsive traffic management.",
    tech: ["YOLOv8", "Python", "Flask", "React", "Computer Vision"],
    link: "https://github.com/alex0077-git/Smart-Traffic-Management",
  },
  {
    number: "04",
    year: "2025",
    type: "Vehicle service platform",
    title: "AutoCare",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1400&q=85",
    alt: "Vehicle dashboard representing the AutoCare service management platform",
    description:
      "A full-stack vehicle service management platform connecting customers, service managers, mechanics, and administrators. Users can book service slots, track vehicles, view service history, assign work, and manage workshop operations through clearly separated role-based workflows.",
    tech: ["Django", "Python", "Bootstrap 5", "SQLite", "Role-based access"],
    link: "https://github.com/alex0077-git/Autocare",
  },
  {
    number: "05",
    year: "2025",
    type: "Mobile game collection",
    title: "GameHub",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1400&q=85",
    alt: "Game controller representing the GameHub mobile collection",
    description:
      "A React Native hub for original and traditional two-player games. It includes Mind Reader, Money in the Bank, and physics-based recreations of Kerala playground games such as Poojyamvettu and Pen Fight using matter-js.",
    tech: ["React Native", "Expo", "matter-js", "Mobile UX", "Game physics"],
    link: "https://github.com/alex0077-git/GameHubApp",
  },
] as const;

const skillGroups = [
  { title: "Languages", items: ["Python", "JavaScript", "SQL", "HTML", "CSS"] },
  { title: "Frameworks", items: ["React.js", "Next.js", "React Native", "Expo", "FastAPI", "Flask", "Django", "Tailwind CSS"] },
  { title: "AI / ML", items: ["LangChain", "Groq API", "YOLOv8", "RAG", "ChromaDB"] },
  { title: "Tools", items: ["Git/GitHub", "Docker", "MySQL", "REST APIs", "Postman", "matter-js"] },
] as const;

type ClickStroke = {
  id: string;
  x: number;
  y: number;
};

function Spark( ) {
  return <img className="spark-image" src={images.spark} alt="" aria-hidden="true" />;
}

function Navigation({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="reference-nav" aria-label="Primary navigation">
      <a className="nav-spark" href="#top" onClick={onNavigate} aria-label="Alex Antony home">
        <Spark />
      </a>
      {navItems.map(([label, href]) => (
        <a key={href} href={href} onClick={onNavigate}>{label}</a>
      ))}
    </nav>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [clickStrokes, setClickStrokes] = useState<ClickStroke[]>([]);

  const handlePageClick = (event: MouseEvent<HTMLElement>) => {
    const id = `${Date.now()}-${Math.random()}`;

    setClickStrokes((current) => [
      ...current.slice(-6),
      { id, x: event.clientX, y: event.clientY },
    ]);

    window.setTimeout(() => {
      setClickStrokes((current) => current.filter((stroke) => stroke.id !== id));
    }, 720);
  };

  return (
    <main id="top" className="portfolio-page" onClick={handlePageClick}>
      <div className="click-stroke-layer" aria-hidden="true">
        {clickStrokes.map((stroke) => (
          <span key={stroke.id} className="click-stroke" style={{ left: stroke.x, top: stroke.y }} />
        ))}
      </div>

      <header className="site-header">
        <Navigation />

        <button
          type="button"
          className="mobile-menu-button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        {menuOpen && (
          <div className="mobile-menu-panel">
            <Navigation onNavigate={() => setMenuOpen(false)} />
            <a href={resumeUrl} target="_blank" rel="noreferrer">
              Open resume <ArrowUpRight size={16} />
            </a>
          </div>
        )}
      </header>

      <aside className="utility-rail" aria-label="Portfolio shortcuts">
        <a href="#contact">Open to work</a>
        <a href={resumeUrl} target="_blank" rel="noreferrer">View resume</a>
        <span>AI / WEB / ML</span>
      </aside>

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="hero-name">Alex Antony</p>
          <p className="eyebrow">AI/ML + FULL-STACK DEVELOPER</p>
          <h1 id="hero-title">TURNING CURIOUS IDEAS INTO USEFUL SOFTWARE.</h1>
          <p className="hero-description">
            I&apos;m Alex Antony—an MCA graduate building AI-powered tools and full-stack products from a sharp question to a working experience.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#projects">Explore work <ArrowUpRight size={17} /></a>
            <a className="resume-card" href={resumeUrl} target="_blank" rel="noreferrer">
              <span>DOWNLOAD RESUME</span>
              <strong>Alex Antony  
AI/ML + Full-stack Developer</strong>
              <ArrowUpRight size={26} />
            </a>
          </div>
        </div>

        <div className="hero-collage" aria-label="Abstract technology visual">
          <img className="hero-back-image" src={images.about} alt="" />
          <img className="hero-front-image" src={images.hero} alt="Abstract yellow motion passing through a dark green environment" />
          <span className="hero-bolt" aria-hidden="true">ϟ</span>
        </div>

        <a className="scroll-hint" href="#about">SCROLL TO DISCOVER <ChevronDown size={15} /></a>
      </section>

      <div className="hero-wave" aria-hidden="true" />

      <section id="about" className="about-section">
        <div className="section-shell about-grid">
          <div>
            <p className="eyebrow yellow">ABOUT ME</p>
            <h2>IDEAS CRAFTED  
INTO IMPACT.</h2>
            <p className="about-text">
              I&apos;m an MCA graduate from the College of Engineering, Chengannur, with a B.Sc. in Mathematics. I enjoy building applied AI, computer vision, and full-stack products that turn technical ideas into useful experiences.
            </p>
          </div>
          <img className="about-image" src={images.about} alt="Laptop workspace representing software development" />
        </div>
      </section>

      <section id="skills" className="skills-section section-shell">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">TECHNICAL SKILLS</p>
            <h2>A CLEAR VIEW  
OF MY TOOLKIT.</h2>
          </div>
          <p>A focused set of programming languages, frameworks, AI/ML technologies, and development tools used across my projects.</p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-card" key={group.title}>
              <span>0{index + 1}</span>
              <h3>{group.title}</h3>
              <div>
                {group.items.map((item) => <b key={item}>{item}</b>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="featured-work-section" aria-labelledby="projects-title">
        <div className="section-shell">
          <div className="work-heading">
            <p className="eyebrow yellow">SELECTED WORK</p>
            <h2 id="projects-title">OUR BRIGHTEST SOLUTIONS.</h2>
          </div>

          <div className="featured-project-stack">
            {featuredProjects.map((project, index) => (
              <article
                className={index % 2 === 1 ? "featured-project featured-project-reverse" : "featured-project"}
                key={project.title}
              >
                <div className="featured-project-media">
                  <img src={project.image} alt={project.alt} />
                  <div className="project-media-mark" aria-hidden="true">✦</div>
                </div>

                <div className="featured-project-details">
                  <p className="eyebrow yellow">{project.number} / {project.year} · {project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tech.map((item) => <span key={item}>{item}</span>)}
                  </div>

                  <a className="cream-link" href={project.link} target="_blank" rel="noreferrer">
                    See project <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="education-section section-shell" aria-labelledby="education-title">
        <img className="education-image" src={images.education} alt="Study desk with books and laptop representing Alex Antony's education" />
        <div>
          <p className="eyebrow">EDUCATION + FOCUS</p>
          <h2 id="education-title">THE THEORY  
BEHIND THE BUILD.</h2>

          <div className="education-list">
            <article>
              <span>2024–2026</span>
              <div>
                <h3>Master of Computer Applications</h3>
                <p>College of Engineering, Chengannur. Final-year project: real-time traffic management using YOLOv8.</p>
              </div>
            </article>
            <article>
              <span>FOUNDATION</span>
              <div>
                <h3>B.Sc. Mathematics</h3>
                <p>A mathematical base carried into applied AI, machine learning, and systems thinking.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="section-shell contact-grid">
          <div>
            <h2>LET&apos;S BUILD  
SOMETHING  
TOGETHER.</h2>
            <p>Have a project or an opportunity? I&apos;d be glad to hear from you.</p>
            <a className="primary-button" href="mailto:alexantony013@gmail.com">Send an email <ArrowUpRight size={17} /></a>
          </div>

          <div className="contact-card">
            <p className="eyebrow yellow">BEST WAY TO REACH ME</p>
            <a href="mailto:alexantony013@gmail.com"><span>Email</span><b>alexantony013@gmail.com</b><Mail size={17} /></a>
            <a href="https://www.linkedin.com/in/alex-antony-9586173b1" target="_blank" rel="noreferrer"><span>LinkedIn</span><b>/in/alex-antony</b><Linkedin size={17} /></a>
            <a href="https://github.com/alex0077-git" target="_blank" rel="noreferrer"><span>GitHub</span><b>@alex0077-git</b><Github size={17} /></a>
          </div>
        </div>
      </section>

      <footer className="footer section-shell">
        <span>© 2026 Alex Antony</span>
        <span>AI / WEB / ML</span>
        <a href="#top">Back to top <ArrowUpRight size={15} /></a>
      </footer>
    </main>
   );
}
