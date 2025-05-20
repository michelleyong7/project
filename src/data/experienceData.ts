export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

const experienceData: Experience[] = [
  {
    id: 1,
    role: 'Data Analyst',
    company: 'Newman Partners',
    location: 'Seattle, WA',
    period: '06/2023 – 12/2024',
    description: 'At Newman Partners, I supported statewide Democratic campaigns by helping teams understand and act on their data. I built interactive Tableau dashboards and Excel tools to manage over $500K in campaign budgets, leading to smarter and more efficient spending. Using SQL, I investigated large donor and voter datasets and flagged dozens of suspicious entries, which helped the team maintain a 98% compliance rate. The firm and I also helped redirect over $2 million in outreach funding based on data trends, boosting donor engagement. One of my proudest moments was contributing to Nick Brown\'s Attorney General campaign, where I helped raise over $800K by identifying top-performing fundraising cities and building dashboards that supported real-time strategy shifts.',
    achievements: [],
  },
  {
    id: 2,
    role: 'Campaign Analyst',
    company: 'Congress (WA-09) - AS Campaign',
    location: 'Seattle, WA',
    period: '06/2022 – 06/2023',
    description: 'For the Adam Smith 09 Congressional District Campaign I managed data from NGP/VAN, to transform raw voter and outreach information into structured Excel Reports and live dashboards. These tools enabled quicker decision-making around canvassing, volunteer shifts and event planning. The curated weekly analysis of field data led to an 19% increase in outreach accuracy while engagement strategies boosted volunteer participation by 30%. This campaign analyst role demanded constant adaption hands on, while still needing clean data for campaign operations.',
    achievements: [],
  },
  {
    id: 3,
    role: 'Data Entry Clerk',
    company: 'Capital Asset Management Group',
    location: 'Culver City, CA',
    period: '06/2018 – 06/2023',
    description: 'Assisted financial advisors by consolidating and organizing portfolio performance data from multiple sources. Forecasting models created in Excel improved quarterly planning accuracy, while SQL scripts were used to clean and validate financial records with a 99% data integrity rate. The work directly supported internal reviews and client-facing materials, strengthening long-term relationships and trust through consistent and accurate reporting.',
    achievements: [],
  },
];

export default experienceData;