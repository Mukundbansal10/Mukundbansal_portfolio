
import React, { useEffect, useRef, useState } from 'react';

const Certifications = () => {
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

  const certifications = [
    {
      title: "Introduction to Generative AI",
      issuer: "Google Cloud and Coursera",
      date: "November 2023",
      description: "Comprehensive understanding of generative AI fundamentals and applications"
    },
    {
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft and LinkedIn",
      date: "February 2024",
      description: "Professional development in generative AI technologies and career applications"
    },
    {
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      date: "April 2024",
      description: "Expert-level API development and testing using Postman platform"
    }
  ];

  const nptelCertifications = [
    "Software Engineering",
    "Ethics in Engineering Practice", 
    "Management Information System",
    "E-Business",
    "Leadership & Team Effectiveness",
    "Organizational Behaviour",
    "Environmental Engineering & Science"
  ];

  return (
    <section id="certifications" ref={sectionRef} className="py-20 px-4 max-w-6xl mx-auto">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Certifications & Achievements
        </h2>

        <div className="space-y-8">
          {/* Featured Certifications */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="group backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">🏆</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-purple-400 font-medium mb-2">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mb-3">{cert.date}</p>
                  <p className="text-gray-300 text-xs leading-relaxed">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* NPTEL Certifications */}
          <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-center mb-8 text-cyan-400">
              NPTEL Certifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {nptelCertifications.map((cert, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievement Highlights */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-bold text-blue-400 mb-4">🎯 Champion Milestone Achiever</h3>
              <p className="text-gray-300 text-sm mb-2">Google Cloud Arcade Facilitator Program - 2024 Cohort 2</p>
              <p className="text-gray-400 text-xs">Recognized for outstanding performance and community engagement in a national-level tech learning initiative.</p>
            </div>

            <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-bold text-purple-400 mb-4">🤖 AI Hackathon Participant</h3>
              <p className="text-gray-300 text-sm mb-2">Google AI Hackathon 2024</p>
              <p className="text-gray-400 text-xs">Built a real-time Gemini AI Chatbot with live query handling using Google's LLMs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
