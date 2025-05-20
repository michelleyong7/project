export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
}

const skillsData: SkillCategory[] = [
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

export default skillsData;