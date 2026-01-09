
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Github, 
  MessageCircle, 
  Mail, 
  MapPin, 
  ChevronRight,
  Globe
} from 'lucide-react';

/**
 * COMPONENT: Navigation
 */
const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<'EN' | 'SW'>('EN');

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'My Journey', href: '#journey' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#FDFCFB]/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-xl font-medium tracking-tight">
          Alex Mwangi<span className="text-slate-400">.</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-[13px] font-medium uppercase tracking-wider text-black/60 hover:text-black transition-colors">
              {item.name}
            </a>
          ))}
          <button 
            onClick={() => setLang(lang === 'EN' ? 'SW' : 'EN')}
            className="flex items-center space-x-1 text-[13px] font-medium opacity-60 hover:opacity-100 transition-opacity"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang}</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-20 bg-[#FDFCFB] z-40 md:hidden p-6 flex flex-col space-y-8 animate-in fade-in slide-in-from-top-4 duration-300">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-3xl editorial-heading border-b border-black/5 pb-4"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 flex justify-between items-center">
             <button 
              onClick={() => setLang(lang === 'EN' ? 'SW' : 'EN')}
              className="flex items-center space-x-2 text-lg font-medium"
            >
              <Globe className="w-5 h-5" />
              <span>English / Kiswahili</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

/**
 * COMPONENT: Hero
 */
const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto">
      <div className="max-w-4xl">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-slate-200 text-xs font-medium text-slate-500 mb-8 tracking-wide">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span>Open for strategic collaboration</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl editorial-heading mb-8 leading-[1.1] text-[#1A1A1A]">
          Machine Learning · MLOps · Automation
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl leading-relaxed">
          Building production-grade AI systems for real businesses. 
          I design and deploy machine learning and automation systems that reduce operational friction, improve decision-making, and scale sustainably.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#contact" className="bg-[#1A1A1A] text-white px-8 py-4 flex items-center justify-center space-x-2 hover:bg-black transition-all group">
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#work" className="border border-slate-200 px-8 py-4 flex items-center justify-center space-x-2 hover:bg-slate-50 transition-all">
            <span>View Selected Work</span>
          </a>
        </div>
      </div>
    </section>
  );
};

/**
 * COMPONENT: Services Section
 */
