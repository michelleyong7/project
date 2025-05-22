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
    title: "Political Campaign Donation Analytics",
    category: "Marketing Analytics",
    description: "Analyzed public donation trends for a political campaign using SQL and Tableau. Built dashboards to uncover key donor demographics and contribution spikes over time.",
    tools: ["SQL", "Tableau", "Python"],
    image: "/nick.logo.png",
    icon: <PieChart className="h-5 w-5" />,
    color: "from-primary-500 to-primary-400",
    githubUrl: "https://github.com/michelleyong/ag-campaign-analysis"
  },
  {
    id: 2,
    title: "Instacart Consumer Purchase Pattern Analysis",
    category: "Business Intelligence",
    description: "Explored online grocery shopping behaviors through transaction data. Identified user segmentation and buying trends to inform targeted marketing strategies.",
    tools: ["Python", "Jupyter Notebook"],
    image: "/instacart photo.jpg",
    icon: <LineChart className="h-5 w-5" />,
    color: "from-secondary-500 to-secondary-400",
    githubUrl: "https://github.com/michelleyong/instacart-analysis"
  },
  {
    id: 3,
    title: "SaaS Subscription Trends & Revenue Dashboard",
    category: "Marketing Analytics",
    description: "I created this project to deepen my understanding of how SaaS businesses track performance and make data-informed decisions. Using mock data, I explored key metrics like revenue growth, churn, and customer lifetime value. My goal was to bring these numbers to life through a dashboard that tells a story—not just with data, but with clarity and purpose. This experience allowed me to practice end-to-end analysis, from writing SQL queries to visualizing insights with Streamlit, all while honing my ability to translate technical work into meaningful business understanding.",
    tools: ["Python", "SQLite", "SQL", "Streamlit", "Plotly", "Pandas"],
    image: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    icon: <BarChart2 className="h-5 w-5" />,
    color: "from-accent-500 to-accent-400",
    githubUrl: "https://github.com/michelleyong/saas-analytics"
  },
  {
    id: 4,
    title: "Transaction Fraud Detection Analysis",
    category: "Financial Analytics",
    description: "A passion-driven deep dive into fraud analytics implementing 7 rule-based detection strategies to identify suspicious transaction patterns. I analyzed 30,000+ transactions, created composite risk scoring, and produced visualizations to highlight high-risk users requiring investigation.",
    tools: ["Python", "SQL", "Pandas", "Matplotlib", "SQLite", "Jupyter Notebook"],
    image: "https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    icon: <AreaChart className="h-5 w-5" />,
    color: "from-primary-500 to-primary-400",
    githubUrl: "https://github.com/michelleyong7/Fraud-Detection-Analysis"
  }
];

export default projectsData; 