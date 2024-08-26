import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-5 text-center">
      <p>&copy; 2024 Abishek Bhandari</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://github.com/AbishekBhandari" className="hover:text-gray-300">GitHub</a>
        <a href="https://linkedin.com" className="hover:text-gray-300">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
