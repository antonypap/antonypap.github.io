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
      '',
    ],
  },
];

export default work;
