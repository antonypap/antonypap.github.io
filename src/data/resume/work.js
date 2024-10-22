/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */

const work = [
  {
    name: 'Kaedim',
    position: 'Machine Learning Engineer',
    url: 'https://www.kaedim3d.com/',
    startDate: '2023-09-14',
    endDate: '2024-05-24',
    summary: 'Keadim is a SaaS platform for generating production-ready, on-demand 3D assets from 2D images.',
    highlights: [
      'Led the refactoring of the backend structure, architecture, and task queueing system of the ML model server using FastAPI and Celery, increasing reliability and reducing inference latency',
      'Built end-to-end data workflows and deployed scalable state-of-the-art ML models',
      'Collaborated with cross-functional teams to deliver product-oriented, high-quality AI and ML solutions',
      'Architected cloud-based pipelines and monitoring systems on AWS, improving performance, scalability, and reliability',
    ],
  },
  {
    name: 'Hellenic Army General Staff',
    position: 'Software Engineer',
    url: 'https://army.gr/en/archiki-en/',
    startDate: '2022-09-21',
    endDate: '2021-11-18',
    summary: 'Research and Informatics Corps, involved in Internal Ops and Cyber-defence',
    highlights: [
      'Developed a search engine algorithm and interface for classified documents using Java, JavaScript and Python',
      'Implemented indexing techniques to optimise query performance in relational databases',
      'Explained complex technical challenges and solutions to non-experts, improving understanding and decision-making across teams',
    ],
  },
  {
    name: 'Vodafone Greece',
    position: 'Software Engineering Trainee/Intern',
    url: 'https://www.vodafone.gr/',
    startDate: '2019-03-17',
    endDate: '2019-09-30',
    summary: 'Part of the iOS My Vodafone App (GR) Optimization team',
    highlights: [
      'Utilised efficient Scrum/Agile development methodologies',
      'Contributed to the application refactoring project and developed new features, improving performance',
    ],
  },
];

export default work;
