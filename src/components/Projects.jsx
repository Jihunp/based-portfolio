// Projects.js
"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "JARVUS AI Assistant",
      shortDescription: "Personal assistant using openAI API",
      longDescription: "AI Helper understands your request and responds, it has adds additional features to openAI and responds when you start and stop talking to it. It is able to determine if a person is present and if they are talking to you back.",
      imageUrl: "/jarvus.jpg",
      url: "https://youtu.be/eOE7KYCtJSQ",
    },
    {
      id: 2,
      title: "Wordle Clone Easy Mode",
      shortDescription: "Recreation of the popular NYT game Wordle using React",
      longDescription: "A React-based recreation of Wordle. Players have six attempts to guess a five-letter word. Each guess is color-coded to indicate correct letters, correctly placed letters, and incorrect letters. It's wordle but for beginners.",
      imageUrl: "/wordle.png",
      url: "https://wordle-one-coral.vercel.app/",
    },
    {
      id: 3,
      title: "Book of Marks",
      shortDescription: "Bible note-taking app, that is powered by Firebase, Material-UI, styled-components, and Typescript",
      longDescription: "Bible note-taking app, that is powered by Firebase, Material-UI, styled-components, and Typescript. It was my first experience working with senior-developers and designers. Through this project, I gained a deeper understanding of full-stack development and the importance of building user-centric applications",
      imageUrl: "/book_of_marks.png",
      url: "https://book-of-e994d.web.app/",
    },
    {
      id: 4,
      title: "Tetris Clone",
      shortDescription: "A remake of the world famous Tetris",
      longDescription: "A remake of Tetris built using React and Javascript. It replicates core gameplay of the original game.",
      imageUrl: "/tetris.png",
      url: "https://tetris-kappa-blush.vercel.app/",
    },

  ];

  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section 
      id="projects" 
      className="flex flex-col items-center h-screen bg-gray-300 text-gray-800 snap-start px-4 sm:px-8 lg:px-16 xl:px-32 2xl:px-48 pt-20">
      <h2 className="text-4xl md:text-5xl pt-10 font-bold mb-4">My Projects</h2>

      <div className="flex flex-col md:flex-row md:w-full p-4 space-x-4">
        
        {/* Default Project on the Left */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:w-1/2 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl max-h-[700px]">
          <h3 className="text-3xl font-semibold mb-4 text-center">{selectedProject.title}</h3>
          <img 
            src={selectedProject.imageUrl}
            alt={`$selectedProject.title`}
            className='w-full h-[200px] md:h-[300px] lg:h-[400px] max-h-70 md:max-h-96 object-contain rounded-md'
          />
          <p className="text-center text-lg text-gray-700 leading-relaxed mb-4 mt-2">{selectedProject.longDescription}</p>
          <Link href={selectedProject.url} className="justify-self-center justify-center flex inline-block mt-4 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500">View Project</Link>
        </div>

        {/* Scrollable List Container */}
        <div className="bg-gray-200 rounded-lg shadow-lg overflow-y-scroll p-6 md:w-1/2 max-h-[700px]">
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
                <p className="mt-2 text-gray-600">{project.shortDescription}</p>
                <Link href={project.url} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500">
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
