"use client"

import Link from 'next/link';
import "../app/styles/globals.css";

import About from './About';
import Projects from './Projects';

export default function Intro() {
  return (
    <div>
      <section className="relative flex flex-col items-center justify-center h-screen text-center bg-gray-100 text-gray-800 snap-start">

        {/* Profile Image */}
        <div className="duration-150 w-32 h-32 rounded-full bg-cover bg-center bg-no-repeat mb-6" style={{ backgroundImage: "url('/test.jpg')" }}>
        </div>

        {/* Intro Text */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
          Hi, I&apos;m <span className=''>Edward</span>
        </h1>
        <p className="text-lg md:text-2xl max-w-xl mx-auto mb-6">
          A passionate <span className="font-semibold text-gray-600">Software Engineer</span> with expertise in building modern web applications.
        </p>

        {/* Call to Action Button */}
        {/* <Link href="/tester.txt" target="_blank" className="mt-4 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out">
          Download Resume
        </Link> */}
        <Link
          href="#work"
          className="mt-4 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out"
        >
          View my work
        </Link>
      </section>
      <About />
      <Projects/>

    </div>
  )
}
