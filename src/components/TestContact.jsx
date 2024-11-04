"use client";
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactMe() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // EmailJS configuration
    emailjs.sendForm(
      'YOUR_SERVICE_ID',    // Replace with your Service ID
      'YOUR_TEMPLATE_ID',    // Replace with your Template ID
      e.target,
      'YOUR_USER_ID'         // Replace with your User ID (or Public Key)
    )
    .then(() => {
      setStatus('Email sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      setStatus('Failed to send email.');
    });
  };

  return (
    <section id="contact-us" className="flex flex-col items-center justify-center h-screen bg-gray-400 text-gray-800 snap-start pt-20 px-4 sm:px-8 lg:px-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-8">Contact Me</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" placeholder="Your name" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" placeholder="Your email" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" rows="4" placeholder="Your message" required></textarea>
        </div>
        <button type="submit" className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-500 transition duration-300">
          Send Message
        </button>
      </form>
      {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
    </section>
  );
}
