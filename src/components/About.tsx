import React from 'react';
import { motion } from 'framer-motion';
import { Database, BarChart, TrendingUp, Eye, Code, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="section-padding bg-white relative">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <motion.div 
            className="lg:w-2/5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-heading text-dark-900">
              About <span className="text-primary-500">Me</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              My journey into data began on the ground — digging through political datasets and field reports 
              while organizing outreach campaigns. That hands-on experience sparked a curiosity that's only grown: 
              from analyzing voter patterns to now translating complex data into clear, actionable visuals that 
              inform strategy and decision-making.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              At Newman Partners, I designed dynamic Tableau dashboards and advanced Excel trackers that managed 
              over $500K in campaign budgets, improving efficiency by 20%. I leveraged SQL to identify fraud and 
              provide insights that realigned over $1M in outreach spending.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Today, I use tools like Python, SQL, Tableau, Power BI, and Google Data Studio to create clean, 
              meaningful visualizations and structured datasets that drive results.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {[
                'Python', 'SQL', 'Tableau', 'Power BI', 'Excel', 'Google Data Studio', 
                'R', 'NGP/VAN', 'Data Visualization', 'Data Cleaning', 'Financial Forecasting'
              ].map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <AboutCard
              icon={<Database className="h-6 w-6 text-primary-500" />}
              title="Data Management"
              description="Expert in cleaning, transforming, and structuring complex political and campaign datasets. Proficient with ETL processes and data warehousing."
            />
            
            <AboutCard
              icon={<BarChart className="h-6 w-6 text-secondary-500" />}
              title="Data Visualization"
              description="Creating impactful visual representations using Tableau, Power BI, and Google Data Studio to communicate insights effectively to stakeholders."
            />
            
            <AboutCard
              icon={<TrendingUp className="h-6 w-6 text-accent-500" />}
              title="Financial Analysis"
              description="Experience in managing and analyzing campaign budgets, identifying cost-saving opportunities, and optimizing resource allocation."
            />
            
            <AboutCard
              icon={<Code className="h-6 w-6 text-primary-500" />}
              title="Technical Skills"
              description="Proficient in Python, SQL, and R for data manipulation, analysis, and automation. Experience with various data analysis libraries and frameworks."
            />
            
            <AboutCard
              icon={<Eye className="h-6 w-6 text-secondary-500" />}
              title="Strategic Insights"
              description="Transforming complex data findings into actionable insights that drive campaign strategy and decision-making."
            />
            
            <AboutCard
              icon={<Users className="h-6 w-6 text-accent-500" />}
              title="Stakeholder Communication"
              description="Effectively presenting technical findings to campaign managers and non-technical stakeholders, turning data stories into strategic decisions."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface AboutCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ icon, title, description }) => {
  return (
    <div className="card hover:-translate-y-1 h-full">
      <div className="rounded-lg p-3 inline-block mb-4 bg-gray-100">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default About;