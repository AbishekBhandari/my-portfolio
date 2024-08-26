import React from 'react';
import profilePic from '../assets/profile-pic.jpg';

const HeroSection = () => {
  return (
    <section className="text-center p-10 bg-gray-800 text-white">
      <img
        src= {profilePic}
        alt="Profile"
        className="mx-auto rounded-full h-40 w-40 object-cover"
      />
      <h1 className="text-4xl mt-5">Hi👋, I am Abishek Bhandari.</h1>
      <p className="text-xl mt-2">A Computer Engineering graduate with research interest in Machine Learning, Deep learning and Computer Vision</p>
      <p className="mt-4">Here you can explore my projects, publications and CV.</p>
    </section>
  );
};

export default HeroSection;
