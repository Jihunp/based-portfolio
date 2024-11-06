// Navbar.js
"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-10 p-6 text-xl bg-white shadow-lg border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-extrabold text-gray-800">MyBrand</h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 p-3 rounded-md transition hover:bg-gray-100 hover:text-gray-900">Home</Link>
          <Link href="/#about-me" className="text-gray-600 p-3 rounded-md transition hover:bg-gray-100 hover:text-gray-900">About</Link>
          <Link href="/#projects" className="text-gray-600 p-3 rounded-md transition hover:bg-gray-100 hover:text-gray-900">Projects</Link>
          <Link href="/contact" target='__blank' className="text-gray-600 p-3 rounded-md transition hover:bg-gray-100 hover:text-gray-900">Contact Me</Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <span className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out text-3xl">&#9776;</span> {/* Hamburger Icon */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-4 p-4 bg-gray-50 rounded-lg shadow-md border border-gray-200">
          <Link href="/" className="text-gray-600 p-3 rounded-md transition hover:bg-gray-100 hover:text-gray-900" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="text-gray-600 p-3 rounded-md transition hover:bg-gray-100 hover:text-gray-900" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/projects" className="text-gray-600 p-3 rounded-md transition hover:bg-gray-100 hover:text-gray-900" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/contact" className="text-gray-600 p-3 rounded-md transition hover:bg-gray-100 hover:text-gray-900" onClick={() => setIsOpen(false)}>Contact Me</Link>
        </div>
      )}
    </nav>
  );
}
