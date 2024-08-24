import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}portfolio/`);
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching the projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id='projects' className="projects-section">
      <motion.div
        className="projects-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.7 }}
          >
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-details">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <p className="project-technology">Technology: {project.technology}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary">
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
