import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Hero.css'; // Custom CSS for additional styling and animations

const Hero = () => {
  return (
    <section className="hero-section bg-black text-white min-h-screen flex flex-col justify-center items-center">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container mx-auto px-6 py-12 text-center"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4 hero-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Welcome to <span className="highlight">My Portfolio</span>
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          I'm a <span className="highlight">Web Developer</span> passionate about creating beautiful and functional web experiences.
        </motion.p>
        <motion.div 
          className="flex justify-center space-x-6 mb-8 hero-icons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300 ease-in-out">
            <FaGithub size="2em" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300 ease-in-out">
            <FaLinkedin size="2em" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300 ease-in-out">
            <FaTwitter size="2em" />
          </a>
        </motion.div>
        <motion.a 
          href="#projects" 
          className="btn btn-primary mt-8"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          See My Work
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
