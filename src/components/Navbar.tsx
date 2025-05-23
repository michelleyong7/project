import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import ResumeModal from './ResumeModal';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Projects', to: 'projects' },
  { name: 'Experience', to: 'experience' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <span 
            className={`font-display text-xl font-bold ${
              scrolled ? 'text-dark-900' : 'text-white'
            }`}
          >
            MY
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`relative font-medium cursor-pointer transition-colors hover:text-primary-500 ${
                scrolled ? 'text-dark-800' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={() => setIsResumeModalOpen(true)}
            className="button-primary"
          >
            Resume
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={scrolled ? 'text-dark-900' : 'text-white'} size={24} />
          ) : (
            <Menu className={scrolled ? 'text-dark-900' : 'text-white'} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md">
          <div className="container-custom py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="block py-2 px-4 font-medium text-dark-800 hover:bg-gray-100 hover:text-primary-500 rounded"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 pb-4 px-4">
              <button 
                onClick={() => {
                  setIsResumeModalOpen(true);
                  setIsOpen(false);
                }}
                className="button-primary w-full flex justify-center"
              >
                Resume
              </button>
            </div>
          </div>
        </div>
      )}
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
        resumePath="/MYONGRES.pdf"
      />
    </nav>
  );
};

export default Navbar;