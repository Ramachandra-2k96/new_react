import React from 'react';
import { Box, Container, Heading, Text, Flex, VStack, Image, Button, Stack, Icon, Divider, SimpleGrid } from '@chakra-ui/react';
import { FaLaptopCode, FaGraduationCap, FaCamera, FaPython, FaNodeJs, FaDatabase, FaGithub, FaShieldAlt } from 'react-icons/fa';
import { SiReact, SiDjango, SiJavascript, SiCss3, SiGit, SiHtml5, SiFlutter, SiPytorch } from 'react-icons/si';
import { motion } from 'framer-motion';
import './About.css';

import profileImage from '/00017-1143460065.png';

const skills = [
  { icon: SiReact, title: 'React' },
  { icon: SiJavascript, title: 'JavaScript' },
  { icon: SiHtml5, title: 'HTML5' },
  { icon: SiCss3, title: 'CSS3' },
  { icon: SiDjango, title: 'Django' },
  { icon: FaPython, title: 'Python' },
  { icon: FaNodeJs, title: 'Node.js' },
  { icon: FaDatabase, title: 'SQL Databases' },
  { icon: SiGit, title: 'Git' },
  { icon: FaGithub, title: 'GitHub' },
  { icon: SiPytorch, title: 'PyTorch' },
  { icon: SiPytorch, title: 'ML' },
  { icon: SiFlutter, title: 'Flutter' },
  { icon: FaShieldAlt, title: 'Cybersecurity' },
  { icon: FaPython, title: 'AI' },
];

const AboutMe = () => {
  return (
    <Box as="section" id="about" bg="black" color="white" minH="100vh" py={20} px={6}>
      <Container maxW="container.xl">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Heading
            as="h2"
            fontSize={['4xl', '5xl', '6xl']}
            textAlign="center"
            fontWeight="bold"
            mb={16}
            textTransform="uppercase"
            letterSpacing="wide"
            position="relative"
            _after={{
              content: '""',
              width: '120px',
              height: '4px',
              bg: 'red.500',
              position: 'absolute',
              bottom: '-8px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            About <Box as="span" color="red.500">Me</Box>
          </Heading>

          <Flex direction={['column', 'column', 'row']} align="center" justify="space-between">
            <motion.div
              initial={{ scale: 0.8, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              style={{ flex: 1, textAlign: 'center' }}
            >
              <Box position="relative" display="inline-block">
                <Image
                  boxSize={{ base: '300px', md: '400px' }}
                  src={profileImage}
                  alt="Ramachandra Udupa"
                  objectFit="contain"
                  mb={8}
                  shadow="2xl"
                  border="4px solid"
                  borderColor="red.500"
                  borderRadius="10px" // Rounded corners
                  transition="transform 0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05) rotate(2deg)',
                  }}
                />
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  width="100%"
                  height="100%"
                  borderRadius="10px"
                  border="4px solid"
                  borderColor="red.500"
                  pointerEvents="none"
                  clipPath="inset(0 0 0 0)" // Adjust as needed
                />
              </Box>
            </motion.div>

            <VStack
              flex={1}
              spacing={8}
              align="flex-start"
              pl={[0, 0, 12]}
              textAlign={['center', 'center', 'left']}
              mt={[8, 8, 0]}
            >
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <Text fontSize={['xl', '2xl', '3xl']} fontWeight="light" lineHeight="1.6">
                  Hi! I'm <Box as="span" fontWeight="bold" color="red.500">Ramachandra Udupa</Box>, a <Box as="span" fontWeight="bold" color="red.500">Web Developer</Box> dedicated to building powerful, scalable web applications. With a deep understanding of modern web technologies, I turn ideas into reality with precision and creativity.
                </Text>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <Button
                  as="a"
                  href="#contact"
                  size="lg"
                  colorScheme="red"
                  variant="outline"
                  borderWidth="2px"
                  borderColor="red.500"
                  _hover={{ bg: 'red.500', color: 'white' }}
                >
                  Contact Me
                </Button>
              </motion.div>
            </VStack>
          </Flex>

          <Divider my={16} borderColor="gray.500" />

          <Heading
            as="h3"
            fontSize={['3xl', '4xl']}
            textAlign="center"
            fontWeight="bold"
            mb={12}
            textTransform="uppercase"
            letterSpacing="wide"
          >
            My <Box as="span" color="red.500">Skills</Box>
          </Heading>

          <SimpleGrid columns={[2, 3, 4]} spacing={8}>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <VStack spacing={4}>
                  <Icon as={skill.icon} boxSize={12} color="red.500" />
                  <Heading as="h4" size="sm" fontWeight="bold" textTransform="uppercase">{skill.title}</Heading>
                </VStack>
              </motion.div>
            ))}
          </SimpleGrid>

          <Divider my={16} borderColor="gray.500" />

          <Stack
            direction={['column', 'row']}
            spacing={10}
            justify="space-around"
            textAlign="center"
          >
            {[
              { icon: FaGraduationCap, title: 'Education', text: 'B.E. in Artificial Intelligence' },
              { icon: FaCamera, title: 'Hobbies', text: 'Gaming, Hiking, Photography' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 + index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <VStack spacing={4}>
                  <Icon as={item.icon} boxSize={16} color="red.500" />
                  <Heading as="h3" size="lg" fontWeight="bold" textTransform="uppercase">{item.title}</Heading>
                  <Text fontSize="lg" color="gray.400">{item.text}</Text>
                </VStack>
              </motion.div>
            ))}
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutMe;
