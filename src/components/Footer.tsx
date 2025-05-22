import React from 'react';
import { Link } from 'react-scroll';
import { Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-white py-8">
      <div className="container-custom">
        <div className="flex flex-col space-y-8">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-semibold">Michelle Yong</h3>
              <p className="text-gray-400 mt-1">Data Analyst</p>
            </div>
            <div className="text-right">
              <h3 className="text-2xl font-semibold">Let's Connect</h3>
              <div className="flex space-x-4 mt-2">
                <a 
                  href="https://linkedin.com/in/michelley7" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="https://github.com/michelleyong7" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="mailto:michelleyong7@gmail.com" 
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6 text-gray-400">
            {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:text-primary-400 transition-colors cursor-pointer"
              >
                {item}
              </Link>
            ))}
          </div>
          
          <div className="text-center text-gray-500 text-sm border-t border-gray-800 pt-6">
            <p>© {currentYear} Michelle Yong. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;