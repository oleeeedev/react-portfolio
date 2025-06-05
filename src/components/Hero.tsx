import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="px-6 py-3 bg-primary/10 rounded-full text-primary text-lg font-medium">
              Full-Stack Developer
            </span>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-bold text-white mb-8">
            oleeeedev
            <span className="text-5xl md:text-6xl text-primary block mt-2">.de</span>
          </h1>
          
          <p className="text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            I craft modern web experiences with a focus on performance, 
            user experience, and elegant design. My expertise lies in 
            developing full-stack applications with React, TypeScript, and 
            modern web technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <a
              href="#presence"
              className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-lg text-center"
            >
              My Presence
            </a>
            <a
              href="#tech-stack"
              className="px-8 py-4 bg-dark-light text-white rounded-lg hover:bg-dark-light/90 transition-colors text-lg text-center"
            >
              Tech Stack
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-8 bg-dark-light/50 rounded-xl backdrop-blur-sm border border-gray-800/50 hover:bg-dark-light/70 transition-colors">
              <div className="text-5xl font-bold text-white mb-3">5+</div>
              <div className="text-lg text-gray-400">Years Experience</div>
            </div>
            <div className="text-center p-8 bg-dark-light/50 rounded-xl backdrop-blur-sm border border-gray-800/50 hover:bg-dark-light/70 transition-colors">
              <div className="text-5xl font-bold text-white mb-3">50+</div>
              <div className="text-lg text-gray-400">Projects</div>
            </div>
            <div className="text-center p-8 bg-dark-light/50 rounded-xl backdrop-blur-sm border border-gray-800/50 hover:bg-dark-light/70 transition-colors">
              <div className="text-5xl font-bold text-white mb-3">100%</div>
              <div className="text-lg text-gray-400">Satisfaction</div>
            </div>
            <div className="text-center p-8 bg-dark-light/50 rounded-xl backdrop-blur-sm border border-gray-800/50 hover:bg-dark-light/70 transition-colors">
              <div className="text-5xl font-bold text-white mb-3">24/7</div>
              <div className="text-lg text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero; 