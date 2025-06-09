import { AlertCircle, Award, CheckCircle, ChevronDown, ExternalLink, Github, Mail, MapPin, Phone, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import cp from '../src/Image/cp.jpg';

const ChristopherPortfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [typedText, setTypedText] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(''); // 'success', 'error', or ''
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const fullText = "Full Stack Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear status when user starts typing
    if (submitStatus) {
      setSubmitStatus('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    
    if (!name.trim() || !email.trim() || !message.trim()) {
      setSubmitStatus('error');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);

    try {
      const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=pokharelchristopher@gmail.com&su=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      window.open(mailtoLink, '_blank');
      
      // Clear form and show success message
      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus('success');
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
      
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const skills = [
    { name: 'React', level: 90, icon: '⚛️' },
    { name: 'JavaScript', level: 85, icon: '🟨' },
    { name: '.NET', level: 80, icon: '🔷' },
    { name: 'Django', level: 85, icon: '🐍' },
    { name: 'Python', level: 80, icon: '🐍' },
    { name: 'Java', level: 75, icon: '☕' },
    { name: 'HTML/CSS', level: 90, icon: '🎨' },
    { name: 'AWS', level: 70, icon: '☁️' }
  ];

  const projects = [
    {
      title: 'Pet Adoption Platform',
      description: 'A comprehensive pet adoption system built with React frontend and Django backend, featuring pet listings, adoption management, and user profiles.',
      tech: ['React', 'Django', 'PostgreSQL', 'REST API'],
      icon: '🐾',
      github: 'https://github.com/christopher7777777'
    },
    {
      title: 'Hotel Management System',
      description: 'Online hotel booking platform with React frontend and .NET backend, featuring room management, booking system, and payment integration.',
      tech: ['React', '.NET Core', 'SQL Server', 'Payment Gateway'],
      icon: '🏨',
      github: 'https://github.com/christopher7777777'
    },
    {
      title: 'Event Management System',
      description: 'Event booking and management system using Jakarta EE, providing comprehensive event organization and booking capabilities.',
      tech: ['Java', 'Jakarta EE', 'MySQL', 'JSP'],
      icon: '📅',
      github: 'https://github.com/christopher7777777'
    }
  ];

  const certificates = [
    'AWS Academy Cloud Foundation',
    'AWS Academy Machine Learning for NLP',
    'AWS Data Engineering',
    'AWS Academy Machine Learning Foundation'
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-slate-800 to-gray-900 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-8 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-90 backdrop-blur-sm border-b border-blue-400 border-opacity-40">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Christopher
            </div>
            <div className="flex space-x-8">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item.toLowerCase()).scrollIntoView({ behavior: 'smooth' })}
                  className={`hover:text-blue-400 transition-all duration-300 hover:scale-105 ${
                    activeSection === item.toLowerCase() ? 'text-blue-400 font-semibold' : 'text-gray-200'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="hero" className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-slate-700 to-gray-800 opacity-95"></div>
        <div className="text-center z-10 relative">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-500 p-1 shadow-xl shadow-blue-500/30 hover:shadow-cyan-500/40 transition-all duration-500">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-300">
                <img 
                  src={cp}
                  alt="Christopher Pokharel" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Christopher Pokharel
            </h1>
            <div className="text-3xl text-blue-300 h-10 font-semibold">
              {typedText}<span className="animate-ping text-cyan-400">|</span>
            </div>
          </div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
            Dynamic and self-motivated professional skilled in frontend development using React, 
            backend development with .NET and Django, with proper knowledge of API integrations.
          </p>
          <div className="flex justify-center space-x-8 mb-16">
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-cyan-600 px-8 py-4 rounded-full hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 font-semibold"
            >
              <Mail size={24} />
              <span>Get In Touch</span>
            </button>
            <a 
              href="https://github.com/christopher7777777" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 border-2 border-purple-400 px-8 py-4 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:border-transparent hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300 font-semibold"
            >
              <Github size={24} />
              <span>View GitHub</span>
            </a>
          </div>
          <ChevronDown className="animate-bounce mx-auto text-blue-400" size={40} />
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-24 bg-gradient-to-br from-gray-700 to-slate-800 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-800 to-purple-900 bg-opacity-70 rounded-3xl p-10 border border-purple-500 border-opacity-30 hover:border-cyan-400 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500">
                <h3 className="text-3xl font-semibold mb-6 flex items-center text-yellow-400">
                  <Star className="mr-4" />
                  Education
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-cyan-500 pl-6 hover:border-purple-500 transition-colors duration-300">
                    <h4 className="font-semibold text-xl text-cyan-300">BSc (Hons) Computing IT</h4>
                    <p className="text-gray-300">Itahari International College</p>
                    <p className="text-sm text-purple-400">Sept 2023 - Present</p>
                  </div>
                  <div className="border-l-4 border-pink-500 pl-6 hover:border-cyan-500 transition-colors duration-300">
                    <h4 className="font-semibold text-xl text-pink-300">Hotel Management (+2)</h4>
                    <p className="text-gray-300">Lord Buddha College • GPA: 3.34</p>
                    <p className="text-sm text-cyan-400">July 2020 - Sept 2022</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-800 to-cyan-900 bg-opacity-70 rounded-3xl p-10 border border-cyan-500 border-opacity-30 hover:border-purple-400 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500">
                <h3 className="text-3xl font-semibold mb-6 flex items-center text-green-400">
                  <MapPin className="mr-4" />
                  Contact Info
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 hover:text-cyan-400 transition-colors duration-300">
                    <Phone className="text-purple-400" size={20} />
                    <span className="text-lg">9800982301</span>
                  </div>
                  <div className="flex items-center space-x-4 hover:text-purple-400 transition-colors duration-300">
                    <Mail className="text-cyan-400" size={20} />
                    <span className="text-lg">pokharelchristopher@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-4 hover:text-pink-400 transition-colors duration-300">
                    <MapPin className="text-green-400" size={20} />
                    <span className="text-lg">Inaruwa, Sunsari, Nepal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="py-24 bg-gradient-to-br from-purple-900 to-slate-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-cyan-500/5"></div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="bg-gradient-to-br from-slate-800 to-purple-800 bg-opacity-70 rounded-3xl p-8 border border-purple-500 border-opacity-30 hover:border-cyan-400 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500"
              >
                <div className="text-center">
                  <div className="text-5xl mb-6 hover:scale-125 transition-transform duration-300">{skill.icon}</div>
                  <h3 className="text-xl font-semibold mb-6 text-cyan-300">{skill.name}</h3>
                  <div className="relative h-3 bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full shadow-lg shadow-purple-500/50"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-purple-400 mt-3 font-semibold">{skill.level}%</p>
                </div>
              </div>
            ))}
          </div>

          {/* Certificates */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">AWS Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certificates.map((cert, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-opacity-20 rounded-2xl p-6 border border-orange-400 border-opacity-50 flex items-center space-x-4 hover:bg-opacity-30 hover:border-yellow-400 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300"
                >
                  <Award className="text-yellow-400 flex-shrink-0" size={28} />
                  <span className="text-base font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="py-24 bg-gradient-to-br from-slate-800 to-cyan-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-slate-800 to-purple-800 bg-opacity-70 rounded-3xl p-8 border border-cyan-500 border-opacity-30 hover:border-pink-400 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 h-full">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-cyan-500 to-pink-500 flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-purple-500/50">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-6 group-hover:text-cyan-300 transition-colors text-purple-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 bg-opacity-70 rounded-full text-sm text-white border border-cyan-400 border-opacity-40 hover:bg-opacity-100 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => window.open(project.github, '_blank')}
                    className="flex items-center space-x-3 text-cyan-400 hover:text-pink-400 transition-colors duration-300 font-semibold"
                  >
                    <span>View on GitHub</span>
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-24 bg-gradient-to-br from-purple-900 to-slate-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
        <div className="max-w-5xl mx-auto px-6 relative">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <div className="bg-gradient-to-br from-slate-800 to-purple-800 bg-opacity-70 rounded-3xl p-12 border border-purple-500 border-opacity-30 hover:border-cyan-400 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-3xl font-semibold mb-8 text-cyan-300">Get In Touch</h3>
                <p className="text-gray-300 mb-10 leading-relaxed text-lg">
                  I'm always open to discussing new opportunities, innovative projects, 
                  or just having a chat about technology. Let's connect!
                </p>
                <div className="space-y-6">
                  <div className="flex items-center space-x-6 hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-xl text-cyan-300">Email</p>
                      <a 
                        href="mailto:pokharelchristopher@gmail.com"
                        className="text-gray-300 text-lg hover:text-cyan-400 transition-colors"
                      >
                        pokharelchristopher@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50">
                      <Github size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-xl text-purple-300">GitHub</p>
                      <a 
                        href="https://github.com/christopher7777777"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 text-lg hover:text-purple-400 transition-colors"
                      >
                        christopher7777777
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-xl text-green-300">Phone</p>
                      <a 
                        href="tel:9800982301"
                        className="text-gray-300 text-lg hover:text-green-400 transition-colors"
                      >
                        9800982301
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="space-y-8">
                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="flex items-center space-x-3 bg-green-500 bg-opacity-20 border border-green-400 rounded-xl p-4 text-green-300">
                      <CheckCircle size={20} />
                      <span>Message sent successfully! Gmail has been opened for you.</span>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="flex items-center space-x-3 bg-red-500 bg-opacity-20 border border-red-400 rounded-xl p-4 text-red-300">
                      <AlertCircle size={20} />
                      <span>Please fill in all fields with valid information.</span>
                    </div>
                  )}

                  <div>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                      className="w-full px-6 py-4 bg-slate-700 bg-opacity-70 border border-purple-600 border-opacity-50 rounded-2xl focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 transition-all duration-300 text-white placeholder-gray-400 text-lg"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      required
                      className="w-full px-6 py-4 bg-slate-700 bg-opacity-70 border border-purple-600 border-opacity-50 rounded-2xl focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 transition-all duration-300 text-white placeholder-gray-400 text-lg"
                    />
                  </div>
                  <div>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message"
                      rows={6}
                      required
                      className="w-full px-6 py-4 bg-slate-700 bg-opacity-70 border border-purple-600 border-opacity-50 rounded-2xl focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 transition-all duration-300 text-white placeholder-gray-400 text-lg resize-none"
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                      isSubmitting 
                        ? 'bg-gray-600 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 border-t border-purple-500 border-opacity-30 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400 text-lg">
            © 2025 Christopher Pokharel. Built with passion and code.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ChristopherPortfolio;