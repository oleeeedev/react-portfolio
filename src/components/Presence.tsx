import React from 'react';

const Presence: React.FC = () => {
  const platforms = [
    {
      name: 'Fiverr',
      description: 'Find me on Fiverr for professional web development and consulting services.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.004 5.838a.738.738 0 0 0-.194-.504.703.703 0 0 0-.49-.196h-6.14a.703.703 0 0 0-.49.196.738.738 0 0 0-.194.504v1.31c0 .19.07.37.194.504a.703.703 0 0 0 .49.196h2.385v9.61h-2.385a.703.703 0 0 0-.49.196.738.738 0 0 0-.194.504v1.31c0 .19.07.37.194.504a.703.703 0 0 0 .49.196h6.14c.184 0 .36-.07.49-.196a.738.738 0 0 0 .194-.504v-1.31a.738.738 0 0 0-.194-.504.703.703 0 0 0-.49-.196h-2.385V7.848h2.385c.184 0 .36-.07.49-.196a.738.738 0 0 0 .194-.504v-1.31zM9.57 5.838a.738.738 0 0 0-.194-.504.703.703 0 0 0-.49-.196H2.746a.703.703 0 0 0-.49.196.738.738 0 0 0-.194.504v1.31c0 .19.07.37.194.504a.703.703 0 0 0 .49.196h2.385v9.61H2.746a.703.703 0 0 0-.49.196.738.738 0 0 0-.194.504v1.31c0 .19.07.37.194.504a.703.703 0 0 0 .49.196h6.14c.184 0 .36-.07.49-.196a.738.738 0 0 0 .194-.504v-1.31a.738.738 0 0 0-.194-.504.703.703 0 0 0-.49-.196H5.185V7.848h2.385c.184 0 .36-.07.49-.196a.738.738 0 0 0 .194-.504v-1.31z"/>
        </svg>
      ),
      link: 'https://de.fiverr.com/s/R7oy375',
      color: 'bg-[#1DBF73]'
    },
    {
      name: 'LemonSqueezy',
      description: 'Discover my digital products and services on LemonSqueezy.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      link: 'https://app.lemonsqueezy.com/oleeeedev',
      color: 'bg-[#FF6B00]'
    },
    {
      name: 'GitHub',
      description: 'Explore my open-source projects and contributions on GitHub.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
        </svg>
      ),
      link: 'https://github.com/oleeeedev',
      color: 'bg-[#333333]'
    }
  ];

  return (
    <section id="presence" className="py-24 bg-dark border-b border-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">My Presence</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <a
              key={index}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="h-full p-8 rounded-xl bg-dark-lighter border border-gray-800 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 rounded-lg ${platform.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    {platform.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{platform.name}</h3>
                </div>
                <p className="text-gray-400 mb-6">{platform.description}</p>
                <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
                  <span className="font-medium">Visit Profile</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Presence; 