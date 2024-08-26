import React from 'react';

const ProjectCard = ({ number, title, description, image }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <div className="flex items-center space-x-2">
          <span className="bg-green-500 text-white rounded-full px-2 py-1 text-sm">{number}</span>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-400 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
