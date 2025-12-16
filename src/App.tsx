import "./App.css";

type Project = {
  title: string;
  tagline: string;
  bullets: string[];
  stack: string[];
  links?: { label: string; href: string }[];
};

const PROJECTS: Project[] = [
  {
    title: "DropSwift",
    tagline: "Cross-platform retail monitor desktop app (Rust + Tauri + React)",
    bullets: [
      "Built a desktop app that monitors multiple retail sites and notifies users when products appear or change.",
      "Designed a secure activation key system and account flow backed by Supabase (RLS + Edge Functions).",
      "Shipped multi-platform builds (Windows, macOS, Linux) via CI and release automation.",
    ],
    stack: ["Rust", "Tauri", "React", "TypeScript", "Vite", "Supabase"],
    links: [
      { label: "GitHub", href: "#" },
      { label: "Demo", href: "#" },
    ],
  },
  {
    title: "Lambda & Generics Research",
    tagline: "Java AST analysis across open-source repositories",
    bullets: [
      "Built analysis tooling to track lambda expression usage and removals across large Java codebases.",
      "Collected comparative metrics across multiple projects and summarized results for an ACM-style paper.",
      "Implemented visitors and tokenization scripts to extract structured findings.",
    ],
    stack: ["Java", "Eclipse JDT", "Python", "Data Analysis"],
    links: [{ label: "Paper", href: "#" }],
  },
  {
    title: "DNS Proxy Server",
    tagline: "Recursive resolver with caching over UDP",
    bullets: [
      "Implemented a UDP DNS proxy that performs recursive resolution and caches results for faster responses.",
      "Added safe parsing and timeouts, plus cache invalidation based on TTL behavior.",
    ],
    stack: ["Python", "Networking", "UDP", "Caching"],
    links: [{ label: "GitHub", href: "#" }],
  },
];

const SKILLS = [
  { label: "Languages", items: ["Rust", "TypeScript", "Java", "Python", "SQL", "C++"] },
  { label: "Frontend", items: ["React", "Vite", "HTML", "CSS", "UI/UX"] },
  { label: "Backend", items: ["Supabase", "PostgreSQL", "Edge Functions", "APIs"] },
  { label: "DevOps", items: ["GitHub Actions", "Release pipelines", "Linux packaging"] },
  { label: "Concepts", items: ["Concurrency", "Networking", "Data Structures", "Security basics"] },
];

function Chip({ text }: { text: string }) {
  return <span className="chip">{text}</span>;
}

