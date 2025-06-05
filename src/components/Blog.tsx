import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

const Blog: React.FC = () => {
  const featuredPosts: BlogPost[] = [
    {
      title: "The Hidden Dangers of Online Converters: A Deep Dive into Security Risks",
      excerpt: "Online file converters have become ubiquitous tools in our digital workflow, but they come with significant security risks. This comprehensive analysis explores the potential dangers, from data privacy concerns to malware distribution, and provides practical solutions for safe file conversion.",
      category: "Security",
      date: "04.06.2025",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      slug: "dangers-online-converters"
    },
    {
      title: "Neural Networks: The AI Revolution Transforming Our World",
      excerpt: "Neural networks are revolutionizing artificial intelligence, from image recognition to natural language processing. This in-depth exploration covers the fundamental principles, real-world applications, and future implications of this groundbreaking technology that's reshaping our digital landscape.",
      category: "AI & ML",
      date: "04.06.2025",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1465&q=80",
      slug: "neural-networks-revolution"
    },
    {
      title: "The Fascinating Technology Behind Shazam: How It Works",
      excerpt: "Shazam's music recognition technology has revolutionized how we discover music. This detailed analysis breaks down the complex audio fingerprinting algorithms, frequency analysis techniques, and machine learning models that make instant music recognition possible, revealing the engineering marvel behind this everyday technology.",
      category: "Technology",
      date: "04.06.2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      slug: "shazam-technology"
    }
  ];

  const categories = [
    { name: "Security", count: 1 },
    { name: "AI & ML", count: 1 },
    { name: "Technology", count: 1 }
  ];

  return (
    <section id="blog" className="py-24 bg-dark border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Exploring the latest trends in technology, security, and artificial intelligence.
              Deep dives into complex topics, made simple.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {featuredPosts.map((post, index) => (
                <article 
                  key={index}
                  className="group cursor-pointer"
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    <div className="relative aspect-[16/9] mb-6 rounded-xl overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <span className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center text-sm text-gray-400">
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      
                      <p className="text-gray-400 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                        Read more
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-dark-light/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50">
                  <h3 className="text-xl font-bold text-white mb-6">Categories</h3>
                  <div className="space-y-4">
                    {categories.map((category, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-gray-400">{category.name}</span>
                        <span className="px-3 py-1 bg-primary/10 rounded-full text-primary text-sm">
                          {category.count}
                        </span>
                      </div>
                    ))}
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

export default Blog; 