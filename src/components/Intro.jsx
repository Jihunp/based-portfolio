"use client"

import Link from 'next/link';
import "../app/styles/globals.css";

export default function Intro() {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white text-center">

      <div className="flowing-background inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 opacity-30 blur-lg -z-10"></div>

      {/* Profile Image */}
      <div className="animate-bounce duration-150 w-32 h-32 rounded-full bg-cover bg-center bg-no-repeat mb-6" style={{ backgroundImage: "url('/test.jpg')" }}>
      </div>

      {/* Intro Text */}
      <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
        Hi, I&apos;m Jihun Park
      </h1>
      <p className="text-lg md:text-2xl max-w-xl mx-auto mb-6">
        A passionate <span className="font-semibold text-gray-300">Software Engineer</span> with expertise in building modern web applications. Let&apos;s bring ideas to life through code!
      </p>

      {/* Call to Action Button */}
      <Link href="/tester.txt" target="_blank" className="mt-4 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out">
        Download Resume
      </Link>
    </section>
  )
}
