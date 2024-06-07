import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Header.css'; // Custom CSS for additional styling and animations

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <header className={`bg-black shadow-lg p-5 fixed w-full z-50 transition-transform duration-700 ease-out ${loaded ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-red-600 text-4xl font-bold tracking-wider wave-animation">
          <a href="#" className="hover:opacity-80 transition duration-300">
            {'My Portfolio'.split('').map((char, index) => (
              <span key={index} style={{ animationDelay: `${index * 0.1}s` }} className="inline-block wave-letter">{char}</span>
            ))}
          </a>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-white hover:text-gray-400 transition duration-300 ease-in-out">About</a>
          <a href="#projects" className="text-white hover:text-gray-400 transition duration-300 ease-in-out">Projects</a>
          <a href="#contact" className="text-white hover:text-gray-400 transition duration-300 ease-in-out">Contact</a>
        </nav>
        <div className="hidden md:flex space-x-6 text-white">
          <a href="https://github.com/Ramachandra-2k96" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300 ease-in-out">
            <FaGithub size="1.5em" />
          </a>
          <a href="https://www.linkedin.com/in/ramachandra-udupa" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300 ease-in-out">
            <FaLinkedin size="1.5em" />
          </a>
          <a href="https://x.com/Ramachandr1055" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300 ease-in-out">
            <FaTwitter size="1.5em" />
          </a>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} mt-4 bg-black p-5 rounded-lg`}>
        <nav className="flex flex-col space-y-4">
          <a href="#about" className="text-white hover:text-gray-400 transition duration-300 ease-in-out">About</a>
          <a href="#projects" className="text-white hover:text-gray-400 transition duration-300 ease-in-out">Projects</a>
          <a href="#contact" className="text-white hover:text-gray-400 transition duration-300 ease-in-out">Contact</a>
          <div className="flex space-x-6 mt-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition duration-300 ease-in-out">
              <FaGithub size="1.5em" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition duration-300 ease-in-out">
              <FaLinkedin size="1.5em" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition duration-300 ease-in-out">
              <FaTwitter size="1.5em" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
