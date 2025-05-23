import React from 'react';
import { motion } from 'framer-motion';
import { Building, Calendar, ExternalLink, MapPin } from 'lucide-react';
import experienceData, { type Experience as ExperienceType } from '../data/experienceData.ts';

const Experience: React.FC = () => {
  return (
    <section className="section-padding bg-gray-50 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Professional <span className="text-primary-500">Experience</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My career journey has equipped me with a diverse range of experiences across industries,
            allowing me to tackle complex data challenges and deliver impactful results.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gray-200 transform -translate-x-1/2 hidden md:block"></div>
          
          {/* Experience items */}
          <div className="space-y-12 relative">
            {experienceData.map((experience: ExperienceType, index: number) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Date indicator for desktop */}
                <div className="hidden md:flex absolute top-0 left-6 transform -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-primary-500 z-10">
                  <span className="text-xs font-bold text-primary-600">
                    {experience.period.split(' - ')[0].slice(-2)}
                  </span>
                </div>
                
                <div className="md:ml-16">
                  <div className="card hover:shadow-xl">
                    <div className="flex items-center mb-4 text-primary-500">
                      <Building className="h-5 w-5 mr-2" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        {experience.role}
                      </h3>
                    </div>
                    
                    <div className="flex flex-wrap text-gray-600 text-sm mb-4">
                      <div className="flex items-center mr-4 mb-2">
                        <Building className="h-4 w-4 mr-1 text-gray-500" />
                        <span>{experience.company}</span>
                      </div>
                      <div className="flex items-center mr-4 mb-2">
                        <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                        <span>{experience.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">
                      {experience.description}
                    </p>
                    
                    {/* <h4 className="font-semibold text-gray-800 mb-2">Key Achievements:</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                      {experience.achievements.map((achievement: string, i: number) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                    
                    <a
                      href="#"
                      className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        alert(`Details about ${experience.company} role would be shown here`);
                      }}
                    >
                      <span>View Details</span>
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a 
            href="/MYONGRES.pdf"
            className="button-primary"
            download="MYONGRES.pdf"
          >
            Download Full Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;