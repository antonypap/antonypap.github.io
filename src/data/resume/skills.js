const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Bash',
    competency: 4,
    category: ['Tools', 'Languages', 'DevOps/MLOps'],
  },
  {
    title: 'Swift',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Go',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Amazon Web Services (AWS)',
    competency: 3,
    category: ['Web Development', 'Tools', 'Cloud'],
  },
  {
    title: 'Heroku',
    competency: 2,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MongoDB',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'SQL',
    competency: 4,
    category: ['Databases', 'Languages'],
  },
  {
    title: 'NoSQL',
    competency: 3,
    category: ['Databases', 'Languages'],
  },
  {
    title: 'MySQL',
    competency: 4,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Redis',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Data Mining',
    competency: 3,
    category: ['ML Engineering', 'Data Science'],
  },
  {
    title: 'Flask',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Django',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Celery',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'AirFlow',
    competency: 2,
    category: ['Data Engineering', 'Python'],
  },
  {
    title: 'FastAPI',
    competency: 4,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools', 'DevOps/MLOps'],
  },
  {
    title: 'Kubernetes',
    competency: 1,
    category: ['Tools', 'Data Engineering', 'Cloud', 'DevOps/MLOps'],
  },
  {
    title: 'Azure',
    competency: 2,
    category: ['Tools', 'Web Development', 'Cloud'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Tools', 'Data Engineering', 'DevOps/MLOps'],
  },
  {
    title: 'Pinecone',
    competency: 3,
    category: ['ML Engineering', 'Data Engineering', 'Cloud', 'Databases'],
  },
  {
    title: 'Terraform',
    competency: 1,
    category: ['Tools', 'Data Engineering', 'Cloud', 'DevOps/MLOps'],
  },
  {
    title: 'AWS Lambda',
    competency: 3,
    category: ['Tools', 'Web Development', 'Cloud'],
  },
  {
    title: 'Java',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python', 'ML Engineering'],
  },
  {
    title: 'Numpy',
    competency: 4,
    category: ['Data Science', 'Data Engineering', 'Python', 'ML Engineering'],
  },
  {
    title: 'TensorFlow + Keras',
    competency: 3,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'PyTorch',
    competency: 4,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Typescript',
    competency: 1,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'CSS/SCSS/TailwindCSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'C++',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'C',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'MATLAB',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Data Visualization',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 4,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Databricks',
    competency: 1,
    category: ['Data Engineering', 'ML Engineering', 'Cloud', 'DevOps/MLOps', 'Databases'],
  },

].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
