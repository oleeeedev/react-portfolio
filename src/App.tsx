import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Presence from './components/Presence';
import Blog from './components/Blog';
import Footer from './components/Footer';
import ScrollToSection from './components/ScrollToSection';
import DangersOnlineConverters from './pages/blog/dangers-online-converters';
import NeuralNetworksRevolution from './pages/blog/neural-networks-revolution';
import ShazamTechnology from './pages/blog/shazam-technology';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-dark text-white">
        <ScrollToSection />
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <TechStack />
              <Presence />
              <Blog />
            </>
          } />
          <Route path="/blog/dangers-online-converters" element={<DangersOnlineConverters />} />
          <Route path="/blog/neural-networks-revolution" element={<NeuralNetworksRevolution />} />
          <Route path="/blog/shazam-technology" element={<ShazamTechnology />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
