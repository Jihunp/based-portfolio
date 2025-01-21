// components/Footer.jsx

import { FaEnvelope, FaGithub, FaLinkedin, FaFilePdf, FaFileAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <div className="mt-10 flex justify-center space-x-6">
          <a href="mailto:jihunparked@gmail.com" className="text-gray-700 hover:text-indigo-600 transition">
            <FaEnvelope size={32} title="Email" />
          </a>
          <a href="https://github.com/jihunp" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600 transition">
            <FaGithub size={32} title="Github" />
          </a>
          <a href="https://www.linkedin.com/in/edward-jihun-park" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600 transition">
            <FaLinkedin size={32} title="LinkedIn" />
          </a>
          <a href="/Edward_resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600 transition">
            <FaFilePdf size={32} title="Resume" />
          </a>
          <a href="/cover_letter.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600 transition">
            <FaFileAlt size={32} title="Cover Letter" />
          </a>
        </div>
        <p className="mt-6 text-sm text-gray-500">© 2024 Jihun Park. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
