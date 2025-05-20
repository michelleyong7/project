import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BarChart2, PieChart, LineChart, AreaChart } from 'lucide-react';

// Sample project data
const projectsData = [
  {
    id: 1,
    title: "Customer Segmentation & Retention Analysis",
    category: "Marketing Analytics",
    description: "Used clustering algorithms to segment 50,000+ customers and developed targeted retention strategies, resulting in a 24% decrease in churn rate and 18% increase in customer lifetime value.",
    tools: ["Python", "Scikit-learn", "Tableau", "SQL"],
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    icon: <PieChart className="h-5 w-5" />,
    color: "from-primary-500 to-primary-400",
  },
  {
    id: 2,
    title: "Sales Forecasting & Inventory Optimization",
    category: "Business Intelligence",
    description: "Built predictive models for sales forecasting across 200+ product categories, optimizing inventory levels and reducing stockouts by 35% while decreasing excess inventory costs by 28%.",
    tools: ["R", "Time Series Analysis", "Power BI", "Excel"],
    image: "https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    icon: <LineChart className="h-5 w-5" />,
    color: "from-secondary-500 to-secondary-400",
  },
  {
    id: 3,
    title: "Healthcare Operational Efficiency Dashboard",
    category: "Healthcare Analytics",
    description: "Designed interactive dashboard tracking 15+ KPIs across 5 departments, identifying bottlenecks and improving patient throughput by 32% while reducing operational costs by $2.1M annually.",
    tools: ["Tableau", "SQL", "Excel", "Alteryx"],
    image: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    icon: <BarChart2 className="h-5 w-5" />,
    color: "from-accent-500 to-accent-400",
  },
  {
    id: 4,
    title: "Digital Marketing Campaign Analysis",
    category: "Marketing Analytics",
    description: "Analyzed performance across multiple digital channels, optimizing ad spend allocation that increased ROAS by 42% and identified high-value customer segments for targeted engagement.",
    tools: ["Google Analytics", "Python", "Power BI", "SQL"],
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    icon: <AreaChart className="h-5 w-5" />,
    color: "from-primary-500 to-primary-400",
  },
  {
    id: 5,
    title: "Supply Chain Network Optimization",
    category: "Operations Research",
    description: "Created simulation models to optimize distribution network, resulting in 18% reduction in transportation costs and 23% improvement in on-time delivery performance.",
    tools: ["Python", "OR-Tools", "Tableau", "SQL"],
    image: "https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    icon: <BarChart2 className="h-5 w-5" />,
    color: "from-secondary-500 to-secondary-400",
  },
  {
    id: 6,
    title: "Financial Fraud Detection System",
    category: "Financial Analytics",
    description: "Developed machine learning models to detect fraudulent transactions with 94% accuracy, reducing false positives by 65% and preventing an estimated $3.2M in annual fraud losses.",
    tools: ["Python", "TensorFlow", "SQL", "Kibana"],
    image: "https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    icon: <LineChart className="h-5 w-5" />,
    color: "from-accent-500 to-accent-400",
  },
];

// Filter categories extracted from projects
const categories = ['All', ...Array.from(new Set(projectsData.map(project => project.category)))];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

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
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Explore a selection of my data analysis projects that demonstrate my expertise in
            transforming complex data into actionable business insights.
          </p>
          
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
        
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          />
        )}
      </div>
    </section>
  );
};

interface ProjectModalProps {
  project: typeof projectsData[0];
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
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
            <p className="text-gray-700">
              I approached this project by first understanding the core business challenges, then collecting and 
              cleaning the relevant data. After exploratory analysis, I identified key patterns and relationships
              that informed the development of our analytical models. The final deliverables included interactive 
              dashboards and comprehensive documentation.
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Results & Impact</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Improved decision-making efficiency by 45% through automated reporting</li>
              <li>Identified overlooked opportunities worth an estimated $1.2M in annual revenue</li>
              <li>Reduced manual analysis time by 25 hours per week across the analytics team</li>
              <li>Established standardized KPI tracking for ongoing performance monitoring</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Tools & Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map(tool => (
                <span key={tool} className="px-3 py-1.5 bg-gray-100 text-gray-800 text-sm font-medium rounded-lg">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex justify-end pt-4 border-t border-gray-100">
            <button 
              className="button-secondary mr-3"
              onClick={onClose}
            >
              Close
            </button>
            <a 
              href="#"
              className="button-primary"
              onClick={(e) => {
                e.preventDefault();
                alert("Project details download functionality would be implemented here");
              }}
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              View Full Case Study
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;