const skills = [
  {
    name: 'Python',
    level: 5,
    keywords: ['Languages', 'ML/Data'],
  },
  {
    name: 'JavaScript',
    level: 4,
    keywords: ['Languages', 'Backend'],
  },
  {
    name: 'TypeScript',
    level: 2,
    keywords: ['Languages', 'Frontend/Mobile'],
  },
  {
    name: 'Java',
    level: 3,
    keywords: ['Languages', 'Backend'],
  },
  {
    name: 'SQL',
    level: 4,
    keywords: ['Languages', 'Databases'],
  },
  {
    name: 'C++',
    level: 3,
    keywords: ['Languages'],
  },
  {
    name: 'Go',
    level: 3,
    keywords: ['Languages', 'Backend'],
  },
  {
    name: 'Bash',
    level: 4,
    keywords: ['Languages', 'Tools'],
  },
  {
    name: 'Bedrock',
    level: 4,
    keywords: ['AI/LLM', 'AWS', 'Cloud/MLOps'],
  },
  {
    name: 'vLLM',
    level: 4,
    keywords: ['AI/LLM', 'Cloud/MLOps'],
  },
  {
    name: 'RAG',
    level: 4,
    keywords: ['AI/LLM'],
  },
  {
    name: 'LangChain',
    level: 4,
    keywords: ['AI/LLM'],
  },
  {
    name: 'LangGraph',
    level: 3,
    keywords: ['AI/LLM'],
  },
  {
    name: 'MCP',
    level: 3,
    keywords: ['AI/LLM', 'Backend'],
  },
  {
    name: 'LLM Evaluation',
    level: 3,
    keywords: ['AI/LLM', 'ML/Data'],
  },
  {
    name: 'LLM Observability',
    level: 3,
    keywords: ['AI/LLM', 'Cloud/MLOps'],
  },
  {
    name: 'Embeddings',
    level: 4,
    keywords: ['AI/LLM', 'ML/Data'],
  },
  {
    name: 'Voice AI',
    level: 3,
    keywords: ['AI/LLM'],
  },
  {
    name: 'STT/TTS',
    level: 3,
    keywords: ['AI/LLM'],
  },
  {
    name: 'Hugging Face',
    level: 3,
    keywords: ['AI/LLM', 'ML/Data'],
  },
  {
    name: 'PyTorch',
    level: 3,
    keywords: ['ML/Data'],
  },
  {
    name: 'TensorFlow + Keras',
    level: 3,
    keywords: ['ML/Data'],
  },
  {
    name: 'Scikit-learn',
    level: 4,
    keywords: ['ML/Data'],
  },
  {
    name: 'Pandas',
    level: 4,
    keywords: ['ML/Data'],
  },
  {
    name: 'NumPy',
    level: 4,
    keywords: ['ML/Data'],
  },
  {
    name: 'OpenCV',
    level: 3,
    keywords: ['ML/Data'],
  },
  {
    name: 'Jupyter Notebooks',
    level: 4,
    keywords: ['ML/Data', 'Tools'],
  },
  {
    name: 'Matplotlib',
    level: 4,
    keywords: ['ML/Data'],
  },
  {
    name: 'Data Visualization',
    level: 3,
    keywords: ['ML/Data'],
  },
  {
    name: 'ETL',
    level: 3,
    keywords: ['ML/Data', 'Cloud/MLOps'],
  },
  {
    name: 'FastAPI',
    level: 4,
    keywords: ['Backend'],
  },
  {
    name: 'Celery',
    level: 3,
    keywords: ['Backend', 'Cloud/MLOps'],
  },
  {
    name: 'Redis',
    level: 3,
    keywords: ['Backend', 'Databases'],
  },
  {
    name: 'Node.js',
    level: 4,
    keywords: ['Backend'],
  },
  {
    name: 'Django',
    level: 3,
    keywords: ['Backend'],
  },
  {
    name: 'Flask',
    level: 3,
    keywords: ['Backend'],
  },
  {
    name: 'Docker',
    level: 4,
    keywords: ['Cloud/MLOps', 'Tools'],
  },
  {
    name: 'Kubernetes',
    level: 3,
    keywords: ['Cloud/MLOps'],
  },
  {
    name: 'Helm',
    level: 3,
    keywords: ['Cloud/MLOps'],
  },
  {
    name: 'Terraform',
    level: 3,
    keywords: ['Cloud/MLOps'],
  },
  {
    name: 'SageMaker',
    level: 3,
    keywords: ['AWS', 'Cloud/MLOps', 'ML/Data'],
  },
  {
    name: 'EKS',
    level: 3,
    keywords: ['AWS', 'Cloud/MLOps'],
  },
  {
    name: 'Lambda',
    level: 4,
    keywords: ['AWS', 'Backend', 'Cloud/MLOps'],
  },
  {
    name: 'CloudWatch',
    level: 3,
    keywords: ['AWS', 'Cloud/MLOps'],
  },
  {
    name: 'EC2',
    level: 3,
    keywords: ['AWS', 'Cloud/MLOps'],
  },
  {
    name: 'S3',
    level: 3,
    keywords: ['AWS', 'Cloud/MLOps', 'ML/Data'],
  },
  {
    name: 'DynamoDB',
    level: 3,
    keywords: ['AWS', 'Databases'],
  },
  {
    name: 'RDS',
    level: 2,
    keywords: ['AWS', 'Databases'],
  },
  {
    name: 'PostgreSQL',
    level: 4,
    keywords: ['Databases'],
  },
  {
    name: 'MySQL',
    level: 4,
    keywords: ['Databases'],
  },
  {
    name: 'MongoDB',
    level: 2,
    keywords: ['Databases'],
  },
  {
    name: 'Pinecone',
    level: 3,
    keywords: ['AI/LLM', 'Databases'],
  },
  {
    name: 'React',
    level: 2,
    keywords: ['Frontend/Mobile'],
  },
  {
    name: 'CSS/SCSS/TailwindCSS',
    level: 3,
    keywords: ['Frontend/Mobile'],
  },
  {
    name: 'Git',
    level: 4,
    keywords: ['Tools'],
  },
  {
    name: 'Linux',
    level: 4,
    keywords: ['Tools', 'Cloud/MLOps'],
  },
  {
    name: 'CI/CD',
    level: 3,
    keywords: ['Tools', 'Cloud/MLOps'],
  },
].map((skill) => ({ ...skill, keywords: skill.keywords.sort() }));

const categoryOrder = [
  'AI/LLM',
  'ML/Data',
  'Backend',
  'Cloud/MLOps',
  'AWS',
  'Databases',
  'Languages',
  'Frontend/Mobile',
  'Tools',
];

const colors = [
  '#6a7ab1', // Muted blue
  '#5cb88d', // Sage green
  '#495057', // Charcoal grey
  '#4a90e2', // Light sky blue
  '#e57373', // Soft coral
  '#b482a4', // Dusty rose
  '#6573d4', // Soft indigo
  '#da6d6d', // Warm red
  '#4f9de6', // Ocean blue
];

const skillCategories = new Set(skills.flatMap(({ keywords }) => keywords));

const categories = categoryOrder
  .filter((keywords) => skillCategories.has(keywords))
  .map((keywords, index) => ({
    name: keywords,
    color: colors[index % colors.length],
  }));

export { categories, skills };
