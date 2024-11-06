const skills = [
  {
    name: 'Javascript',
    level: 4,
    keywords: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    name: 'Node.JS',
    level: 4,
    keywords: ['Web Development', 'Javascript'],
  },
  {
    name: 'React',
    level: 2,
    keywords: ['Web Development', 'Javascript'],
  },
  {
    name: 'Bash',
    level: 4,
    keywords: ['Tools', 'Languages', 'DevOps/MLOps'],
  },
  {
    name: 'Swift',
    level: 2,
    keywords: ['Languages'],
  },
  {
    name: 'Go',
    level: 3,
    keywords: ['Web Development', 'Languages'],
  },
  {
    name: 'Amazon Web Services (AWS)',
    level: 3,
    keywords: ['Web Development', 'Tools', 'Cloud'],
  },
  {
    name: 'Heroku',
    level: 2,
    keywords: ['Web Development', 'Tools'],
  },
  {
    name: 'MongoDB',
    level: 2,
    keywords: ['Web Development', 'Databases'],
  },
  {
    name: 'SQL',
    level: 4,
    keywords: ['Databases', 'Languages'],
  },
  {
    name: 'NoSQL',
    level: 3,
    keywords: ['Databases', 'Languages'],
  },
  {
    name: 'MySQL',
    level: 4,
    keywords: ['Web Development', 'Databases', 'Languages'],
  },
  {
    name: 'Redis',
    level: 2,
    keywords: ['Web Development', 'Databases'],
  },
  {
    name: 'Data Mining',
    level: 3,
    keywords: ['ML Engineering', 'Data Science'],
  },
  {
    name: 'Flask',
    level: 3,
    keywords: ['Web Development', 'Python'],
  },
  {
    name: 'Django',
    level: 3,
    keywords: ['Web Development', 'Python'],
  },
  {
    name: 'Celery',
    level: 3,
    keywords: ['Web Development', 'Python'],
  },
  {
    name: 'AirFlow',
    level: 2,
    keywords: ['Data Engineering', 'Python'],
  },
  {
    name: 'FastAPI',
    level: 4,
    keywords: ['Web Development', 'Python'],
  },
  {
    name: 'Git',
    level: 4,
    keywords: ['Tools', 'DevOps/MLOps'],
  },
  {
    name: 'Kubernetes',
    level: 1,
    keywords: ['Tools', 'Data Engineering', 'Cloud', 'DevOps/MLOps'],
  },
  {
    name: 'Azure',
    level: 2,
    keywords: ['Tools', 'Web Development', 'Cloud'],
  },
  {
    name: 'Docker',
    level: 3,
    keywords: ['Tools', 'Data Engineering', 'DevOps/MLOps'],
  },
  {
    name: 'Pinecone',
    level: 3,
    keywords: ['ML Engineering', 'Data Engineering', 'Cloud', 'Databases'],
  },
  {
    name: 'Terraform',
    level: 1,
    keywords: ['Tools', 'Data Engineering', 'Cloud', 'DevOps/MLOps'],
  },
  {
    name: 'AWS Lambda',
    level: 3,
    keywords: ['Tools', 'Web Development', 'Cloud'],
  },
  {
    name: 'Java',
    level: 3,
    keywords: ['Web Development', 'Languages'],
  },
  {
    name: 'Python',
    level: 5,
    keywords: ['Languages', 'Python', 'ML Engineering'],
  },
  {
    name: 'Numpy',
    level: 4,
    keywords: ['Data Science', 'Data Engineering', 'Python', 'ML Engineering'],
  },
  {
    name: 'TensorFlow + Keras',
    level: 3,
    keywords: ['ML Engineering', 'Python'],
  },
  {
    name: 'PyTorch',
    level: 4,
    keywords: ['ML Engineering', 'Python'],
  },
  {
    name: 'Jupyter',
    level: 4,
    keywords: ['Data Science', 'Python'],
  },
  {
    name: 'Typescript',
    level: 1,
    keywords: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    name: 'HTML',
    level: 3,
    keywords: ['Web Development', 'Languages'],
  },
  {
    name: 'CSS/SCSS/TailwindCSS',
    level: 3,
    keywords: ['Web Development', 'Languages'],
  },
  {
    name: 'C++',
    level: 3,
    keywords: ['Languages'],
  },
  {
    name: 'C',
    level: 2,
    keywords: ['Languages'],
  },
  {
    name: 'MATLAB',
    level: 2,
    keywords: ['Languages'],
  },
  {
    name: 'Data Visualization',
    level: 4,
    keywords: ['Data Science'],
  },
  {
    name: 'Pandas',
    level: 5,
    keywords: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    name: 'Matplotlib',
    level: 4,
    keywords: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    name: 'Scikit-Learn',
    level: 4,
    keywords: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    name: 'Databricks',
    level: 1,
    keywords: ['Data Engineering', 'ML Engineering', 'Cloud', 'DevOps/MLOps', 'Databases'],
  },

].map((skill) => ({ ...skill, keywords: skill.keywords.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6a7ab1', // Muted blue
  '#4a90e2', // Light sky blue
  '#495057', // Charcoal grey
  '#6573d4', // Soft indigo
  '#e57373', // Soft coral
  '#b482a4', // Dusty rose
  '#4f9de6', // Ocean blue
  '#b3423f', // Deep red
  '#da6d6d', // Warm red
  '#8a8fff', // Lavender blue
  '#5cb88d', // Sage green
];

const categories = [...new Set(skills.flatMap(({ keywords }) => keywords))]
  .sort()
  .map((keywords, index) => ({
    name: keywords,
    color: colors[index % colors.length],
  }));

export { categories, skills };
