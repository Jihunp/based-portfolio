"use client";

import "../app/styles/globals.css";

export default function ContactMe() {
  const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

  return (
    <section id="contact-us" className="flex flex-col items-center justify-center h-screen bg-gray-400 text-gray-800 snap-start pt-20 px-4 sm:px-8 lg:px-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-8">Contact Me</h2>
      <p className="text-lg md:text-2xl max-w-xl text-center mb-6">
        I&apos;d love to hear from you! Whether you have a question, a project idea, or just want to say hi, feel free to reach out.
      </p>
      <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
          <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" placeholder="Your name" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
          <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" placeholder="Your email" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea id="message" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" rows="4" placeholder="Your message"></textarea>
        </div>
        <button type="submit" className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-500 transition duration-300">
          Send Message
        </button>
      </form>
    </section>
  );
}
