// Footer.js

import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="bg-gray-900 text-white py-8"
    >
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex mb-4">
          <a
            href="https://github.com/Ramachandra-2k96"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 transition duration-300 hover:text-gray-400"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://x.com/Ramachandr1055"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 transition duration-300 hover:text-gray-400"
          >
            <FaTwitter className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/ramachandra-udupa/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:text-gray-400"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
        <p className="text-2xs text-gray-400 mb-4">
          &copy; {new Date().getFullYear()} Ramachandra. All rights reserved.
        </p>
        <p className="text-xl text-gray-400">
          Created by <span className='text-red-500 text-xl'>Ramachandra</span>  <span className='text-gray-400 text-xl'>Udupa.</span>  
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
