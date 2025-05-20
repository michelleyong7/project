import React from 'react';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <Element name="home">
        <Hero />
      </Element>
      
      <Element name="about">
        <About />
      </Element>
      
      <Element name="projects">
        <Projects />
      </Element>
      
      <Element name="experience">
        <Experience />
      </Element>
      
      <Element name="contact">
        <Contact />
      </Element>
      
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;