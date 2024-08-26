import React from 'react';

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-gray-900 text-white">
      <div className="text-2xl font-bold">AB</div>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-gray-300">Home</a>
        <a href="#projects" className="hover:text-gray-300">Projects</a>
        <a href="#research" className="hover:text-gray-300">Research Works</a>
        <a href="#videos" className="hover:text-gray-300">Education</a>
        <a href="#misc" className="hover:text-gray-300">Experience</a>
      </div>
      <div className="flex space-x-4">
        <a href="https://github.com/AbishekBhandari" className="hover:text-gray-300">GitHub</a>
        <a href="https://linkedin.com" className="hover:text-gray-300">LinkedIn</a>
      </div>
    </nav>
  );
};

export default NavBar;
