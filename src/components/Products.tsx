import React from 'react';

interface Platform {
  name: string;
  description: string;
  icon: string;
  link: string;
  category: 'marketplace' | 'social' | 'portfolio';
}

const platforms: Platform[] = [
  {
    name: 'Fiverr',
    description: 'Professional services and custom development solutions',
    icon: 'M22 7.999c0-.69-.355-1.305-.895-1.68l-4.895-2.933c-.281-.168-.62-.168-.9 0L10.895 6.32c-.54.375-.895.99-.895 1.68v5.864c0 .69.355 1.305.895 1.68l4.895 2.933c.281.168.62.168.9 0l4.895-2.933c.54-.375.895-.99.895-1.68V7.999z',
    link: 'https://fiverr.com/oleeeedev',
    category: 'marketplace'
  },
  {
    name: 'GitHub',
    description: 'Open source projects and code repositories',
    icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
    link: 'https://github.com/oleeeedev',
    category: 'social'
  },
  {
    name: 'LinkedIn',
    description: 'Professional network and business connections',
    icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
    link: 'https://linkedin.com/in/oleeeedev',
    category: 'social'
  },
  {
    name: 'CodeCanyon',
    description: 'Premium code templates and scripts',
    icon: 'M12 2L2 7L12 12L22 7L12 2Z',
    link: 'https://codecanyon.net/user/oleeeedev',
    category: 'marketplace'
  },
  {
    name: 'Dribbble',
    description: 'UI/UX design showcase and inspiration',
    icon: 'M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438-1.804.262-2.746 1.033-2.746 2.084 0 1.491 1.998 2.133 3.863 2.133 1.864 0 3.864-.642 3.864-2.133 0-.18-.02-.36-.05-.53-.35-.11-3.17-.953-6.384-.438-1.804.262-2.746 1.033-2.746 2.084 0 1.491 1.998 2.133 3.863 2.133 1.864 0 3.864-.642 3.864-2.133 0-.18-.02-.36-.05-.53z',
    link: 'https://dribbble.com/oleeeedev',
    category: 'portfolio'
  },
  {
    name: 'Behance',
    description: 'Creative portfolio and project showcase',
    icon: 'M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H13.96c.13 3.211 3.483 3.312 4.588 2.029h3.178zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z',
    link: 'https://behance.net/oleeeedev',
    category: 'portfolio'
  }
];

const Presence: React.FC = () => {
  return (
    <section id="presence" className="py-24 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Find Me On</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <a
              key={index}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="p-6 rounded-xl bg-dark-lighter border border-gray-800 hover:border-primary/30 transition-all duration-300 h-full">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d={platform.icon} />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                      {platform.name}
                    </h4>
                    <span className="text-sm text-gray-400">
                      {platform.category.charAt(0).toUpperCase() + platform.category.slice(1)}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400">{platform.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Presence; 