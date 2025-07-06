
import React, { useEffect, useRef, useState } from 'react';

const Experience = () => {
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

  const experiences = [
    {
      title: "Software Development Intern",
      company: "iQuinceSoft",
      period: "May 25, 2024 – July 25, 2024",
      location: "India",
      achievements: [
        "Collaborated in a team to develop scalable features for a client-facing community platform using MERN stack",
        "Built and optimized frontend designs using React.js, enhancing responsiveness and UI performance",
        "Diagnosed backend performance issues and implemented fixes, resulting in 20% faster response times",
        "Documented workflows and maintained codebase clarity to support team handovers",
        "Participated in code reviews and functional testing to maintain high code quality"
      ]
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-4 max-w-6xl mx-auto">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12">
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900"></div>

              <div className="ml-16 md:ml-0 md:grid md:grid-cols-2 md:gap-8">
                <div className={`${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:col-start-2 md:pl-8'}`}>
                  <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-blue-400 mb-2">{exp.title}</h3>
                    <h4 className="text-xl font-semibold text-white mb-1">{exp.company}</h4>
                    <p className="text-gray-400 mb-2">{exp.period}</p>
                    <p className="text-gray-500 mb-4">{exp.location}</p>
                    
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300 text-sm">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
