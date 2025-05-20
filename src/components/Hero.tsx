import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { BarChart2, TrendingUp, Database, ChevronDown, Linkedin, Mail } from 'lucide-react';
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
              I've always been drawn to the stories data can tell — how patterns emerge, behaviors shift, 
              and visuals bring everything to life. What started as a deep dive into political data became 
              a passion for uncovering real-world insights happening every second, across industries and platforms.
            </p>
            
            {/* <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start mb-8">
              <a
                href="mailto:michelleyong7@gmail.com"
                className="button-primary"
              >
                <Mail className="w-5 h-5 mr-2" />
                Let's Connect
              </a>
              <a
                href="https://linkedin.com/in/michelle-yong"
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </div> */}

            <div className="grid grid-cols-3 gap-4">
              <DataMetricCard 
                icon={<BarChart2 className="h-6 w-6 text-primary-400" />} 
                metric="20%" 
                label="Efficiency Improvement" 
                color="from-primary-500/20 to-primary-400/5"
              />
              <DataMetricCard 
                icon={<TrendingUp className="h-6 w-6 text-secondary-400" />} 
                metric="$500K+" 
                label="Budget Managed" 
                color="from-secondary-500/20 to-secondary-400/5"
              />
              <DataMetricCard 
                icon={<Database className="h-6 w-6 text-accent-400" />} 
                metric="$1M+" 
                label="Spending Optimized" 
                color="from-accent-500/20 to-accent-400/5"
              />
            </div>
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

interface DataMetricCardProps {
  icon: React.ReactNode;
  metric: string;
  label: string;
  color: string;
}

const DataMetricCard: React.FC<DataMetricCardProps> = ({ icon, metric, label, color }) => {
  return (
    <div className={`bg-gradient-to-br ${color} p-4 rounded-xl`}>
      <div className="flex items-center mb-2">
        {icon}
        <div className="ml-2 text-xl font-bold text-white">{metric}</div>
      </div>
      <div className="text-sm text-gray-300">{label}</div>
    </div>
  );
};

export default Hero;