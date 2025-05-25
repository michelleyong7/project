import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Linkedin, Mail, ChevronDown } from 'lucide-react';
import BackgroundAnimation from './BackgroundAnimation';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 to-dark-900">
      <BackgroundAnimation />
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >            
            <div className="space-y-2 mb-6">
              <h1 className="text-white">Hi,</h1>
              <h1 className="text-white">I'm <span className="text-primary-300">Michelle Yong</span></h1>
              <h1 className="text-white">Data Analyst</h1>
            </div>
            
            <p className="text-gray-300 text-lg mb-8 md:pr-8">
              I've always been fascinated by the vast amount of information we generate in our daily lives — every interaction, transaction, and click contributing to a larger narrative. Recognizing how organizations harness this data to anticipate trends and drive strategic growth sparked my passion for data analysis. For me, data isn't just about numbers; it's about uncovering the real-world stories and actionable insights that lie beneath the surface.

              In my work, I strive to bridge the gap between complex datasets and clear, impactful storytelling. I approach data visualization not just as a means to display results, but as a way to make insights accessible and engaging for any audience. By combining analytical rigor with thoughtful design, I aim to create visual narratives that not only inform, but inspire action and drive meaningful decisions.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex justify-center items-center -translate-y-12"
          >
            <div className="relative w-80 h-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 blur-lg"></div>
              <div className="relative w-full h-full overflow-hidden border-4 border-white/20">
                <img 
                  src="/profile picture.jpg" 
                  alt="Profile Picture" 
                  className="w-full h-full object-contain"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex flex-col items-center cursor-pointer"
          >
            <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
            <ChevronDown className="text-gray-400 animate-bounce h-6 w-6" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;