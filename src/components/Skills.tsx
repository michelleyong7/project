import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Technical Skills',
    skills: [
      { name: 'SQL & Database Management', level: 95 },
      { name: 'Data Visualization (Tableau, Power BI)', level: 90 },
      { name: 'Python for Data Analysis', level: 85 },
      { name: 'R Programming', level: 80 },
      { name: 'Statistical Analysis', level: 90 },
      { name: 'Excel (Advanced)', level: 95 },
      { name: 'ETL Processes', level: 85 },
      { name: 'Machine Learning', level: 75 },
    ],
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Tableau', level: 95 },
      { name: 'Power BI', level: 90 },
      { name: 'Python (Pandas, NumPy, Scikit-learn)', level: 85 },
      { name: 'SQL Server / PostgreSQL / MySQL', level: 90 },
      { name: 'Google Analytics', level: 85 },
      { name: 'Git & Version Control', level: 80 },
      { name: 'Jupyter Notebooks', level: 90 },
      { name: 'Azure / AWS Data Services', level: 75 },
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'Data Storytelling', level: 95 },
      { name: 'Critical Thinking', level: 90 },
      { name: 'Problem Solving', level: 95 },
      { name: 'Communication', level: 90 },
      { name: 'Project Management', level: 85 },
      { name: 'Team Collaboration', level: 90 },
      { name: 'Attention to Detail', level: 95 },
      { name: 'Business Acumen', level: 85 },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section className="section-padding bg-gray-50 relative">
      <div 
        className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"
        aria-hidden="true"
      ></div>
      
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">My <span className="text-primary-500">Expertise</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With a comprehensive skill set spanning technical capabilities, specialized tools, 
            and essential soft skills, I deliver end-to-end data solutions that create real business value.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card h-full"
            >
              <h3 className="text-xl font-semibold mb-6 pb-3 border-b border-gray-200">
                {category.title}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-gray-800 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className={`skill-progress ${getSkillColor(skill.level)}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl border border-gray-200"
        >
          <h3 className="text-2xl font-semibold text-center mb-6">Additional Certifications & Training</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Google Data Analytics Professional Certificate',
              'Microsoft Certified: Data Analyst Associate',
              'IBM Data Science Professional Certificate',
              'Tableau Desktop Specialist',
              'AWS Certified Data Analytics - Specialty',
              'Python for Data Science and Machine Learning Bootcamp',
              'Advanced SQL for Data Analysis',
              'Statistical Modeling and Regression Analysis'
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-soft border border-gray-100 flex items-center"
              >
                <div className="w-3 h-3 rounded-full bg-primary-500 flex-shrink-0 mr-3"></div>
                <p className="text-sm text-gray-700 font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <div
        className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"
        aria-hidden="true"
      ></div>
    </section>
  );
};

const getSkillColor = (level: number): string => {
  if (level >= 90) return 'bg-gradient-to-r from-primary-500 to-primary-400';
  if (level >= 80) return 'bg-gradient-to-r from-secondary-500 to-secondary-400';
  if (level >= 70) return 'bg-gradient-to-r from-accent-500 to-accent-400';
  return 'bg-gradient-to-r from-gray-500 to-gray-400';
};

export default Skills;