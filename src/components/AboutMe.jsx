"use client";

import Link from 'next/link';
import "../app/styles/globals.css";
import { FaGithub, FaEnvelope, FaLinkedin, FaFileAlt, FaFilePdf } from 'react-icons/fa';

export default function AboutMe() {
  return (
    <section id="about-me" className="relative flex flex-col items-center justify-center bg-gray-200 text-gray-800 snap-start">
      {/* Decorative Shapes */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-500 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute top-32 -right-12 w-24 h-24 bg-yellow-400 rounded-full opacity-70 animate-bounce"></div>
      <div className="absolute bottom-24 left-20 w-28 h-28 bg-green-300 rounded-lg rotate-12 shadow-lg"></div>
      <div className="absolute bottom-10 right-16 w-20 h-20 bg-red-400 rounded-full opacity-60 animate-spin-slow"></div>

      {/* About Section Content */}
      <h2 className="text-4xl md:text-5xl font-bold mb-4">About</h2>
      <p className="text-lg md:text-2xl max-w-xl text-center mb-6">
        Back in 2021, I made a career pivot from being a Sociology student to the world of tech through my first bootcamp.
        Fast-forward to today, I have had the privilege to work at various tech non-profits.
      </p>
      <p className="text-lg md:text-2xl max-w-xl text-center mb-6">
        My main focus these days is experimenting with adding new features to AI. I most enjoy building software where engineering and user stories meet.
        I code with empathy, drawing on my sociological understanding of people&apos;s stories. When I am not at my desk, I spend my time making funny YouTube videos and trying to reach my fitness goals (hoping to reach the 1000lb club by the end of 2026).
      </p>

      {/* Contact Section */}
      <div className="mt-10 flex space-x-6">
        <a href="mailto:jihunparked@gmail.com" className="text-gray-700 hover:text-indigo-600 transition">
          <FaEnvelope size={32} title='Email' />
        </a>
        <a href="https://github.com/jihunp" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600 transition">
          <FaGithub size={32} title='Github' />
        </a>
        <a href="https://www.linkedin.com/in/edward-jihun-park" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600 transition">
          <FaLinkedin size={32} title='LinkedIn' />
        </a>
        <a href="/path/to/your-resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600 transition">
          <FaFilePdf size={32} title="Resume" />
        </a>
        <a href="/path/to/your-cover-letter.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600 transition">
          <FaFileAlt size={32} title="Cover Letter" />
        </a>
      </div>
    </section>
  );
}
