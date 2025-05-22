import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BarChart2, PieChart, LineChart, AreaChart, PlayCircle } from 'lucide-react';
import projectsData, { Project } from '../data/projectsData.tsx';
import VideoModal from './VideoModal';

// Filter categories extracted from projects
const categories = ['All', ...Array.from(new Set(projectsData.map(project => project.category)))];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [videoModalSrc, setVideoModalSrc] = useState('');

  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  const openVideoModal = (videoSrc: string) => {
    setVideoModalSrc(videoSrc);
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
    setVideoModalSrc('');
  };

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Featured <span className="text-primary-500">Projects</span></h2>
          
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>
        
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div 
                className="card h-full flex flex-col overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 flex items-center">
                    <span className={`flex items-center gap-1.5 px-3 py-1 bg-white rounded-full text-xs font-medium`}>
                      {project.icon}
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map(tool => (
                      <span key={tool} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className={`bg-gradient-to-r ${project.color} h-1 w-full rounded-full`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {selectedProject && (
          <ProjectModal
            project={projectsData.find(p => p.id === selectedProject)!}
            onClose={() => setSelectedProject(null)}
            onOpenVideoModal={openVideoModal}
          />
        )}

        {showVideoModal && (
          <VideoModal 
            videoSrc={videoModalSrc}
            onClose={closeVideoModal}
          />
        )}
      </div>
    </section>
  );
};

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  onOpenVideoModal: (videoSrc: string) => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenVideoModal }) => {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 sm:h-80">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover rounded-t-xl" 
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white text-dark-900 p-2 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div className="absolute bottom-4 left-4">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r ${project.color} text-white rounded-full text-sm font-medium`}>
              {project.icon}
              {project.category}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Project Overview</h4>
            <p className="text-gray-700">{project.description}</p>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Methodology</h4>
            {project.id === 1 ? (
              <p className="text-gray-700">
                I collected and cleaned the publicly available campaign donation data using SQL. Grouped donors by demographic features and sizes. Using tableau was perfect to visualize trends such as donation frequencies, high-value donors, and surges that aligned with campaign events for the Attorney General.
              </p>
            ) : project.id === 2 ? (
              <p className="text-gray-700">
                In this project, I analyzed transactional grocery order data using Python and Pandas. Grouped the data by user, product and time intervals while also calculating reorder rates, peak order days, and most frequently bought items. My visualization trends in this project were mostly done using Seaborn and Matplotlib.
              </p>
            ) : project.id === 3 ? (
              <p className="text-gray-700">
                I designed a SQLite database schema with four key tables (Plans, Marketing Campaigns, Customers, and Subscriptions) to model the SaaS business data structure. Using Python, I created scripts to generate realistic sample data spanning two years, including different subscription plans, marketing campaigns, and customer lifecycle events. I then developed a Streamlit dashboard application that calculates key metrics including MRR trends, MRR movements (new, expansion, contraction, churned), and connects marketing campaign performance to customer acquisition metrics.
              </p>
            ) : project.id === 4 ? (
              <p className="text-gray-700">
                I implemented a comprehensive rule-based fraud detection system using Python and SQL for a dataset of over 30,000 transactions. I created 7 different fraud detection rules based on behavioral patterns like transaction frequency, unusual timing (2-4AM transactions), refund behavior, device sharing across users, and transaction amount spikes. Each rule identified specific suspicious patterns and contributed to a composite risk score that ultimately flagged high-priority users for investigation.
              </p>
            ) : (
              <p className="text-gray-700">
                I approached this project by first understanding the core business challenges, then collecting and 
                cleaning the relevant data. After exploratory analysis, I identified key patterns and relationships
                that informed the development of our analytical models. The final deliverables included interactive 
                dashboards and comprehensive documentation.
              </p>
            )}
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Results & Impact</h4>
            {project.id === 1 ? (
              <p className="text-gray-700">
                Results of the campaign were that AG Nick Brown was able to deliever a victory. The project enabled identification of key donation districts and cities along with their behaviors. It also helped draw correlations between campaign milestones and increased donor activity, useful for future campaign planning for other politicians and fundraising strategy.
              </p>
            ) : project.id === 2 ? (
              <p className="text-gray-700">
                Results of this project were being able to undercover consumer shopping patterns such as weekend purchase spikes and high frequency product categories. The insights that were discovered could support targeted marketing and inventory planning for online grocery platforms.
              </p>
            ) : project.id === 3 ? (
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Created a comprehensive analytics dashboard with three main sections: Key Metrics Overview, Subscription Fluctuations, and Marketing Impact Analysis</li>
                <li>Implemented interactive visualization of MRR trends and MRR movements over time (new, expansion, contraction, churned)</li>
                <li>Developed tracking for subscription lifecycle events including new subscriptions, cancellations, upgrades, and downgrades</li>
                <li>Built marketing campaign performance metrics to measure customer acquisition, initial MRR, and customer acquisition cost (CAC)</li>
                <li>Included global date range filtering capabilities to analyze metrics across different time periods</li>
              </ul>
            ) : project.id === 4 ? (
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Successfully identified high-frequency transaction users ({'>'}5 transactions in 1 hour)</li>
                <li>Detected unusual transaction patterns during 2-4AM potentially indicating bot activity</li>
                <li>Flagged users with suspicious refund behavior ({'>'}3 refunds in a calendar month)</li>
                <li>Identified shared devices being used by 5+ different users</li>
                <li>Detected transaction amount spikes (3x above user&apos;s average)</li>
                <li>Created clear visualizations showing transaction distribution patterns and risk scores</li>
                <li>Developed a composite risk scoring system to prioritize highest-risk users</li>
              </ul>
            ) : (
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Improved decision-making efficiency by 45% through automated reporting</li>
                <li>Identified overlooked opportunities worth an estimated $1.2M in annual revenue</li>
                <li>Reduced manual analysis time by 25 hours per week across the analytics team</li>
                <li>Established standardized KPI tracking for ongoing performance monitoring</li>
              </ul>
            )}
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Tools & Technologies</h4>
            {project.id === 3 || project.id === 4 ? (
              <div className="flex flex-wrap gap-2">
                {project.tools.map(tool => (
                  <span key={tool} className="px-3 py-1.5 bg-gray-100 text-gray-800 text-sm font-medium rounded-lg">
                    {tool}
                  </span>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {project.tools.map(tool => (
                  <span key={tool} className="px-3 py-1.5 bg-gray-100 text-gray-800 text-sm font-medium rounded-lg">
                    {tool}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          <div className="flex justify-end pt-4 border-t border-gray-100">
            <button 
              className="button-secondary mr-3"
              onClick={onClose}
            >
              Close
            </button>

            {/* Tableau Link for Project 1 */}
            {project.id === 1 && (
              <a 
                href="https://public.tableau.com/app/profile/michelle.yong2814/viz/NBAGPublicContributions/AGcampaigndashboard" 
                className="button-primary mr-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Tableau
              </a>
            )}

            {/* Dashboard Video Button for Project 3 */}
            {project.id === 3 && (
              <button 
                onClick={() => onOpenVideoModal('/streamlitappvideo.webm')}
                className="button-primary mr-3"
              >
                <PlayCircle className="h-5 w-5 mr-2" />
                Dashboard Video
              </button>
            )}

            {/* View Full Case Study Link (for projects with a githubUrl) */}
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                className="button-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                View Full Case Study
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;