const Services: React.FC = () => {
  const services = [
    {
      title: "Machine Learning & MLOps",
      desc: "Production-ready models, pipelines, monitoring, and deployment. Moving models from local notebooks to reliable enterprise infrastructure."
    },
    {
      title: "Automation Systems",
      desc: "WhatsApp, CRM, and workflow automation. Building operational tooling that reduces manual friction for high-growth service companies."
    },
    {
      title: "Applied Data Systems",
      desc: "Data pipelines, analytics, and decision support. Turning raw events into structured, actionable intelligence."
    },
    {
      title: "Consulting & Technical Direction",
      desc: "Architecture guidance for teams adopting AI. Helping leadership navigate the hype to find real-world utility."
    }
  ];

  return (
    <section id="services" className="section-padding px-6 bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-sm font-medium uppercase tracking-[0.2em] opacity-40 mb-4 block">Capabilities</span>
          <h2 className="text-4xl md:text-6xl editorial-heading">Execution focused. Systems minded.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {services.map((s, idx) => (
            <div key={idx} className="bg-[#1A1A1A] p-10 md:p-16 hover:bg-slate-900/50 transition-colors">
              <h3 className="text-2xl md:text-3xl editorial-heading mb-6">{s.title}</h3>
              <p className="text-slate-400 leading-relaxed text-lg max-w-sm">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * COMPONENT: Journey Section
 */
const Journey: React.FC = () => {
  return (
    <section id="journey" className="section-padding px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400 mb-4 block">The Narrative</span>
          <h2 className="text-4xl md:text-6xl editorial-heading leading-tight">This didn’t start with AI. It started with systems.</h2>
        </div>
        
        <div className="lg:col-span-7 space-y-8">
          <p className="text-xl md:text-2xl leading-relaxed text-slate-800">
            Alex Mwangi is a machine learning engineer and automation specialist focused on building deployable, maintainable, production-ready systems.
          </p>
          <div className="h-px bg-slate-200 w-full" />
          <div className="text-lg text-slate-600 space-y-6 leading-relaxed">
            <p>
              My technical foundation began in electrical engineering, where I learned how real systems behave under pressure — where theory meets constraints.
            </p>
            <p>
              Curiosity pushed me deeper into software, data, and eventually machine learning. Without access to luxury resources or formal mentorship, I learned by building, breaking, and rebuilding systems — repeatedly.
            </p>
            <p>
              While working with small businesses, a pattern became clear: most problems weren’t “AI problems” — they were systems problems.
            </p>
            <p className="font-medium text-[#1A1A1A]">
              My belief is simple: AI should be useful, measurable, and responsibly deployed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * COMPONENT: RoadMap (Legacy)
 */
const RoadMap: React.FC = () => {
  const pillars = [
    "Software Engineering (Python, Linux, Git)",
    "Data Engineering (Pipelines, Storage, BigQuery)",
    "Machine Learning (Training, Evaluation, Monitoring)",
    "MLOps (CI/CD, Kubernetes, GKE)",
    "Cloud Systems (GCP, Vertex AI)"
  ];

  return (
    <section className="section-padding px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl editorial-heading mb-6">Building Toward Google-Grade MLOps — Publicly</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            My long-term objective is to operate at the level expected of top Google MLOps engineers — not as a title, but as an execution standard. This journey is built as a public, disciplined roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <div key={i} className="bg-white p-8 border border-slate-200 flex items-center space-x-4 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500 shrink-0">
                0{i + 1}
              </div>
              <span className="text-sm font-semibold text-slate-800">{pillar}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * COMPONENT: Contact Section
 */
const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-7xl editorial-heading mb-8">Let’s discuss work that requires depth.</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-slate-400 mt-1" />
                <div>
                  <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">Email</p>
                  <a href="mailto:mwirigialex351@gmail.com" className="text-xl hover:text-slate-500 transition-colors">mwirigialex351@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MessageCircle className="w-6 h-6 text-slate-400 mt-1" />
                <div>
                  <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">WhatsApp</p>
                  <a href="https://wa.me/254111475368" className="text-xl hover:text-slate-500 transition-colors">+254 111 475 368</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-slate-400 mt-1" />
                <div>
                  <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">Location</p>
                  <p className="text-xl">Nairobi, Kenya (EAT)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Github className="w-6 h-6 text-slate-400 mt-1" />
                <div>
                  <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">Source</p>
                  <a href="https://github.com/alexmwirigi-DataScience" target="_blank" className="text-xl hover:text-slate-500 transition-colors">alexmwirigi-DataScience</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 md:p-12 border border-slate-100 shadow-2xl shadow-slate-200/50">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Name</label>
                <input type="text" className="w-full border-b border-slate-200 py-3 outline-none focus:border-black transition-colors bg-transparent" placeholder="Jane Doe" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Email</label>
                  <input type="email" className="w-full border-b border-slate-200 py-3 outline-none focus:border-black transition-colors bg-transparent" placeholder="jane@example.com" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Organization</label>
                  <input type="text" className="w-full border-b border-slate-200 py-3 outline-none focus:border-black transition-colors bg-transparent" placeholder="Acme Corp" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">What are you trying to build?</label>
                <textarea rows={4} className="w-full border-b border-slate-200 py-3 outline-none focus:border-black transition-colors bg-transparent resize-none" placeholder="Briefly describe your vision or current system bottleneck..."></textarea>
              </div>
              <button className="w-full bg-[#1A1A1A] text-white py-5 font-medium hover:bg-black transition-all flex items-center justify-center space-x-2">
                <span>Send Inquiry</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * MAIN APP
 */
const App: React.FC = () => {
  return (
    <div className="selection:bg-slate-200 selection:text-black">
      <Navigation />
      
      <main>
        <Hero />
        
        {/* Short Professional Intro - Sub Hero */}
        <section className="px-6 py-24 bg-slate-50 border-y border-black/5">
          <div className="max-w-7xl mx-auto">
             <div className="max-w-3xl">
                <p className="text-2xl md:text-3xl font-light leading-snug text-slate-600">
                  <span className="text-black font-medium">Alex Mwangi</span> sits at the intersection of software engineering, data systems, and real business operations. He focuses on building maintainable, production-ready AI infrastructure.
                </p>
             </div>
          </div>
        </section>

        <Services />
        <Journey />
        <RoadMap />
        <Contact />
      </main>

      <footer className="py-12 px-6 border-t border-slate-100 text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
          <div>© 2026 Alex Mwangi. Built with intention. No noise.</div>
          <div className="flex space-x-8">
            <a href="https://github.com/alexmwirigi-DataScience" className="hover:text-black transition-colors">GitHub</a>
            <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
