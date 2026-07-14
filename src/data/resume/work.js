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
    name: 'E.ON Next',
    position: 'AI Engineer',
    url: 'https://www.eonnext.com/',
    startDate: '2024-11-18',
    endDate: undefined,
    summary: 'E.ON Next is a UK energy supplier using technology and AI to improve customer experience and support the energy transition.',
    highlights: [
      'Architect and operate the central GenAI platform enabling multiple product squads to deploy LLM and agent systems in production',
      'Built centralized LLM serving using vLLM on Kubernetes, AWS Bedrock integration, and SLM fine-tuning on SageMaker',
      'Engineered ultra-low-latency voice agents for customer self-service journeys at 5M+ user scale (STT → LLM → TTS)',
      'Developed agentic RAG applications and MCP servers for internal and customer-facing tooling',
      'Implemented evaluation, tracing, and observability for LLM/agent interactions in production',
      'Contribute to AI best practices across the wider E.ON Group',
    ],
  },
  {
    name: 'Kaedim',
    position: 'Machine Learning Engineer',
    url: 'https://www.kaedim3d.com/',
    startDate: '2023-09-14',
    endDate: '2024-05-24',
    summary: 'Kaedim is a SaaS platform for generating production-ready, on-demand 3D assets from 2D images.',
    highlights: [
      'Re-architected ML model serving stack (FastAPI, Celery), redesigning task orchestration and backend structure; achieved 3× inference performance improvement',
      'Optimised text and image latent space encodings and search functionality using vector databases',
      'Built end-to-end data, training, and deployment workflows for SOTA ML models in production',
      'Designed AWS-based ML pipelines and monitoring for scalability and observability',
    ],
  },
  {
    name: 'Hellenic Army General Staff',
    position: 'Software Engineer',
    url: 'https://army.gr/en/',
    startDate: '2021-11-01',
    endDate: '2022-09-30',
    summary: 'Research and Informatics Corps, developing software for internal operations and cyber-defence under NATO-grade security standards (CWIX).',
    highlights: [
      'Developed a search engine algorithm and interface for classified documents using Java, JavaScript and Python',
      'Implemented indexing techniques to optimise query performance in relational databases',
      'Explained complex technical challenges and solutions to non-experts and stakeholders',
    ],
  },
  {
    name: 'Vodafone Greece',
    position: 'Software Engineer Trainee/Intern',
    url: 'https://www.vodafone.gr/',
    startDate: '2019-03-17',
    endDate: '2019-09-30',
    summary: 'Part of the iOS My Vodafone App (GR) Optimization team.',
    highlights: [
      'Utilised efficient Scrum/Agile development methodologies',
      'Contributed to the application refactoring project and developed new features, helping increase the App Store rating by 73% from 2.6 to 4.5 in just over a month',
    ],
  },
];

export default work;
