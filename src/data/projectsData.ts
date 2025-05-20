import { BarChart2, PieChart, LineChart, AreaChart } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tools: string[];
  image: string;
  icon: JSX.Element;
  color: string;
  githubUrl?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Attorney General Campaign Analysis",
    category: "Political Analytics",
    description: "Analyzed voter behavior patterns and campaign effectiveness across multiple districts, resulting in optimized resource allocation and a 25% increase in voter engagement.",
    tools: ["Python", "SQL", "Tableau", "NGP/VAN"],
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    icon: <PieChart className="h-5 w-5" />,
    color: "from-primary-500 to-primary-400",
    githubUrl: "https://github.com/michelleyong/ag-campaign-analysis"
  },
  {
    id: 2,
    title: "Instacart Market Basket Analysis",
    category: "E-commerce Analytics",
    description: "Conducted comprehensive analysis of customer purchasing patterns and product associations, identifying key opportunities for cross-selling and optimizing delivery routes.",
    tools: ["Python", "Pandas", "Scikit-learn", "Tableau"],
    image: "https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    icon: <LineChart className="h-5 w-5" />,
    color: "from-secondary-500 to-secondary-400",
    githubUrl: "https://github.com/michelleyong/instacart-analysis"
  },
  {
    id: 3,
    title: "SaaS Analytics Dashboard",
    category: "Business Intelligence",
    description: "Built interactive dashboard tracking key metrics for a SaaS platform, enabling data-driven decisions that led to a 30% improvement in customer retention.",
    tools: ["Power BI", "SQL", "Python", "Google Analytics"],
    image: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    icon: <BarChart2 className="h-5 w-5" />,
    color: "from-accent-500 to-accent-400",
    githubUrl: "https://github.com/michelleyong/saas-analytics"
  },
  {
    id: 4,
    title: "Fraud Detection System",
    category: "Financial Analytics",
    description: "Developed machine learning models to detect fraudulent transactions, reducing false positives by 65% and preventing potential losses of over $500K annually.",
    tools: ["Python", "TensorFlow", "SQL", "Tableau"],
    image: "https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    icon: <AreaChart className="h-5 w-5" />,
    color: "from-primary-500 to-primary-400",
    githubUrl: "https://github.com/michelleyong/fraud-detection"
  }
];

export default projectsData;