import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className={`text-center z-10 px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
            Mukund Bansal
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-6 animate-fade-in animation-delay-500">
            Software Developer • Full Stack Developer
          </div>
          <div className="text-lg text-gray-400 max-w-2xl mx-auto animate-fade-in animation-delay-1000">
            Passionate about building scalable applications with modern technologies like React, Node.js, and cloud platforms.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-1500">
          <button 
            onClick={scrollToAbout}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View My Work
          </button>
          <a 
            href="#contact" 
            className="px-8 py-3 border border-gray-600 rounded-full text-gray-300 font-semibold hover:border-gray-400 hover:text-white transform hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown 
          className="w-8 h-8 text-gray-400 cursor-pointer hover:text-white transition-colors"
          onClick={scrollToAbout}
        />
      </div>
    </section>
  );
};

export default Hero;
