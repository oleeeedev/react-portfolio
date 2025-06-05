import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // Wenn wir nicht auf der Startseite sind, navigieren wir dorthin
      window.location.href = `/#${sectionId}`;
    } else {
      // Wenn wir auf der Startseite sind, scrollen wir zum Abschnitt
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto px-4 h-24">
        <div className="flex items-center justify-between h-full">
          <Link to="/" className="text-3xl font-bold text-white">
            oleeeedev<span className="text-primary">.de</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <button
              onClick={() => scrollToSection('about')}
              className="text-lg text-gray-300 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('tech-stack')}
              className="text-lg text-gray-300 hover:text-white transition-colors"
            >
              Tech Stack
            </button>
            <button
              onClick={() => scrollToSection('presence')}
              className="text-lg text-gray-300 hover:text-white transition-colors"
            >
              Presence
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="text-lg text-gray-300 hover:text-white transition-colors"
            >
              Blog
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark border-b border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col gap-6">
              <button
                onClick={() => scrollToSection('about')}
                className="text-lg text-gray-300 hover:text-white transition-colors py-3"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('tech-stack')}
                className="text-lg text-gray-300 hover:text-white transition-colors py-3"
              >
                Tech Stack
              </button>
              <button
                onClick={() => scrollToSection('presence')}
                className="text-lg text-gray-300 hover:text-white transition-colors py-3"
              >
                Presence
              </button>
              <button
                onClick={() => scrollToSection('blog')}
                className="text-lg text-gray-300 hover:text-white transition-colors py-3"
              >
                Blog
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 