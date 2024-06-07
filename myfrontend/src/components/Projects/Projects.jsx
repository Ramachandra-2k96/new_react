import React, { useEffect, useState }  from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';
import './Projects.css'; // Custom CSS for additional styling
import axios from 'axios';



const Projects = () => {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    // Function to fetch data from the API
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}portfolio/`); // Update the URL based on your actual API endpoint
        console.log(response.data);
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching the projects:', error);
      }
    };

    fetchProjects();
  }, []);
  return (
    <section id='projects' className="projects-section bg-black text-white min-h-screen py-12">
      <div className="container mx-auto px-6 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          My Projects
        </motion.h1>
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={'auto'}

          autoplay={{ delay: 3000 }}
          className="projects-swiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <motion.div 
                className="project-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.3, duration: 0.5 }}
              >
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-details">
                    <h2 className="text-2xl font-bold">{project.title}</h2>
                    <p className='text-lg'>{project.description}</p>
                    <p className='text-lg font-bold'>Technology: <span className='font-normal text-red-400'>{project.technology} </span></p>
                    <a href={project.link} target="_blank" className="btn btn-primary">View Project</a>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
