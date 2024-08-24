import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Hero.css'; // Custom CSS for additional styling and animations
import ThreeScene from './ThreeScene'; // Import the ThreeScene component

const Hero = () => {
  return (
    <section className="hero-section">
      <ThreeScene /> {/* Add the ThreeScene component here */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="hero-content"
      >
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Welcome to <span className="highlight">My Portfolio</span>
        </motion.h1>
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          I'm a <span className="highlight">Web Developer</span> passionate about creating beautiful and functional web experiences.
        </motion.p>
        <motion.div 
          className="hero-icons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaGithub size="2em" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaLinkedin size="2em" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaTwitter size="2em" />
          </a>
        </motion.div>
        <motion.a 
          href="#projects" 
          className="btn-primary"
          initial={{ scale: 0.9 }}
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
