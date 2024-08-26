import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import ProjectsSection from './components/ProjectsSection';
import './App.css';

function App() {
  return (
    <div className="bg-gray-900 w-full min-h-screen text-white">
      <NavBar />
      <HeroSection />
      {/* Add other sections like Projects, Research, etc. */}
      <ProjectsSection />
      <Footer />
    </div>
  );
}

export default App;
