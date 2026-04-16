const skills = [
  "Python", "LangChain", "LangGraph", "OpenAI API", "Claude API",
  "RAG Pipelines", "Vector Databases", "Supabase / pgvector",
  "Next.js", "Streamlit", "FastAPI", "Docker",
  "Prompt Engineering", "Guardrails AI", "LlamaIndex", "Vercel",
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
    link: null,
  },
  {
    title: "AuditBuddy",
    description: "Upload invoices, receipts, or financial reports. Extract structured data, flag anomalies, and export clean Excel summaries.",
    vertical: "Finance & Audit",
    week: "Week 7",
    accent: "bg-yellow-500",
    link: null,
  },
  {
    title: "ResearchAgent",
    description: "A multi-agent research assistant that breaks down complex questions, retrieves sources, and produces fully cited reports.",
    vertical: "Skill Showcase",
    week: "Week 9",
    accent: "bg-purple-500",
    link: null,
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
          <span className="text-indigo-400 font-bold text-lg tracking-wide">OD</span>
          <div className="flex gap-8 text-sm text-slate-400">
            <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
          </div>
          <a
            href="https://github.com/DataBuster204"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-full transition-colors"
          >
            GitHub
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-40 pb-32">
        <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-4">
          AI Solutions Developer
        </p>
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            Olumide Daramola
          </span>
        </h1>
        <p className="text-slate-400 text-xl max-w-2xl leading-relaxed mb-10">
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

      {/* CONTACT */}
      <section id="contact" className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Build Something</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Open to freelance AI development projects, consulting engagements, and full-time opportunities.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="mailto:databuster204@gmail.com"
              className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-full font-medium transition-colors"
            >
              Send an Email
            </a>
            <a
              href="https://github.com/DataBuster204"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-700 hover:border-indigo-400 hover:text-indigo-400 px-6 py-3 rounded-full font-medium transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-600 text-sm">
        2026 Olumide Daramola &middot; Built with Next.js &amp; Vercel
      </footer>

    </main>
  );
}
