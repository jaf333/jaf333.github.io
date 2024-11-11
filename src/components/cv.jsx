import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Book, Briefcase, Languages, Code } from 'lucide-react';

const CV = () => {
  const [activeSection, setActiveSection] = useState('all');

  const skills = {
    technical: ['Python', 'Numpy', 'Pandas', 'C++', 'JavaScript', 'HTML', 'MongoDB', 'MySQL', 'AWS', 'Django', 'PostgreSQL', 'Docker', 'Excel'],
    professional: ['Innovation', 'Cloud Systems', 'Big Data', 'Team work', 'Project Management', 'Problem Solving'],
    personal: ['Strong work ethic', 'Eager to learn', 'Excellent communication', 'Adaptability', 'Creativity', 'Critical thinking']
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white">JESÚS ANTOLÍN FELIPE</h1>
            <h2 className="text-lg md:text-xl mb-6 text-blue-100">Computer Science & Business Systems Analyst</h2>

            <div className="flex flex-col md:flex-row gap-4 text-sm text-blue-100">
              <a href="mailto:antolinfelipe.dev@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={16} />
                antolinfelipe.dev@gmail.com
              </a>
              <a href="tel:+34676462770" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={16} />
                +34 676462770
              </a>
              <a href="https://www.linkedin.com/in/jesus-antolínfelipe-782790244" className="flex items-center gap-2 hover:text-white transition-colors">
                <Linkedin size={16} />
                LinkedIn Profile
              </a>
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
                  className={`px-4 py-2 rounded-full text-sm transition-all transform hover:scale-105
                    ${activeSection === section
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>

            <div className="space-y-8">
              {/* Education Section */}
              <div className={`transition-all duration-500 ${activeSection !== 'all' && activeSection !== 'education' ? 'hidden' : ''}`}>
                <div className="flex items-center gap-2 mb-4">
                  <Book className="text-blue-600" />
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800">Education</h2>
                </div>
                <div className="space-y-4 ml-4">
                  <div className="relative border-l-2 border-blue-200 pl-6 pb-4">
                    <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px] top-2" />
                    <h3 className="font-semibold text-lg">University of Alicante, Spain</h3>
                    <p className="text-gray-600">Double Degree in Computer Science and Business Administration</p>
                    <p className="text-gray-500 text-sm">2017 - 2022</p>
                  </div>
                  <div className="relative border-l-2 border-blue-200 pl-6">
                    <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px] top-2" />
                    <h3 className="font-semibold text-lg">University of Alicante, Spain</h3>
                    <p className="text-gray-600">English Certification</p>
                    <p className="text-gray-500 text-sm">2019 - 2020</p>
                  </div>
                </div>
              </div>

              {/* Experience Section */}
              <div className={`transition-all duration-500 ${activeSection !== 'all' && activeSection !== 'experience' ? 'hidden' : ''}`}>
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="text-blue-600" />
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800">Experience</h2>
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
                    <div key={index} className="relative border-l-2 border-blue-200 pl-6 transition-all hover:translate-x-2">
                      <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px] top-2" />
                      <h3 className="font-semibold text-lg">{job.title}</h3>
                      <p className="text-blue-600">{job.company}</p>
                      <p className="text-gray-500 text-sm">{job.period} | {job.location}</p>
                      <ul className="mt-2 space-y-1">
                        {job.points.map((point, i) => (
                          <li key={i} className="text-gray-600 text-sm">{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Section */}
              <div className={`transition-all duration-500 ${activeSection !== 'all' && activeSection !== 'skills' ? 'hidden' : ''}`}>
                <div className="flex items-center gap-2 mb-6">
                  <Code className="text-blue-600" />
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800">Skills</h2>
                </div>
                <div className="space-y-6 ml-4">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category}>
                      <h3 className="font-semibold text-lg capitalize mb-3">{category} Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors"
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
                    <Languages className="text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-800">Languages</h3>
                  </div>
                  <div className="ml-4 flex flex-wrap gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold">Spanish</h4>
                      <p className="text-gray-600 text-sm">Native</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold">English</h4>
                      <p className="text-gray-600 text-sm">B2 - Upper intermediate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CV;
