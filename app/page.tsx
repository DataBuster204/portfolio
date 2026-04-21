import Image from "next/image";

const skills = [
  "Python", "LangChain", "LangGraph", "OpenAI API", "Claude API",
  "RAG Pipelines", "Vector Databases", "Supabase / pgvector",
  "Next.js", "Streamlit", "FastAPI", "Docker",
  "Prompt Engineering", "Guardrails AI", "LlamaIndex", "Vercel", "Twilio",
];

const clientWork = [
  {
    client: "AB Ventures Hub",
    industry: "Retail & Real Estate",
    location: "Lagos, Nigeria",
    description: "Built and deployed a 24/7 WhatsApp AI support bot that answers customer questions about phones, gadgets, and real estate properties. The bot escalates to a human agent when it cannot answer, ensuring no customer is left with a wrong response.",
    stack: "FastAPI · LangChain · ChromaDB · OpenAI · Twilio · Render",
    status: "Delivered",
  },
];

const projects = [
  {
    title: "StudyMate AI",
    description: "Chat with your syllabus. Upload lecture notes or textbooks and ask questions, generate quizzes, and create flashcards instantly.",
    vertical: "Education",
    week: "Week 3",
    accent: "bg-blue-500",
    link: "https://studymate-ai-i4wtfqeim2zch8fnnpantb.streamlit.app/",
  },
  {
    title: "SupportLens",
    description: "An intelligent customer support widget that answers questions from a company knowledge base and escalates to humans when confidence is low.",
    vertical: "SMB Support",
    week: "Week 5",
    accent: "bg-emerald-500",
    link: "https://supportlens-h8qqiopqkjeqcfzt3dsdmf.streamlit.app",
  },
  {
    title: "AuditBuddy",
    description: "Upload a bank statement, financial report, or audit document. Get an instant AI summary, red flag analysis, Q&A chat, audit memo, and custom reports — all exportable.",
    vertical: "Finance & Audit",
    week: "Week 7",
    accent: "bg-yellow-500",
    link: "https://auditbuddy-2fcgcbghkoeb97yyqqsfdk.streamlit.app",
  },
  {
  title: "MCP Server Demo",
  description: "A secure, multi-tenant Model Context Protocol server that exposes financial GL data as scoped AI tools — with token-based auth and per-customer data isolation. Built in Python using Anthropic's MCP SDK.",
  vertical: "Agentic AI",
  week: "Week 8",
  accent: "bg-indigo-500",
  link: "https://github.com/DataBuster204/mcp-server-demo",
  },
  {
    title: "ResearchAgent",
    description: "Ask any complex question. Three AI agents collaborate — one breaks down the question, one searches the web for answers, one writes a fully cited report.",
    vertical: "Skill Showcase",
    week: "Week 9",
    accent: "bg-purple-500",
    link: "https://researchagent-ceqftswrcbnhjhthoneqya.streamlit.app",
  },
  {
    title: "GuardrailsDemo",
    description: "A responsible AI showcase with visible prompt injection defense, PII redaction, and hallucination detection running side by side.",
    vertical: "Responsible AI",
    week: "Week 10",
    accent: "bg-rose-500",
    link: null,
  },
];

