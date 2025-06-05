import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <div className="w-20 h-1 bg-primary rounded-full"></div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with a keen eye for design and a love for clean, efficient code. 
                My journey in web development started with a simple curiosity about how things work on the internet, 
                which evolved into a deep expertise in modern web technologies.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white">Experience</h3>
                  <p className="text-gray-400">5+ Years in Web Development</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white">Projects</h3>
                  <p className="text-gray-400">50+ Completed Projects</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white">Specialization</h3>
                  <p className="text-gray-400">Full-Stack Development</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white">Location</h3>
                  <p className="text-gray-400">Germany, Remote</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-dark-lighter border border-gray-800 p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="relative h-full flex flex-col justify-center items-center">
                  <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mb-8">
                    <svg className="w-16 h-16 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12L12 17L22 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">oleeeedev</h3>
                    <p className="text-gray-400">Full-Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 