import { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Book, Briefcase, Languages, Code, Moon, Sun, ChevronRight } from 'lucide-react';

const CV = () => {
  const [activeSection, setActiveSection] = useState('all');
  const [isDark, setIsDark] = useState(false);
  const [ setMousePosition] = useState({ x: 0, y: 0 });

  const skills = {
    technical: ['Python', 'Numpy', 'Pandas', 'C++', 'JavaScript', 'HTML', 'MongoDB', 'MySQL', 'AWS', 'Django', 'PostgreSQL', 'Docker', 'Excel'],
    professional: ['Innovation', 'Cloud Systems', 'Big Data', 'Team work', 'Project Management', 'Problem Solving'],
    personal: ['Strong work ethic', 'Eager to learn', 'Excellent communication', 'Adaptability', 'Creativity', 'Critical thinking']
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className={`min-h-screen transition-all duration-500 ${
      isDark ? 'bg-gradient-to-br from-gray-900 to-blue-900' : 'bg-gradient-to-br from-blue-50 to-indigo-50'
    }`}>
      <div 
        className="absolute top-6 right-6 p-2 backdrop-blur-md bg-white/10 rounded-full cursor-pointer shadow-xl"
        onClick={() => setIsDark(!isDark)}
      >
        {isDark ? <Sun className="text-white" /> : <Moon className="text-gray-800" />}
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className={`max-w-4xl mx-auto rounded-2xl overflow-hidden transition-all duration-500 ${
          isDark ? 'bg-white/10' : 'bg-white/80'
        } backdrop-blur-lg shadow-2xl`}>
          {/* Header Section */}
          <div className={`relative overflow-hidden transition-all duration-500 ${
            isDark ? 'bg-gradient-to-r from-blue-900/50 to-indigo-900/50' : 'bg-gradient-to-r from-blue-600/90 to-indigo-600/90'
          } p-8 md:p-12`}>
            <div className="absolute inset-0 backdrop-blur-sm" />
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white tracking-tight">
                JESÚS ANTOLÍN FELIPE
              </h1>
              <h2 className="text-xl md:text-2xl mb-6 text-blue-100">
                Computer Science & Business Systems Analyst
              </h2>

              <div className="flex flex-wrap gap-4 text-sm text-blue-100">
                <a href="mailto:antolinfelipe.dev@gmail.com" 
                   className="flex items-center gap-2 hover:text-white transition-all transform hover:scale-105">
                  <Mail size={16} />
                  antolinfelipe.dev@gmail.com
                </a>
                <a href="tel:+34676462770" 
                   className="flex items-center gap-2 hover:text-white transition-all transform hover:scale-105">
                  <Phone size={16} />
                  +34 676462770
                </a>
                <a href="https://www.linkedin.com/in/jesus-antolínfelipe-782790244" 
                   className="flex items-center gap-2 hover:text-white transition-all transform hover:scale-105">
                  <Linkedin size={16} />
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 md:p-8">
            {/* Navigation */}
            <div className="flex flex-wrap gap-3 mb-8">
              {['all', 'education', 'experience', 'skills'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-2 rounded-full text-sm transition-all transform hover:scale-105 backdrop-blur-sm
                    ${activeSection === section
                      ? isDark 
                        ? 'bg-white/20 text-white shadow-lg' 
                        : 'bg-blue-600/90 text-white shadow-lg'
                      : isDark
                        ? 'bg-white/5 text-gray-300 hover:bg-white/10'
                        : 'bg-white/50 text-gray-600 hover:bg-white/80'}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>

            <div className="space-y-8">
              {/* Education Section */}
              <div className={`transition-all duration-500 ${activeSection !== 'all' && activeSection !== 'education' ? 'hidden' : ''}`}>
                <div className="flex items-center gap-2 mb-4">
                  <Book className={isDark ? 'text-blue-300' : 'text-blue-600'} />
                  <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>Education</h2>
                </div>
                <div className="space-y-4 ml-4">
                  {[
                    {
                      school: "University of Alicante, Spain",
                      degree: "Double Degree in Computer Science and Business Administration",
                      period: "2017 - 2022"
                    },
                    {
                      school: "University of Alicante, Spain",
                      degree: "English Certification",
                      period: "2019 - 2020"
                    }
                  ].map((edu, index) => (
                    <div key={index} 
                         className={`relative border-l-2 ${isDark ? 'border-blue-300/30' : 'border-blue-200'} 
                         pl-6 pb-4 group hover:pl-8 transition-all duration-300`}>
                      <div className={`absolute w-3 h-3 rounded-full -left-[7px] top-2 transition-all duration-300
                        ${isDark ? 'bg-blue-300' : 'bg-blue-600'} 
                        group-hover:scale-150 group-hover:animate-pulse`} />
                      <h3 className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-800'}`}>
                        {edu.school}
                      </h3>
                      <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>{edu.degree}</p>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{edu.period}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Section */}
              <div className={`transition-all duration-500 ${activeSection !== 'all' && activeSection !== 'experience' ? 'hidden' : ''}`}>
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className={isDark ? 'text-blue-300' : 'text-blue-600'} />
                  <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>Experience</h2>
                </div>
                <div className="space-y-6 ml-4">
                  {[
                    {
                      title: "Data Scientist & Software Developer",
                      company: "INHUB",
                      period: "2023 - Present",
                      location: "Spain",
                      points: [
                        "Developed a market intelligence platform that increased data processing efficiency by 25%.",
                        "Led the development of a web application for private medical practice management using Django, PostgreSQL, Docker and other technologies."
                      ]
                    },
                    {
                      title: "Data Scientist & Software Developer",
                      company: "Ingeniería Global Aplicada",
                      period: "2022 - 2023",
                      location: "Spain",
                      points: [
                        "Spearheaded the development of the NeuroCluster project, leveraging AI to analyze large datasets.",
                        "Designed and implemented operational Django visualizers for industry enterprises.",
                        "Collaborated across multiple departments to deliver diverse technology solutions."
                      ]
                    },
                    {
                      title: "Freelance Web Developer",
                      company: "Freelance",
                      period: "2020 - 2022",
                      location: "Remote",
                      points: [
                        "Developed high-quality, responsive websites and web applications tailored to client needs.",
                        "Developed custom e-commerce platforms, integrating advanced features such as payment gateways."
                      ]
                    }
                  ].map((job, index) => (
                    <div key={index} 
                         className={`relative group backdrop-blur-sm ${
                           isDark ? 'bg-white/5' : 'bg-white/40'
                         } rounded-xl p-6 border border-white/20 transition-all duration-300 hover:transform hover:scale-[1.02]`}>
                      <div className={`absolute w-1 h-full left-0 top-0 rounded-l-xl transition-all duration-300 
                        ${isDark ? 'bg-blue-300/30' : 'bg-blue-600/30'} 
                        group-hover:w-2`} />
                      <h3 className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-800'}`}>
                        {job.title}
                      </h3>
                      <p className={isDark ? 'text-blue-300' : 'text-blue-600'}>{job.company}</p>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        {job.period} | {job.location}
                      </p>
                      <ul className="mt-2 space-y-1">
                        {job.points.map((point, i) => (
                          <li key={i} className={`flex items-start gap-2 text-sm ${
                            isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Section */}
              <div className={`transition-all duration-500 ${activeSection !== 'all' && activeSection !== 'skills' ? 'hidden' : ''}`}>
                <div className="flex items-center gap-2 mb-6">
                  <Code className={isDark ? 'text-blue-300' : 'text-blue-600'} />
                  <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>Skills</h2>
                </div>
                <div className="space-y-6 ml-4">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category} className={`backdrop-blur-sm ${
                      isDark ? 'bg-white/5' : 'bg-white/40'
                    } rounded-xl p-6 border border-white/20`}>
                      <h3 className={`font-semibold text-lg capitalize mb-3 ${
                        isDark ? 'text-white' : 'text-gray-800'
                      }`}>{category} Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill, index) => (
                          <span
                            key={index}
                            className={`px-3 py-1 rounded-full text-sm transition-all transform hover:scale-105 ${
                              isDark 
                                ? 'bg-blue-900/30 text-blue-200 hover:bg-blue-800/40' 
                                : 'bg-blue-100/80 text-blue-800 hover:bg-blue-200/80'
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Languages Section */}
                <div className="mt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Languages className={isDark ? 'text-blue-300' : 'text-blue-600'} />
                    <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>Languages</h3>
                  </div>
                  <div className="ml-4 flex flex-wrap gap-4">
                    {[
                      { language: "Spanish", level: "Native" },
                      { language: "English", level: "B2 - Upper intermediate" }
                    ].map((lang, index) => (
                      <div key={index} 
                           className={`backdrop-blur-sm ${
                             isDark ? 'bg-white/5' : 'bg-white/40'
                           } p-4 rounded-xl border border-white/20 transition-all hover:transform hover:scale-105`}>
                        <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                          {lang.language}
                        </h4>
                        <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          {lang.level}
                        </p>
                      </div>
                    ))}
                  </div>
                  </div>
              </div>
            </div>
          </div>

          {/* Footer with floating elements */}
          <div className={`relative overflow-hidden ${
            isDark ? 'bg-gradient-to-r from-blue-900/30 to-indigo-900/30' : 'bg-gradient-to-r from-blue-100/50 to-indigo-100/50'
          } p-6`}>
            <div className="absolute inset-0 backdrop-blur-sm" />
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                © 2024 Jesús Antolín Felipe. All rights reserved.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Mail, link: "mailto:antolinfelipe.dev@gmail.com" },
                  { icon: Linkedin, link: "https://www.linkedin.com/in/jesus-antolínfelipe-782790244" },
                  { icon: Phone, link: "tel:+34676462770" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
                      isDark 
                        ? 'bg-white/10 text-white hover:bg-white/20' 
                        : 'bg-white/40 text-gray-600 hover:bg-white/60'
                    }`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Floating elements for visual interest */}
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-blob" />
            <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl animate-blob animation-delay-2000" />
          </div>

          {/* Decorative gradient orbs */}
          <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-float" />
            <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-indigo-500/20 rounded-full blur-xl animate-float animation-delay-1000" />
          </div>
        </div>
      </div>

      {/* Add custom styles for animations */}
      <style>
        {`
          @keyframes blob {
            0% { transform: scale(1) translate(0, 0); }
            33% { transform: scale(1.1) translate(20px, -20px); }
            66% { transform: scale(0.9) translate(-20px, 20px); }
            100% { transform: scale(1) translate(0, 0); }
          }
          
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0); }
          }
          
          .animate-blob {
            animation: blob 7s infinite;
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          
          .animation-delay-1000 {
            animation-delay: 1s;
          }
        `}
      </style>
    </main>
  );
};

export default CV;
                