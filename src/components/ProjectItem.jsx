import React from 'react';

function ProjectItem({ name, githubLink, description, technologies }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
      <h3 className="text-2xl font-bold mb-3">{name}</h3>
      <p className="mb-5">
        GitHub:{' '}
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {githubLink}
        </a>
      </p>
      <p className="mb-5">{description}</p>
      <p className="mb-2">{technologies}</p>
    </div>
  );
}

export default ProjectItem;