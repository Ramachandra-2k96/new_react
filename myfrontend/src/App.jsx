import { useState } from 'react'
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AboutMe from './components/About/About';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Hero/>
        <ChakraProvider>
        <AboutMe/>
        <Projects/>
        <Contact/>
        <Footer/>
        </ChakraProvider>
      </main>
    </div>
    </>
  )
}

export default App
