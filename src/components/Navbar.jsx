"use client"
import Link from "next/link"

export default function Navbar() {

  return (
    <nav className="flex">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo section */}
        <div className="flex items-center">
          <h1>Insert Logo Here</h1>
        </div>

        {/* links section */}
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="">Home</Link>
          <Link href="/about" className="">About</Link>
          <Link href="/projects" className="">Projects</Link>
          <Link href="/yay" className="">Contact Me</Link>
        </div>
      </div>
    </nav>

  );
};