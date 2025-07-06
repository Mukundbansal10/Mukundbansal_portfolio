
import React, { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "NexuSpace",
      description: "A full MERN community platform with JWT authentication and scalable user management. Built collaborative digital interaction space for users with interest-based communities.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "MongoDB Schema"],
      github: "https://github.com/mukundbansal10",
      impact: "Scalable user management system with secure authentication"
    },
    {
      title: "React Gemini App",
      description: "AI-powered chatbot using Google's Gemini API for real-time Q&A. Features live demo functionality, animated UI with responsive styling and minimalist chat interface.",
      tech: ["React.js", "Gemini API", "JavaScript", "CSS"],
      github: "https://github.com/mukundbansal10",
      demo: "https://demo-link.com",
      impact: "Interactive AI conversational interface with live query handling"
    },
    {
      title: "Camera App",
      description: "React-based image capture application with real-time camera integration and image processing capabilities.",
      tech: ["React.js", "JavaScript", "HTML/CSS"],
      github: "https://github.com/mukundbansal10",
      impact: "Real-time image capture and processing"
    },
    {
      title: "PackifyUI",
      description: "NPM package component library with reusable UI components for React applications.",
      tech: ["React.js", "JavaScript", "NPM"],
      github: "https://github.com/mukundbansal10",
      impact: "Reusable component library published on NPM"
    },
    {
      title: "Currency Converter",
      description: "Lightweight NPM package for currency conversion with real-time exchange rates.",
      tech: ["JavaScript", "NPM", "API Integration"],
      github: "https://github.com/mukundbansal10",
      impact: "Lightweight utility tool for developers"
    },
    {
      title: "To-Do List with Weather",
      description: "Task management web application integrated with weather API for location-based weather updates.",
      tech: ["HTML", "CSS", "JavaScript", "Weather API"],
      github: "https://github.com/mukundbansal10",
      impact: "Enhanced productivity with weather integration"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 max-w-7xl mx-auto">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <p className="text-purple-400 text-xs font-medium mb-4">
                  Impact: {project.impact}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <a 
                  href={project.github}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-300 hover:text-white transition-all duration-200 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
                {project.demo && (
                  <a 
                    href={project.demo}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-white transition-all duration-200 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