export default function Home() {
  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen font-sans">

      {/* NAV */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo mark */}
          <a href="#" className="flex items-center gap-2 group" aria-label="Olumide Daramola home">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="32" height="32" rx="8" fill="#4F46E5"/>
              <text x="16" y="22" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" fill="white" textAnchor="middle" letterSpacing="0.5">OD</text>
            </svg>
            <span className="text-slate-100 font-semibold text-sm tracking-wide group-hover:text-indigo-400 transition-colors">
              Olumide Daramola
            </span>
          </a>

          <div className="hidden md:flex gap-8 text-sm text-slate-400">
            <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
          </div>

          {/* Social icon buttons */}
          <div className="flex items-center gap-3">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/olumidaramola/" target="_blank" rel="noopener noreferrer"
              aria-label="LinkedIn" className="text-slate-400 hover:text-indigo-400 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/realolumi1/" target="_blank" rel="noopener noreferrer"
              aria-label="Instagram" className="text-slate-400 hover:text-pink-400 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
            {/* GitHub */}
            <a href="https://github.com/DataBuster204" target="_blank" rel="noopener noreferrer"
              aria-label="GitHub" className="text-slate-400 hover:text-slate-100 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-40 pb-32">
        <div className="flex flex-col md:flex-row md:items-center gap-12">

          {/* Text content */}
          <div className="flex-1">
            <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-4">
              AI Solutions Developer
            </p>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                Olumide Daramola
              </span>
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed mb-10">
              I build production-ready GenAI applications — custom chatbots, RAG pipelines,
              intelligent document systems, and responsible AI tools — for businesses that want
              to move faster with AI.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-full font-medium transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-slate-700 hover:border-indigo-400 hover:text-indigo-400 px-6 py-3 rounded-full font-medium transition-colors"
              >
                Work With Me
              </a>
            </div>
          </div>

          {/* Headshot */}
          <div className="flex-shrink-0 flex justify-center md:justify-end">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 blur-md opacity-40 scale-105" />
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-indigo-500/50">
                <Image
                  src="/headshot.png"
                  alt="Olumide Daramola — AI Solutions Developer"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-slate-900 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">About</p>
          <h2 className="text-3xl font-bold mb-6">Who I Am</h2>
          <div className="grid md:grid-cols-2 gap-12 text-slate-400 text-lg leading-relaxed">
            <p>
              I&apos;m an NVIDIA-certified Generative AI developer based in Lagos, Nigeria.
              My focus is building practical, deployable AI systems — the kind that solve
              real business problems rather than just impressive demos.
            </p>
            <p>
              I specialise in three verticals: Education, SMB Customer Support, and
              Finance &amp; Auditing. I believe the best AI tools are ones that are simple
              enough to explain to a client in two sentences, but powerful enough to
              genuinely change how they work.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">Stack</p>
          <h2 className="text-3xl font-bold mb-10">What I Build With</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-slate-800 border border-slate-700 text-slate-300 px-4 py-2 rounded-full text-sm hover:border-indigo-400 hover:text-indigo-300 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-slate-900 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">Projects</p>
          <h2 className="text-3xl font-bold mb-4">12 Weeks. 5 Flagship Projects.</h2>
          <p className="text-slate-400 text-lg mb-12">
            Currently building in public. Each project ships with a live demo, GitHub repo, and case study.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div
                key={p.title}
                className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-indigo-500 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className={`${p.accent} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                    {p.vertical}
                  </span>
                  <span className="text-slate-500 text-xs">{p.week}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{p.description}</p>
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-indigo-400 border border-indigo-500 px-3 py-1 rounded-full hover:bg-indigo-500 hover:text-white transition-colors"
                  >
                    Live Demo →
                  </a>
                ) : (
                  <span className="text-xs text-slate-500 border border-slate-600 px-3 py-1 rounded-full">
                    Coming Soon
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT WORK */}
      <section id="clients" className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">Client Work</p>
          <h2 className="text-3xl font-bold mb-4">Delivered for Real Businesses</h2>
          <p className="text-slate-400 text-lg mb-12">
            Production AI systems built and deployed for actual clients.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {clientWork.map((c) => (
              <div
                key={c.client}
                className="bg-slate-800 border border-emerald-700 rounded-2xl p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {c.industry}
                  </span>
                  <span className="text-emerald-400 text-xs font-semibold">{c.status}</span>
                </div>
                <h3 className="text-lg font-bold mb-1">{c.client}</h3>
                <p className="text-slate-500 text-xs mb-3">{c.location}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{c.description}</p>
                <p className="text-xs text-slate-500">{c.stack}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Build Something</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
            Open to freelance AI development projects, consulting engagements, and full-time opportunities.
          </p>

          {/* Email CTA */}
          <a
            href="mailto:hello@olumidedaramola.dev"
            className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 px-8 py-4 rounded-full font-medium transition-colors text-lg mb-12"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            hello@olumidedaramola.dev
          </a>

          {/* Social links */}
          <p className="text-slate-500 text-sm uppercase tracking-widest mb-6">Or find me on</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://www.linkedin.com/in/olumidaramola/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-slate-700 hover:border-blue-500 hover:text-blue-400 px-5 py-3 rounded-full text-sm font-medium transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/realolumi1/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-slate-700 hover:border-pink-500 hover:text-pink-400 px-5 py-3 rounded-full text-sm font-medium transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
              Instagram
            </a>
            <a
              href="https://github.com/DataBuster204"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-slate-700 hover:border-slate-400 hover:text-slate-100 px-5 py-3 rounded-full text-sm font-medium transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            2026 Olumide Daramola &middot; Built with Next.js &amp; Vercel
          </p>
          <div className="flex items-center gap-5">
            <a href="https://www.linkedin.com/in/olumidaramola/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="text-slate-600 hover:text-blue-400 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://www.instagram.com/realolumi1/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="text-slate-600 hover:text-pink-400 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
            <a href="https://github.com/DataBuster204" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className="text-slate-600 hover:text-slate-300 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
          </div>
        </div>
      </footer>

    </main>
  );
}
