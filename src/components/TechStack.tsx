import React, { useState } from 'react';

const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = {
    all: 'All',
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    devops: 'DevOps',
    mobile: 'Mobile',
    tools: 'Tools'
  };

  const techItems = [
    // Frontend
    {
      name: 'React',
      description: 'Modern UI library for building interactive user interfaces',
      category: 'frontend',
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
    },
    {
      name: 'Vue.js',
      description: 'Progressive JavaScript framework for building user interfaces',
      category: 'frontend',
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
    },
    {
      name: 'TypeScript',
      description: 'Typed superset of JavaScript for better development experience',
      category: 'frontend',
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
    },
    {
      name: 'Tailwind CSS',
      description: 'Utility-first CSS framework for rapid UI development',
      category: 'frontend',
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
    },
    {
      name: 'Next.js',
      description: 'React framework for production-grade applications',
      category: 'frontend',
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
    },

    // Backend
    {
      name: 'Node.js',
      description: 'JavaScript runtime for server-side applications',
      category: 'backend',
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
    },
    {
      name: 'Java',
      description: 'Enterprise-grade programming language for robust applications',
      category: 'backend',
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
    },
    {
      name: 'Rust',
      description: 'Systems programming language focused on safety and performance',
      category: 'backend',
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
    },
    {
      name: 'C',
      description: 'Low-level programming language for system and embedded development',
      category: 'backend',
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
    },
    {
      name: 'Python',
      description: 'Versatile programming language for various applications',
      category: 'backend',
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
    },
    {
      name: 'Express.js',
      description: 'Fast, unopinionated web framework for Node.js',
      category: 'backend',
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
    },

    // Database
    {
      name: 'MySQL',
      description: 'Popular open-source relational database management system',
      category: 'database',
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
    },
    {
      name: 'MongoDB',
      description: 'NoSQL database for modern applications',
      category: 'database',
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
    },
    {
      name: 'PostgreSQL',
      description: 'Advanced open-source relational database',
      category: 'database',
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
    },
    {
      name: 'Redis',
      description: 'In-memory data structure store for caching and messaging',
      category: 'database',
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
    },
    {
      name: 'Elasticsearch',
      description: 'Distributed search and analytics engine',
      category: 'database',
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
    },

    // DevOps
    {
      name: 'Docker',
      description: 'Container platform for application deployment',
      category: 'devops',
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
    },
    {
      name: 'Kubernetes',
      description: 'Container orchestration platform for scaling applications',
      category: 'devops',
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
    },
    {
      name: 'AWS',
      description: 'Cloud computing platform for scalable solutions',
      category: 'devops',
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
    },
    {
      name: 'GitHub Actions',
      description: 'CI/CD platform for automated workflows',
      category: 'devops',
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
    },

    // Mobile
    {
      name: 'React Native',
      description: 'Framework for building native mobile applications',
      category: 'mobile',
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
    },
    {
      name: 'Flutter',
      description: 'UI toolkit for building natively compiled applications',
      category: 'mobile',
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
    },

    // Tools
    {
      name: 'VS Code',
      description: 'Modern code editor with extensive plugin support',
      category: 'tools',
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
    },
    {
      name: 'Git',
      description: 'Distributed version control system',
      category: 'tools',
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
    },
    {
      name: 'Postman',
      description: 'API development and testing platform',
      category: 'tools',
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
    }
  ];

  const filteredItems = activeCategory === 'all'
    ? techItems
    : techItems.filter(item => item.category === activeCategory);

  return (
    <section id="tech-stack" className="py-24 bg-dark border-b border-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Tech Stack</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-lg text-lg font-medium transition-colors ${
                activeCategory === key
                  ? 'bg-primary text-white'
                  : 'bg-dark-lighter text-gray-400 hover:text-white'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((tech, index) => (
            <div key={index} className="group">
              <div className="p-6 rounded-xl bg-dark-lighter border border-gray-800 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d={tech.icon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                </div>
                <p className="text-gray-400">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack; 