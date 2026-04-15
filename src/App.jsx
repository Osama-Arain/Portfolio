import { useState, useEffect } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

  const skills = [
    { icon: '💻', title: 'Frontend', desc: 'Modern UI/UX', tags: ['React.js', 'HTML5', 'Tailwind', 'Vite'] },
    { icon: '⚙️', title: 'Backend', desc: 'Scalable APIs', tags: ['.NET Core','Node.js', 'Express',  'C#'] },
    { icon: '🗄️', title: 'Database', desc: 'Data Management', tags: [ 'MySQL', 'SQL Server','MongoDB',] },
    { icon: '🤖', title: 'AI/ML', desc: 'Smart Solutions', tags: ['Groq API', 'LLaMA', 'RAG'] },
    { icon: '🛒', title: 'CMS', desc: 'E-commerce', tags: ['WordPress', 'Shopify', 'WooCommerce'] },
    { icon: '🔧', title: 'Tools', desc: 'Dev Tools', tags: ['Git', 'VS Code', 'Visual Studio', 'Postman'] },
  ];

  // Featured Projects (React + Node.js apps)
  const featuredProjects = [
    { 
      icon: '🏥', 
      type: 'Health Tech Platform', 
      title: 'HealthMate (Hackathon)', 
      desc: 'Complete health companion app from Saylanu IT Center Hackathon. Full-stack health monitoring with AI insights.', 
      features: ['Report Upload & Analysis', 'Manual Vitals Tracking', 'AI Health Insights', 'Bilingual Support (EN/Urdu)'], 
      tech: ['React', 'Vite', 'Node.js', 'MongoDB', 'Gemini 2.0 API'],
      links: [
        { label: 'Frontend', url: 'https://healthmate-frontend-omega.vercel.app/login' },
        { label: 'Backend', url: 'https://healthmate-backend-rho.vercel.app/' }
      ]
    },
    { 
      icon: '🤖', 
      type: 'RAG AI Chatbot', 
      title: 'HealthMate AI Bot', 
      desc: 'Advanced RAG-powered chatbot for project documentation Q&A with intelligent document understanding.', 
      features: ['RAG-Powered Search', 'PDF/Word Document Upload', 'Smart Query Detection', 'Multi-Doc Support'], 
      tech: ['React', 'Vite', 'Groq API', 'LLaMA 3.3 70B', 'PDF.js'],
      links: [
        { label: 'View Bot', url: 'https://healthmate-bot.vercel.app/' }
      ]
    },
    { 
      icon: '💬', 
      type: 'AI Application', 
      title: 'General Chatbot', 
      desc: 'Intelligent chatbot with embedded project knowledge and bilingual support.', 
      features: ['Natural Language Processing', 'Project Documentation Q&A', 'Multi-Language Support', 'Real-time Responses'], 
      tech: ['React', 'Vite', 'Groq API', 'TailwindCSS'],
      links: [
        { label: 'View Live', url: 'https://chat-bot-one-lime.vercel.app/' }
      ]
    },
    { 
      icon: '💡', 
      type: 'API Application', 
      title: 'Advice Generator', 
      desc: 'Dynamic advice generation app with real-time API integration.', 
      features: ['Real-time API Integration', 'Dynamic Content', 'Responsive Design', 'Quick Reference'], 
      tech: ['React', 'Vite', 'REST API', 'TailwindCSS'],
      links: [
        { label: 'View Live', url: 'https://advices-generator-mu.vercel.app/' }
      ]
    },
    { 
      icon: '🍽️', 
      type: 'Search Application', 
      title: 'Meal Search App', 
      desc: 'Comprehensive meal database search with recipes and nutritional information.', 
      features: ['Advanced Search', 'Recipe Details', 'Meal Categories', 'Responsive Layout'], 
      tech: ['React', 'Vite', 'TheMealDB API', 'TailwindCSS'],
      links: [
        { label: 'View Live', url: 'https://meal-search-app-ten.vercel.app/' }
      ]
    },
  ];

  // WordPress & CMS Projects
  const cmsProjects = [
    { 
      icon: '💰', 
      type: 'Enterprise Solution', 
      title: 'Payday Payroll System', 
      desc: 'Complete payroll management system with automated salary calculation and analytics dashboard.', 
      features: ['Automated Salary Calculation', 'Pay Slip Generation', 'Analytics Dashboard', 'Role-Based Access'], 
      tech: ['ASP.NET', 'C#', 'SQL Server', 'Chart.js'],
      links: [
        { label: 'View Project' }
      ]
    },
    { 
      icon: '🏨', 
      type: 'Full-Stack App', 
      title: 'Hotel Booking System', 
      desc: 'Real-time booking platform with JWT authentication, admin panel, and MongoDB integration.', 
      features: ['Real-time Booking', 'JWT Auth', 'Admin Panel', 'MongoDB Integration'], 
      tech: ['React', 'Vite', 'Node.js', 'MongoDB'],
      links: [
        { label: 'View Project'}
      ]
    },
    { 
      icon: '📊', 
      type: 'Enterprise Software', 
      title: 'Asset Management', 
      desc: 'Track and manage assets with dynamic tables, advanced filtering, and CRUD operations.', 
      features: ['Dynamic Tables', 'Advanced Filtering', 'CRUD Operations', 'Responsive Design'], 
      tech: ['ASP.NET', 'C#', 'SQL Server', 'Bootstrap'],
      links: [
        { label: 'View Project' }
      ]
    },
    { 
      icon: '🔐', 
      type: 'Security Module', 
      title: 'OTP Auth System', 
      desc: 'Secure authentication with email-based OTP verification and bcrypt password hashing.', 
      features: ['Email OTP', 'Bcrypt Hashing', 'Token Expiry', 'NodeMailer'], 
      tech: ['Node.js', 'Express', 'MongoDB', 'bcrypt'],
      links: [
        { label: 'View Project' }
      ]
    },
    { 
      icon: '🌐', 
      type: 'CMS Website', 
      title: 'Ethena', 
      desc: 'Professional portfolio and services website built with WordPress.', 
      features: ['Responsive Design', 'SEO Optimized', 'WordPress CMS', 'Custom Theme'], 
      tech: ['WordPress', 'PHP', 'MySQL', 'WooCommerce'],
      links: [
        { label: 'Visit Website', url: 'https://ethena.fi' }
      ]
    },
    { 
      icon: '🏪', 
      type: 'E-Commerce CMS', 
      title: 'Lawaish - Clothing Store', 
      desc: 'Full-featured e-commerce platform with product management and payment integration.', 
      features: ['Product Catalog', 'Shopping Cart', 'Payment Gateway', 'Inventory Management'], 
      tech: ['WordPress', 'WooCommerce', 'Stripe', 'PHP'],
      links: [
        { label: 'Visit Store', url: 'https://lawaishz.com/' }
      ]
    },
    { 
      icon: '🎯', 
      type: 'Business CMS', 
      title: 'JoinToda', 
      desc: 'Community platform with membership features and user engagement tools.', 
      features: ['Membership System', 'User Dashboard', 'Community Forum', 'Event Management'], 
      tech: ['WordPress', 'BuddyPress', 'Custom Plugins'],
      links: [
        { label: 'Visit Platform', url: 'https://jointoda.com' }
      ]
    },
    { 
      icon: '💰', 
      type: 'Financial CMS', 
      title: 'Dropship Capital', 
      desc: 'Financial services platform with resource library and business tools.', 
      features: ['Resource Database', 'Business Analytics', 'Client Portal', 'Documentation'], 
      tech: ['WordPress', 'PHP', 'Custom Post Types'],
      links: [
        { label: 'Visit Site', url: 'https://dropshipcapital.com/' }
      ]
    },
    { 
      icon: '🚀', 
      type: 'SaaS CMS', 
      title: 'Zitoda', 
      desc: 'Software-as-a-Service platform with user management and analytics dashboard.', 
      features: ['User Accounts', 'Analytics Dashboard', 'API Integration', 'SaaS Features'], 
      tech: ['WordPress', 'WooCommerce', 'Custom Development'],
      links: [
        { label: 'Visit Platform', url: 'https://zitoda.com/' }
      ]
    },
    { 
      icon: '🏢', 
      type: 'Corporate CMS', 
      title: 'Global Agile Services', 
      desc: 'Corporate website with service showcase and client testimonials.', 
      features: ['Service Portfolio', 'Case Studies', 'Team Pages', 'Contact Forms'], 
      tech: ['WordPress', 'PHP', 'Custom Themes'],
      links: [
        { label: 'Visit Site', url: 'https://globalagileservices.com' }
      ]
    },
    { 
      icon: '🔧', 
      type: 'Company CMS', 
      title: 'FOXIT - Tech Company', 
      desc: 'Company website showcasing services, portfolio, and team expertise.', 
      features: ['Portfolio Showcase', 'Service Listing', 'Project Gallery', 'Blog Section'], 
      tech: ['WordPress', 'PHP', 'Custom Plugins'],
      links: [
        { label: 'Visit FOXIT', url: 'https://foxit.pk/' }
      ]
    },
  ];

  // Updated HealthMate features - now focused on Developer Training & Project Docs
  const healthmateFeatures = [
    { icon: '📚', title: 'README Intelligence', desc: 'Reads & understands your GitHub repo README files automatically' },
    { icon: '🎓', title: 'Developer Onboarding', desc: 'Train new team members on project architecture & codebase' },
    { icon: '💬', title: 'Smart Q&A', desc: 'Ask anything about your project - setup, APIs, features, architecture' },
    { icon: '📄', title: 'Documentation Bot', desc: 'Upload any project docs (PDF, Word, MD) for instant knowledge base' },
  ];

  const useCases = [
    { icon: '🆕', title: 'New Developer Joins', desc: 'Bot explains project structure, tech stack, and how to get started' },
    { icon: '🔍', title: 'Quick Reference', desc: '"What API endpoint handles user auth?" - Instant answers from docs' },
    { icon: '🐛', title: 'Debugging Help', desc: 'Understands your codebase to help troubleshoot issues faster' },
    { icon: '📖', title: 'Living Documentation', desc: 'Always up-to-date knowledge from your latest README & docs' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-xl py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">&lt; Osama</span>
            <span className="text-slate-500">/&gt;</span>
          </div>
          <div className="hidden md:flex gap-8">
            {navLinks.map(link => (
              <a key={link} href={`#${link}`} className={`text-sm font-medium capitalize transition-all hover:text-emerald-400 ${link === 'healthmate' ? 'text-emerald-400 font-semibold' : 'text-slate-400'}`}>
                {link === 'healthmate' ? '🤖 HealthMate' : link}
              </a>
            ))}
          </div>
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-emerald-400 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-emerald-400 transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-emerald-400 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-t border-slate-800 p-6">
            {navLinks.map(link => (
              <a key={link} href={`#${link}`} className="block py-3 text-slate-300 hover:text-emerald-400 capitalize" onClick={() => setIsMenuOpen(false)}>
                {link === 'healthmate' ? '🤖 HealthMate AI' : link}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-mono">
              <span className="animate-pulse">●</span> Available for Projects
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Hi, I'm<br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Osama Bin Sarfaraz</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-lg">
              Full-Stack Software Engineer specializing in <span className="text-emerald-400">.NET Core</span>, <span className="text-cyan-400">Node.js</span>, and <span className="text-purple-400">React</span>. Building intelligent applications with AI integration.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-4 border-2 border-slate-700 rounded-full font-semibold hover:border-emerald-500 hover:text-emerald-400 transition-all">Get in Touch</a>
            </div>
            <div className="flex gap-12 pt-8 border-t border-slate-800">
              {[{ num: '2.5+', label: 'Years Experience' }, { num: '15+', label: 'Projects' }, { num: '5+', label: 'Tech Stacks' }].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">{stat.num}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-xs text-slate-500 font-mono">developer.config.js</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-2">
                <p><span className="text-purple-400">const</span> <span className="text-yellow-400">developer</span> = {'{'}</p>
                <p className="pl-4"><span className="text-slate-500">name:</span> <span className="text-emerald-400">"Osama Bin Sarfaraz"</span>,</p>
                <p className="pl-4"><span className="text-slate-500">role:</span> <span className="text-emerald-400">"Software Engineer"</span>,</p>
                <p className="pl-4"><span className="text-slate-500">company:</span> <span className="text-emerald-400">"FOXIT Pvt. Ltd"</span>,</p>
                <p className="pl-4"><span className="text-slate-500">skills:</span> [<span className="text-cyan-400">".NET"</span>, <span className="text-cyan-400">"React"</span>, <span className="text-cyan-400">"Node"</span>],</p>
                <p className="pl-4"><span className="text-slate-500">passion:</span> <span className="text-emerald-400">"Building AI Apps"</span> 🚀</p>
                <p>{'}'}</p>
              </div>
            </div>
            <div className="absolute -z-10 inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-3xl" />
          </div>
        </div>
      </section>



      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-400 font-mono text-sm">// ABOUT ME</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-2">Get to Know Me</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-3xl p-1 max-w-md mx-auto">
                <div className="w-full h-full bg-slate-900 rounded-3xl flex items-center justify-center text-9xl">👨‍💻</div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">A passionate developer turning ideas into reality</h3>
              <p className="text-slate-400">I'm a Computer Science graduate from Iqra University and a Software Engineer at FOXIT Pvt. Ltd., specializing in full-stack development—from crafting intuitive user interfaces to building scalable and robust backend systems.</p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[{ icon: '🎓', label: 'Education', value: 'BS CS, Iqra University' }, { icon: '📍', label: 'Location', value: 'Karachi, Pakistan' }, { icon: '💼', label: 'Experience', value: '2.5+ Years' }, { icon: '🎯', label: 'Focus', value: 'Full-Stack + AI' }].map((item, i) => (
                  <div key={i} className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="text-xs text-slate-500">{item.label}</div>
                    <div className="text-sm font-semibold text-white">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-400 font-mono text-sm">// MY EXPERTISE</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-2">Skills & Technologies</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <div key={i} className="p-6 bg-slate-900/80 border border-slate-800 rounded-2xl hover:border-emerald-500/50 transition-all group">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">{skill.icon}</div>
                <h4 className="text-xl font-bold text-white mb-1">{skill.title}</h4>
                <p className="text-slate-500 text-sm mb-4">{skill.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs text-emerald-400">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section - React/Node Apps */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-400 font-mono text-sm">// ALL PROJECTS</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-2">Projects Portfolio</h2>
            <p className="text-slate-400 mt-4">Full-stack applications, AI integrations, enterprise solutions, and WordPress websites</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, i) => (
              <div key={i} className="group bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all hover:-translate-y-2">
                <div className="p-6 bg-slate-800/30 border-b border-slate-800">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center text-3xl">{project.icon}</div>
                    <div>
                      <span className="text-xs text-cyan-400 font-mono">{project.type}</span>
                      <h4 className="text-xl font-bold text-white">{project.title}</h4>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-400 mb-4">{project.desc}</p>
                  <ul className="space-y-2 mb-4">
                    {project.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-slate-300"><span className="text-emerald-400">▹</span> {f}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, j) => (
                      <span key={j} className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-xs text-emerald-400">{t}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.links.map((link, j) => (
                      <a key={j} href={link.url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-emerald-500/20 border border-emerald-500/50 rounded-lg text-xs font-medium text-emerald-400 hover:bg-emerald-500/30 transition-all">
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CMS Projects Section */}
      <section className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-400 font-mono text-sm">// ENTERPRISE & CMS</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-2">Enterprise Solutions & WordPress</h2>
            <p className="text-slate-400 mt-4">Backend systems, business platforms, and professional websites</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cmsProjects.map((project, i) => (
              <div key={i} className="group bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all hover:-translate-y-2">
                <div className="p-6 bg-slate-800/30 border-b border-slate-800">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center text-2xl">{project.icon}</div>
                    <span className="text-xs text-cyan-400 font-mono">{project.type}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white">{project.title}</h4>
                </div>
                <div className="p-6">
                  <p className="text-slate-400 mb-4 text-sm">{project.desc}</p>
                  <ul className="space-y-1 mb-4">
                    {project.features.slice(0, 3).map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-slate-300"><span className="text-emerald-400">▹</span> {f}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, j) => (
                      <span key={j} className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-xs text-emerald-400">{t}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.links.map((link, j) => (
                      <a key={j} href={link.url} target="_blank" rel="noopener noreferrer" className="flex-1 px-3 py-2 bg-emerald-500/20 border border-emerald-500/50 rounded-lg text-xs font-medium text-emerald-400 hover:bg-emerald-500/30 transition-all text-center">
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-400 font-mono text-sm">// CAREER PATH</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-2">Experience & Education</h2>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-cyan-500 to-purple-500" />
            {[{ title: 'Software Engineer', company: 'FOXIT Pvt. Ltd.', date: '2023 - Present', desc: '.NET Core & Node.js development for enterprise solutions' }, { title: 'Freelance Developer', company: 'Self-Employed', date: '2023 - Present', desc: 'WordPress, Shopify & full-stack custom solutions' }, { title: 'BS Computer Science', company: 'Iqra University', date: '2022 - 2026 (Completed)', desc: 'Full-stack development focus with FYP projects' }].map((exp, i) => (
              <div key={i} className="relative pl-8 pb-12 last:pb-0">
                <div className="absolute left-0 top-0 w-3 h-3 bg-emerald-500 rounded-full -translate-x-1/2 shadow-lg shadow-emerald-500/50" />
                <div className="p-6 bg-slate-900/80 border border-slate-800 rounded-2xl hover:border-emerald-500/50 transition-all">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-2">
                    <div>
                      <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                      <p className="text-emerald-400">{exp.company}</p>
                    </div>
                    <span className="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-400">{exp.date}</span>
                  </div>
                  <p className="text-slate-400">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-emerald-400 font-mono text-sm">// LET'S CONNECT</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-6">Get In Touch</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">I'm always open to discussing new projects, creative ideas, or opportunities.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[{ icon: '✉️', label: 'Email', value: 'osaamaarain@gmail.com', href: 'mailto:osaamaarain@gmail.com' }, { icon: '📱', label: 'Phone', value: '+92 336-8338-780', href: 'tel:+923368338780' }, { icon: '💼', label: 'LinkedIn', value: 'Connect', href: 'https://pk.linkedin.com/in/osamaarain' }, { icon: '💻', label: 'GitHub', value: 'View Code', href: 'https://github.com/Osama-Arain' }].map((contact, i) => (
              <a key={i} href={contact.href} target={contact.href.startsWith('http') ? '_blank' : undefined} rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="p-6 bg-slate-900/80 border border-slate-800 rounded-2xl hover:border-emerald-500/50 transition-all hover:-translate-y-2 group">
                <div className="text-3xl mb-3">{contact.icon}</div>
                <div className="font-semibold text-white group-hover:text-emerald-400 transition-colors">{contact.label}</div>
                <div className="text-sm text-slate-500">{contact.value}</div>
              </a>
            ))}
          </div>
          <a href="mailto:osaamaarain@gmail.com" className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full font-bold text-lg text-slate-950 hover:shadow-xl hover:shadow-emerald-500/30 transition-all hover:-translate-y-1">
            Let's Work Together 🚀
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800 text-center">
        <p className="text-slate-500">Designed & Built by <span className="text-emerald-400">Osama Bin Sarfaraz</span> © 2025</p>
      </footer>
    </div>
  );
}