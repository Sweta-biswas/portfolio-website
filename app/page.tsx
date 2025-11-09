"use client";
import React, { useState, useEffect, use } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Menu, X, Code, Briefcase, Award, FolderGit2, ChevronDown, ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['about', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    const scrollToSection = (id: string) => {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    };


  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg shadow-blue-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold relative group cursor-pointer">
              <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                SB
              </span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {['about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-4 py-2 rounded-lg capitalize transition-all duration-300 relative group ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {section}
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-blue-400 to-purple-400 transition-all duration-300 ${
                    activeSection === section ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></div>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-1 animate-fadeIn">
              {['about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-3 rounded-lg capitalize hover:bg-gray-800 transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center space-y-8 animate-fadeInUp">
            <div className="inline-block">
              <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Sweta Biswas
              </h1>
              <div className="h-1 w-full bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full animate-shimmer"></div>
            </div>
            
            <div className="space-y-4">
              <p className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide">Software Developer Engineer</p>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Crafting innovative solutions across Android, Web, and Desktop platforms with modern frameworks and cutting-edge technologies
              </p>
            </div>
            
            <div className="flex justify-center space-x-6 py-6">
              {[
                { icon: Github, href: "https://github.com/Sweta-biswas", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/sweta-biswas-828ab2289/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:swetabiswas452@gmail.com", label: "Email" },
                { icon: Phone, href: "tel:+919366063452", label: "Phone" }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group relative p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                  aria-label={label}
                >
                  <Icon size={24} className="group-hover:text-blue-400 transition-colors" />
                </a>
              ))}
            </div>

            <div className="max-w-4xl mx-auto mt-12 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              <div className="bg-linear-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 group">
                <div className="flex items-center mb-6">
                  <div className="w-1 h-8 bg-linear-to-b from-blue-400 to-purple-400 rounded-full mr-4"></div>
                  <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">Education</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2 p-4 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300">
                    <h4 className="font-semibold text-lg text-gray-200">B.Tech in Computer Science</h4>
                    <p className="text-gray-400">Adamas University, Barasat</p>
                    <div className="flex items-center justify-between pt-2">
                      <p className="text-sm text-gray-500">Oct 2021 - Jun 2025</p>
                      <span className="px-3 py-1 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full text-blue-400 text-sm font-semibold border border-blue-500/30">
                        CGPA 9.17/10.0
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 p-4 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300">
                    <h4 className="font-semibold text-lg text-gray-200">Higher Secondary (12th)</h4>
                    <p className="text-gray-400">Baikhora Higher Secondary School</p>
                    <div className="flex items-center justify-between pt-2">
                      <p className="text-sm text-gray-500">May 2019 - Mar 2021</p>
                      <span className="px-3 py-1 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full text-blue-400 text-sm font-semibold border border-blue-500/30">
                        86.8% TBSE
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={() => scrollToSection('experience')}
              className="mt-12 inline-flex items-center text-gray-400 hover:text-blue-400 transition-all duration-300 group animate-bounce"
            >
              <ChevronDown size={32} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-16 animate-fadeInUp">
            <Briefcase className="text-blue-400 mr-4" size={40} />
            <h2 className="text-5xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</h2>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Software Developer Engineer-I",
                company: "Prantae Solutions",
                location: "Bhubaneswar, Odisha",
                period: "Feb 2025 - Present",
                current: true,
                points: [
                  "Fully dedicated to developing and maintaining the Proflo-U Android application using Kotlin in Android Studio, improving app performance by 30% and enhancing user experience",
                  "Manage and update the Proflo-U website, enhancing usability and improving overall user experience",
                  "Contribute to the ABDM M1 and M2 projects, focusing on healthcare interoperability and integration",
                  "Currently developing a Proflo-U desktop application from scratch using Next.js and Electron.js for seamless cross-platform functionality",
                  "Developed an Internal logger application using MERN stack with TypeScript to improve application monitoring and debugging capabilities"
                ]
              },
              {
                title: "Web Developer Intern",
                company: "Vraio Software Solutions Private Limited",
                location: "Remote",
                period: "Aug 2024 - Nov 2024",
                current: false,
                points: [
                  "Built and managed the front end of an e-learning website for InstaKAS using React and Tailwind CSS, improving user experience with a 10% faster page load time and better responsiveness on all devices"
                ]
              }
            ].map((job, index) => (
              <div 
                key={index}
                className="group relative bg-linear-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-500 animate-fadeInUp"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {job.current && (
                  <div className="absolute top-6 right-6">
                    <span className="px-4 py-1.5 bg-linear-to-r from-green-500/20 to-blue-500/20 rounded-full text-green-400 text-sm font-semibold border border-green-500/30 animate-pulse">
                      Current
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400 mb-2">
                    {job.title}
                  </h3>
                  <p className="text-xl text-gray-300 mb-1">{job.company}</p>
                  <div className="flex flex-wrap items-center gap-4 text-gray-400">
                    <span>{job.location}</span>
                    <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                    <span>{job.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {job.points.map((point, i) => (
                    <li key={i} className="flex items-start group/item">
                      <ArrowUpRight className="mt-1 mr-3 text-blue-400 shrink-0 opacity-0 group-hover/item:opacity-100 transition-opacity" size={16} />
                      <span className="text-gray-300 leading-relaxed group-hover/item:text-gray-100 transition-colors">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-transparent via-gray-800/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-16 animate-fadeInUp">
            <Award className="text-purple-400 mr-4" size={40} />
            <h2 className="text-5xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Achievements</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "SIT ICOE Hackathon 2024",
                badge: "1st Place & Top 10",
                description: "Secured 1st position in the first round and top 10 team out of 400+ teams in the second round. Implemented Science Subject Translation for Bengali Learner ML model integrated with Flask-based Web App.",
                color: "from-yellow-500/20 to-orange-500/20",
                borderColor: "border-yellow-500/30"
              },
              {
                title: "Adamas University Internal Hackathon 2023",
                badge: "Finalist",
                description: "Participated in a hackathon to showcase the idea of an Advanced vehicular safety and user-experience enhancement system.",
                color: "from-purple-500/20 to-pink-500/20",
                borderColor: "border-purple-500/30"
              }
            ].map((achievement, index) => (
              <div 
                key={index}
                className="group relative bg-linear-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 animate-fadeInUp"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${achievement.color} rounded-full filter blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                
                <div className="relative">
                  <span className={`inline-block px-4 py-1.5 bg-linear-to-r ${achievement.color} rounded-full text-purple-300 text-sm font-semibold border ${achievement.borderColor} mb-4`}>
                    {achievement.badge}
                  </span>
                  
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400 mb-4">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-16 animate-fadeInUp">
            <FolderGit2 className="text-blue-400 mr-4" size={40} />
            <h2 className="text-5xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Featured Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AutoHire",
                description: "AI-powered solution using Python, scikit-learn, and TF-IDF vectorization to automatically match resumes with job descriptions through multi-dimensional scoring.",
                tech: ["Python", "scikit-learn", "TF-IDF", "Flask"],
                link: "https://github.com/Sweta-biswas/AutoHire",
                type: "github"
              },
              {
                title: "Library Management Website",
                description: "Full-stack web application using React, Tailwind CSS, Node.js, Express.js, and MongoDB. Features include membership management, real-time book availability, and fine handling.",
                tech: ["React", "Tailwind", "Node.js", "MongoDB"],
                link: "https://library-management-rho-one.vercel.app/",
                type: "demo"
              },
              {
                title: "Supermarket Billing Web App",
                description: "Full-stack application with React JS, Tailwind CSS, NodeJS, ExpressJS, and MongoDB. Features stock monitoring, product search with autocomplete, and comprehensive employee management.",
                tech: ["React", "Tailwind", "Express.js", "MongoDB"],
                link: "https://supermarket-management-psi.vercel.app/",
                type: "demo"
              }
            ].map((project, index) => (
              <div 
                key={index}
                className="group relative bg-linear-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fadeInUp"
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400 mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-6 min-h-[120px]">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-800/80 rounded-lg text-sm text-blue-300 border border-gray-700/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.link}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group/link"
                  >
                    {project.type === 'github' ? <Github size={18} className="mr-2" /> : <ExternalLink size={18} className="mr-2" />}
                    <span className="text-sm font-semibold">View {project.type === 'github' ? 'Repository' : 'Live Demo'}</span>
                    <ArrowUpRight size={16} className="ml-1 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-transparent via-gray-800/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-16 animate-fadeInUp">
            <Code className="text-cyan-400 mr-4" size={40} />
            <h2 className="text-5xl font-bold bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Technical Expertise</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: "Languages",
                skills: ['JavaScript', 'TypeScript', 'CSS', 'HTML', 'Kotlin', 'Java', 'Python', 'C', 'C++'],
                color: "from-purple-500/10 to-pink-500/10",
                iconColor: "text-purple-400"
              },
              {
                category: "Frameworks",
                skills: ['Tailwind CSS', 'Bootstrap', 'React.js', 'Next.js', 'Express.js', 'Node.js', 'Electron.js', 'FastAPI'],
                color: "from-green-500/10 to-emerald-500/10",
                iconColor: "text-green-400"
              },
              {
                category: "Tools & Databases",
                skills: ['Android Studio', 'Prisma', 'MySQL', 'PostgreSQL', 'MongoDB'],
                color: "from-blue-500/10 to-cyan-500/10",
                iconColor: "text-blue-400"
              },
              {
                category: "CS Fundamentals",
                skills: ['DBMS', 'Data Structures', 'Algorithms', 'Operating Systems', 'Computer Networks'],
                color: "from-pink-500/10 to-rose-500/10",
                iconColor: "text-pink-400"
              }
            ].map((skillGroup, index) => (
              <div 
                key={index}
                className="group bg-linear-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 animate-fadeInUp"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`absolute inset-0 bg-linear-to-br ${skillGroup.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative">
                  <h3 className={`text-2xl font-bold ${skillGroup.iconColor} mb-6 flex items-center`}>
                    <div className="w-1.5 h-8 bg-linear-to-b from-current to-transparent rounded-full mr-3"></div>
                    {skillGroup.category}
                  </h3>
                  
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-4 py-2 bg-gray-800/80 hover:bg-gray-700/80 rounded-xl text-sm text-gray-200 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fadeInUp space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Open to new opportunities and collaborations. Ready to bring your ideas to life.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
              <a 
                href="mailto:swetabiswas452@gmail.com" 
                className="group relative px-8 py-4 bg-linear-to-r from-blue-500 to-purple-500 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center">
                  <Mail className="mr-2" size={20} />
                  Send Email
                </span>
              </a>
              
              <a 
                href="https://linkedin.com/in/sweta-biswas" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-xl font-semibold transition-all duration-300 hover:scale-105 border border-gray-700 hover:border-blue-400 flex items-center justify-center"
              >
                <Linkedin className="mr-2 group-hover:text-blue-400 transition-colors" size={20} />
                Connect on LinkedIn
                <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              2025 Sweta Biswas. Crafted with precision and passion.
            </p>
            
            <div className="flex space-x-6">
              {[
                { icon: Github, href: "https://github.com/Sweta-biswas" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/sweta-biswas-828ab2289/" },
                { icon: Mail, href: "mailto:swetabiswas452@gmail.com" }
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 2s linear infinite;
          background-image: linear-gradient(90deg, rgba(59, 130, 246, 0.5) 0%, rgba(147, 51, 234, 0.5) 50%, rgba(236, 72, 153, 0.5) 100%);
        }
      `}</style>
    </div>
  );
}