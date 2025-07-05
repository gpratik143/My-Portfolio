import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, User, GraduationCap, Briefcase, Code, Award, ChevronDown, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "Pic2D-Pic3D",
      description: "PyTorch implementation of 3D-aware Conditional Image Synthesis. Synthesizes 3D objects (neural fields) from 2D label maps.",
      tech: ["Python", "PyTorch", "Neural Fields", "3D Synthesis"],
      github: "#"
    },
    {
      title: "Realtime Chat Application",
      description: "WhatsApp-style chat GUI with server-client architecture using Java Swing and socket programming.",
      tech: ["Java", "Swing", "Socket Programming", "GUI"],
      github: "#"
    },
    {
      title: "Face Recognition Attendance System",
      description: "Automated attendance system using face recognition technology for seamless user identification.",
      tech: ["Python", "OpenCV", "Face Recognition", "ML"],
      github: "#"
    },
    {
      title: "Virtual Paint App",
      description: "Interactive virtual painting application using computer vision and hand tracking.",
      tech: ["Python", "MediaPipe", "OpenCV", "NumPy"],
      github: "#"
    }
  ];

  const experiences = [
    {
      title: "Data Associate L1",
      company: "Infotact Solutions",
      location: "Bengaluru, Karnataka",
      duration: "May 2025 - July 2025",
      description: [
        "Collected, cleaned, and prepared structured/unstructured data for analysis and machine learning models",
        "Designed, trained, and fine-tuned predictive models using Python (scikit-learn, TensorFlow)",
        "Partnered with cross-functional teams to develop data-driven solutions with comprehensive documentation"
      ]
    },
    {
      title: "AI/ML Intern",
      company: "Elevate Labs",
      location: "Remote",
      duration: "Apr 2025 – May 2025",
      description: [
        "Collaborated on real-world projects involving data preprocessing, model training, and deployment",
        "Applied Python, Scikit-learn, and Pandas to build and test machine learning models",
        "Gained hands-on experience in end-to-end ML workflows in a remote environment"
      ]
    }
  ];

  const organizations = [
    {
      role: "Coordinator",
      organization: "T and P Cell, JUET",
      icon: "🎯"
    },
    {
      role: "Vice-Chairperson",
      organization: "GFG Student Chapter JUET",
      icon: "💻"
    },
    {
      role: "Design Lead",
      organization: "VR AR MR Club JUET",
      icon: "🥽"
    }
  ];

  const skills = {
    technical: ["AI/ML", "Python", "Java", "C/C++", "SQL", "Linux", "Git", "PowerBI", "TensorFlow", "Scikit-learn"],
    soft: ["Problem Solving", "Teamwork", "Leadership", "Management", "Adaptability", "Active Listener"]
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-white">
                Pratik Gupta
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {['about', 'experience', 'projects', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      activeSection === section
                        ? 'bg-white text-black'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['about', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="capitalize block px-3 py-2 text-base font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded-md w-full text-left"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative inline-block mb-8">
              <div className="w-32 h-32 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-white">
                <img
                 src = "C:\My Portfolio\My-Portfolio\Pratik_pp.png"
                  alt = "Pratik Gupta"
                  className='w-full h-full object-cover'
                  />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-black">👋</span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-white">
              Pratik Gupta
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-6">
              AI/ML Engineer & Data Analyst
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Passionate about creating intelligent solutions and building impactful applications. 
              Currently pursuing B.Tech at JUET with expertise in AI/ML and software development.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full border border-gray-700">
                <Phone size={16} />
                <span>+91 9340633168</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full border border-gray-700">
                <Mail size={16} />
                <span>gpratik154@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full border border-gray-700">
                <MapPin size={16} />
                <span>Guna, M.P</span>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <a href="#" className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-full flex items-center gap-2 transition-colors font-medium">
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full flex items-center gap-2 transition-colors border border-gray-700">
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="mt-12 animate-bounce">
              <ChevronDown size={32} className="mx-auto text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <GraduationCap className="text-white" />
            Education
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-800 rounded-xl p-6 mb-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-2">Bachelor of Technology</h3>
              <p className="text-gray-300 mb-2">Jaypee University of Engineering and Technology, Guna (M.P)</p>
              <p className="text-gray-400 mb-4">Expected 2026</p>
              <p className="text-sm text-gray-500">
                <strong>Relevant Coursework:</strong> AI/ML, DSA, OS, TOC, DBMS, IOT, NLP
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-2">Senior Secondary School</h3>
                <p className="text-gray-300 mb-2">Hindupat Public School, Raghogarh, Guna(M.P)</p>
                <p className="text-gray-400">Completion year - 2022</p>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-2">Secondary School</h3>
                <p className="text-gray-300 mb-2">Hindupat Public School, Raghogarh, Guna(M.P)</p>
                <p className="text-gray-400">Completion year - 2020</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <Code className="text-white" />
            Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-6 text-white">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill) => (
                  <span key={skill} className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm border border-gray-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-6 text-white">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill) => (
                  <span key={skill} className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm border border-gray-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <Briefcase className="text-white" />
            Experience
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <p className="text-lg text-gray-300">{exp.company}</p>
                    <p className="text-gray-400">{exp.location}</p>
                  </div>
                  <div className="text-right md:text-left mt-2 md:mt-0">
                    <span className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm border border-gray-600">
                      {exp.duration}
                    </span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2">
                      <span className="text-white mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <Code className="text-white" />
            Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-gray-700 text-gray-200 px-2 py-1 rounded text-sm border border-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizations Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <Award className="text-white" />
            Organizations
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {organizations.map((org, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center hover:border-gray-600 transition-all duration-300">
                <div className="text-4xl mb-4">{org.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{org.role}</h3>
                <p className="text-gray-300">{org.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:gpratik154@gmail.com" className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-full flex items-center gap-2 transition-colors font-medium">
              <Mail size={20} />
              <span>Email Me</span>
            </a>
            <a href="#" className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full flex items-center gap-2 transition-colors border border-gray-700">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a href="#" className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full flex items-center gap-2 transition-colors border border-gray-700">
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Pratik Gupta. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;