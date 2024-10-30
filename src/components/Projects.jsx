// Projects.js
"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Ai Helper",
      description: "Description for Ai Helper",
      imageUrl: "",
      url: "pop",
    },
    {
      id: 2,
      title: "fun project 2",
      description: "Description for project 2",
      imageUrl: "",
      url: "drop",
    },
    {
      id: 3,
      title: "fun project 3",
      description: "Description for project 3",
      imageUrl: "",
      url: "rockit",
    }
  ];

  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section 
      id="projects" 
      className="flex flex-col items-center h-screen bg-gray-300 text-gray-800 snap-start px-4 sm:px-8 lg:px-16 xl:px-32 2xl:px-48 pt-20">
      <h2 className="text-4xl md:text-5xl pt-10 font-bold mb-4">My Projects</h2>

      <div className="flex flex-col md:flex-row md:w-full p-4 space-x-4">
        
        {/* Default Project on the Left */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:w-1/2 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl font-semibold mb-2">{selectedProject.title}</h3>
          <p className="mt-2">{selectedProject.description}</p>
          <Link href={selectedProject.url} className="text-indigo-600 hover:underline mt-4 block">View Project</Link>
        </div>

        {/* Scrollable List Container */}
        <div className="bg-gray-200 rounded-lg shadow-lg overflow-y-scroll p-6 md:w-1/2">
          <ul className="space-y-4">
            {projects.map((project) => (
              <li 
                key={project.id}
                className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105"
                onMouseEnter={() => {
                  setSelectedProject(project);
                  }}
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <Link href={project.url} className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500">
                  View Project
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
