"use client"

import Link from 'next/link';
import "../app/styles/globals.css";

export default function About() {
  return (
    <section id="work" className="flex flex-col items-center justify-center h-screen bg-gray-200 text-gray-800 snap-start">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">About</h2>
      <p className="text-lg md:text-2xl max-w-xl text-center mb-6">
        Back in 2021, I made a career pivot from being a Sociology student to the world of teach through my first bootcamp.
        Fast-forward to today, I have had the privelege to work various tech non-profits.
      </p>
      <p className="text-lg md:text-2xl max-w-xl text-center mb-6">
        My Main focus is these days is experimenting with adding new features to AI.
        I most enjoy building software where engineering and user stories meet.
        I code with empathy, drawing on my sociological understanding of people&apos;s stories.
        When I am not at my desk, I spend my time making funny youtube videos and trying to reach my fitness goals (hoping to reach the 1000lb club by the end of 2026).
      </p>
      {/* Add your work items or project thumbnails here */}
    </section>
  )
}
