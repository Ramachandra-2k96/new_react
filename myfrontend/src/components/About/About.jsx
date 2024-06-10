import React from 'react';
import { Box, Container, Heading, Text, Flex, VStack, Image, Button } from '@chakra-ui/react';
import { FaLaptopCode, FaGraduationCap, FaCamera, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './About.css';

const AboutMe = () => {
  return (
    <Box as="section" id="about" className="about-me-section bg-black text-white min-h-screen flex flex-col justify-center items-center">
      <Container maxW="container.lg" px={6} py={10} textAlign="center">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Heading as="h2" size="2xl" className="about-me-title mb-4">
            About <span className="highlight">Me</span>
          </Heading>
          
          <Flex direction={['column', 'column', 'row']} align="center" mt={12}>
            <VStack flex={{ base: '1', md: '1', lg: '2' }} spacing={6}>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <Image
                  borderRadius="full"
                  boxSize={{ base: '200px', md: '280px' }}
                  src="https://th.bing.com/th/id/OIP.0FE9seBpUhaBfCwmlJ7IQAHaKQ?w=117&h=180&c=7&r=0&o=5&pid=1.7"
                  alt="Your Name"
                  mb={6}
                  boxShadow="base"
                />
                
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <Text fontSize={{ base: 'lg', md: 'xl' }} className="about-me-subtitle">
                  Hello! Im Ramachandra Udupa, a passionate <span className="highlight">Web Developer</span> with expertise in creating stunning web applications.
                </Text>
              </motion.div>
              <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1.1 }}
            transition={{ delay: 2, duration: 0.5 }}
            mt={12}
          >
            <Button as="a" href="#contact" colorScheme="orange" size="lg" className='py-2'>
              Get in Touch
            </Button>
          </motion.div>
            </VStack>
            
            <VStack flex={{ base: '1', md: '1', lg: '3' }} spacing={6}>
              <motion.div 
                className="about-me-detail" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                <FaLaptopCode size="3em" className="text-white mb-4 mx-auto" />
                <Heading as="h3" size="lg">Skills</Heading>
                <Text>React, JavaScript, CSS, Django</Text>
              </motion.div>

              <motion.div 
                className="about-me-detail" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                <FaGraduationCap size="3em" className="text-white mb-4 mx-auto" />
                <Heading as="h3" size="lg">Education</Heading>
                <Text>B.E. in Artificial Intelligence</Text>
              </motion.div>

              <motion.div 
                className="about-me-detail" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                <FaCamera size="3em" className="text-white mb-4 mx-auto" />
                <Heading as="h3" size="lg">Hobbies</Heading>
                <Text>Gaming, Hiking, Photography</Text>
              </motion.div>
            </VStack>
          </Flex>

          
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutMe;