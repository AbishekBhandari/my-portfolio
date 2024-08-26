import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      number: 1,
      title: 'Mushroom App',
      description: '',
      image: 'path/to/nbc_helperplugin_image.png',
    },
    {
      number: 2,
      title: 'Canteen Management System',
      description: '',
      image: 'path/to/opstooltip_image.png',
    },
    {
      number: 3,
      title: 'Food Order Website',
      description: '',
      image: 'path/to/beam_app_image.png',
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              number={project.number}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
