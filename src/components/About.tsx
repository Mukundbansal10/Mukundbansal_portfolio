
import React, { useEffect, useRef, useState } from 'react';

const About = () => {
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

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 max-w-6xl mx-auto">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Education</h3>
              <div className="space-y-2">
                <h4 className="text-xl font-medium">GLA University</h4>
                <p className="text-gray-400">B.Tech in Computer Science</p>
                <p className="text-gray-500">09/2022 - Present • Mathura, U.P.</p>
              </div>
            </div>

            <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Current Role</h3>
              <div className="space-y-2">
                <h4 className="text-xl font-medium">Software Development Intern</h4>
                <p className="text-gray-400">iQuinceSoft</p>
                <p className="text-gray-500">May 2024 - July 2024</p>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Professional Journey</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                I'm a passionate Computer Science student with hands-on experience in full-stack development. 
                During my internship at iQuinceSoft, I contributed to scalable applications using the MERN stack 
                and enhanced system performance by 20%.
              </p>
              <p>
                My expertise spans from frontend frameworks like React.js to backend technologies like Node.js, 
                with additional experience in cloud platforms and API development. I'm particularly interested 
                in building user-centric applications that solve real-world problems.
              </p>
              <p>
                Beyond coding, I'm continuously learning about emerging technologies, particularly in AI and 
                cloud computing, as evidenced by my certifications from Google Cloud, Microsoft, and other 
                leading platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