function App() {
  const email = "twood.cs@gmail.com";

  return (
    <div className="page">
      {/* Top Nav */}
      <header className="nav">
        <a className="brand" href="#top" aria-label="Go to top">
          <div className="brandMark" aria-hidden="true">
            <span>TW</span>
            <small>.CS</small>
          </div>
          <div className="brandText">
            <div className="brandTitle">T-wood Development</div>
            <div className="brandSub">Software Engineering • Computer Science</div>
          </div>
        </a>

        <nav className="links" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a className="btn btnGhost" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <main id="top" className="hero">
        <div className="heroLeft">
          <div className="kicker">Portfolio</div>
          <h1 className="headline">
            Building clean software with sharp edges and softer UX.
          </h1>
          <p className="subhead">
            I’m Tyler Wood. I build cross-platform apps, backend systems, and data-driven tools.
            This site is a quick map of what I’ve shipped and what I’m good at.
          </p>

          <div className="ctaRow">
            <a className="btn btnPrimary" href="#projects">
              View Projects
            </a>
            <a className="btn btnGhost" href={`mailto:${email}`}>
              {email}
            </a>
          </div>

          <div className="metaRow">
            <div className="metaCard">
              <div className="metaLabel">Focus</div>
              <div className="metaValue">Desktop apps, tooling, automation</div>
            </div>
            <div className="metaCard">
              <div className="metaLabel">Stack</div>
              <div className="metaValue">Rust • React • TypeScript</div>
            </div>
            <div className="metaCard">
              <div className="metaLabel">Availability</div>
              <div className="metaValue">Open to SWE roles</div>
            </div>
          </div>
        </div>

        <aside className="heroRight" aria-label="Highlights">
          <div className="panel">
            <div className="panelTitle">Quick Highlights</div>
            <ul className="panelList">
              <li>
                <span className="dot" />
                Cross-platform desktop app development (Tauri)
              </li>
              <li>
                <span className="dot" />
                Secure key and account flows (Supabase + RLS)
              </li>
              <li>
                <span className="dot" />
                Automation and CI for multi-OS releases
              </li>
              <li>
                <span className="dot" />
                Networking fundamentals and server tooling
              </li>
            </ul>

            <div className="panelActions">
              <a className="btn btnSmall btnGhost" href="#resume">
                Resume Sections
              </a>
              <a className="btn btnSmall btnGhost" href="#contact">
                Get in touch
              </a>
            </div>
          </div>

          <div className="panel soft">
            <div className="panelTitle">Links</div>
            <div className="linkGrid">
              <a className="linkCard" href="#" target="_blank" rel="noreferrer">
                <div className="linkCardTitle">GitHub</div>
                <div className="linkCardSub">Projects and code</div>
              </a>
              <a className="linkCard" href="#" target="_blank" rel="noreferrer">
                <div className="linkCardTitle">LinkedIn</div>
                <div className="linkCardSub">Work history</div>
              </a>
              <a className="linkCard" href="#" target="_blank" rel="noreferrer">
                <div className="linkCardTitle">Resume PDF</div>
                <div className="linkCardSub">Download</div>
              </a>
              <a className="linkCard" href={`mailto:${email}`}>
                <div className="linkCardTitle">Email</div>
                <div className="linkCardSub">{email}</div>
              </a>
            </div>
          </div>
        </aside>
      </main>

      {/* About */}
      <section id="about" className="section">
        <div className="sectionHeader">
          <h2>About</h2>
          <p>Short version: I like building tools people actually enjoy using.</p>
        </div>

        <div className="grid2">
          <div className="card">
            <h3>What I do</h3>
            <p>
              I build software across the stack, with a soft spot for desktop apps, automation,
              and systems that need to be reliable under pressure. I care about clean architecture,
              readable code, and UX that feels intentional.
            </p>
            <p className="muted">
              This site is intentionally simple so you can find what you need fast.
            </p>
          </div>

          <div className="card">
            <h3>What I’m looking for</h3>
            <ul className="bullets">
              <li>Software Engineering roles (backend, full-stack, tooling, or desktop)</li>
              <li>Teams that ship, measure, and iterate</li>
              <li>Projects with real users and real constraints</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <div className="sectionHeader">
          <h2>Skills</h2>
          <p>Tools I use to make computers behave.</p>
        </div>

        <div className="skillsGrid">
          {SKILLS.map((group) => (
            <div className="card" key={group.label}>
              <h3>{group.label}</h3>
              <div className="chipRow">
                {group.items.map((s) => (
                  <Chip key={s} text={s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="sectionHeader">
          <h2>Projects</h2>
          <p>Selected work. Replace links and tweak bullets as you finalize.</p>
        </div>

        <div className="projectGrid">
          {PROJECTS.map((p) => (
            <article className="card projectCard" key={p.title}>
              <div className="projectTop">
                <div>
                  <h3 className="projectTitle">{p.title}</h3>
                  <div className="projectTagline">{p.tagline}</div>
                </div>
              </div>

              <ul className="bullets">
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <div className="chipRow">
                {p.stack.map((s) => (
                  <Chip key={s} text={s} />
                ))}
              </div>

              {p.links && p.links.length > 0 && (
                <div className="projectLinks">
                  {p.links.map((l) => (
                    <a key={l.label} className="btn btnSmall btnGhost" href={l.href}>
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="section">
        <div className="sectionHeader">
          <h2>Resume</h2>
          <p>Quick scan format. You can later swap this with your exact resume content.</p>
        </div>

        <div className="grid2">
          <div className="card">
            <h3>Experience</h3>

            <div className="timelineItem">
              <div className="timelineTop">
                <div className="timelineRole">Software Project Lead</div>
                <div className="timelineMeta">DropSwift • 2025</div>
              </div>
              <ul className="bullets">
                <li>Designed system architecture and core monitoring pipeline.</li>
                <li>Built secure activation key verification with backend enforcement.</li>
                <li>Automated multi-platform packaging and release delivery.</li>
              </ul>
            </div>

            <div className="timelineItem">
              <div className="timelineTop">
                <div className="timelineRole">Research Project Contributor</div>
                <div className="timelineMeta">Java AST Analysis • 2025</div>
              </div>
              <ul className="bullets">
                <li>Developed tooling to extract and compare lambda usage metrics across repositories.</li>
                <li>Wrote findings for an academic-style report with tables and evaluation text.</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <h3>Education: Arkansas State University</h3>
            <div className="timelineItem">
              <div className="timelineTop">
                <div className="timelineRole">B.A. Computer Science</div>
                <div className="timelineMeta">2025</div>
              </div>
              <ul className="bullets">
                <li>Focus: software engineering, systems, networking, databases</li>
                <li>Capstone-style work: cross-platform desktop application + backend</li>
              </ul>
            </div>

            <h3 style={{ marginTop: "1.25rem" }}>Minor in General Business</h3>
            <ul className="bullets"> 
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="sectionHeader">
          <h2>Contact</h2>
          <p>If you want to talk roles, projects, or collaboration, email is best.</p>
        </div>

        <div className="card contactCard">
          <div>
            <div className="contactLabel">Email</div>
            <a className="contactValue" href={`mailto:${email}`}>
              {email}
            </a>
            <div className="muted" style={{ marginTop: ".5rem" }}>
              Tip: include a link to the job posting or a short description of what you’re building.
            </div>
          </div>

          <div className="contactActions">
            <a className="btn btnPrimary" href={`mailto:${email}`}>
              Email me
            </a>
            <a className="btn btnGhost" href="#top">
              Back to top
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footerInner">
          <div className="muted">© {new Date().getFullYear()} T-wood Development</div>
          <div className="footerLinks">
            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
            <a href={`mailto:${email}`}>Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
