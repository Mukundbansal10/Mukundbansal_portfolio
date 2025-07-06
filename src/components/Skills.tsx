import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = {
    languages: [
      { name: 'JavaScript', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'HTML/CSS', level: 95 }
    ],
    frameworks: [
      { name: 'React.js', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 80 }
    ],
    tools: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 85 },
      { name: 'Google Cloud', level: 75 }
    ],
    concepts: [
      { name: 'REST API Development', level: 85 },
      { name: 'OOP', level: 90 },
      { name: 'Database Management', level: 80 },
      { name: 'Software Engineering', level: 85 },
      { name: 'DSA', level: 80 }
    ]
  };

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

  const SkillBar = ({ skill, delay }: { skill: { name: string; level: number }; delay: number }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          setWidth(skill.level);
        }, delay);
        return () => clearTimeout(timer);
      }
    }, [isVisible, skill.level, delay]);

    return (
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span className="text-gray-300 font-medium">{skill.name}</span>
          <span className="text-gray-400 text-sm">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-700/50 rounded-full h-2 backdrop-blur-sm">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${width}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 max-w-6xl mx-auto">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6 text-blue-400">Languages</h3>
            {skills.languages.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={index * 200} />
            ))}
          </div>

          <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6 text-purple-400">Frameworks</h3>
            {skills.frameworks.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={(index + 4) * 200} />
            ))}
          </div>

          <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6 text-cyan-400">Tools</h3>
            {skills.tools.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={(index + 7) * 200} />
            ))}
          </div>

          <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6 text-green-400">Concepts</h3>
            {skills.concepts.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={(index + 11) * 200} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
