"use client";

import Link from 'next/link';

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col items-center h-screen bg-gray-300 text-gray-800">
      <h2 className="text-4xl md:text-5xl p-10 font-bold mb-4">My Projects</h2>
      <p className="text-lg md:text-2xl max-w-xl text-center mb-8">
        Here are some of the projects I have worked on. Click to learn more!
      </p>

      <div className='flex w-full p-20'>
        <div className='flex-1' p-4 m-2>
          <h1>new information lore</h1>
        </div>

        {/* Scrollable List Container */}
        <div className=" flex-1 m-2 p-4 overflow-y-scroll bg-gray-200 rounded-lg">
          <ul className="space-y-4 p-4 m-2">
            {/* Project Item Example */}
            <li className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold">Project Title 1</h3>
              <p className="mt-2 text-gray-600">Brief description of Project 1. It showcases my skills in XYZ.</p>
              <Link href="/project1" className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500">
                View Project
              </Link>
            </li>

            {/* Repeat similar blocks for additional projects */}
            <li className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold">Project Title 2</h3>
              <p className="mt-2 text-gray-600">Brief description of Project 2. It highlights my experience with ABC.</p>
              <Link href="/project2" className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500">
                View Project
              </Link>
            </li>

            <li className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold">Project Title 3</h3>
              <p className="mt-2 text-gray-600">Brief description of Project 3. Focused on enhancing user experience.</p>
              <Link href="/project3" className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500">
                View Project
              </Link>
            </li>

            {/* Add more projects as needed */}
          </ul>
        </div>
      </div>
    </section>
  );
}
