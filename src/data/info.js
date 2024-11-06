// Conforms to https://jsonresume.org/schema/

import education from './resume/education';
import work from './resume/work';
import projects from './resume/projects';
import publications from './resume/publications';
import awards from './resume/awards';
import volunteer from './resume/volunteering';
import { skills } from './resume/skills';

const details = {
  basics: {
    firstName: 'Antonios',
    lastName: 'Papaoikonomou',
    name: 'Antonios Papaoikonomou',
    label: 'Software Engineer and Machine Learning Engineer | MSc Applied Machine Learning @ Imperial',
    email: 'antonypap@hotmail.com',
    url: 'https://antonypap.github.io/',
    summary: '',
    location: {
      city: 'London',
      countryCode: 'UK',
    },
    profiles: [
      {
        network: 'LinkedIn',
        username: 'antonypap',
        url: 'https://www.linkedin.com/in/antonypap/',
      },
      {
        network: 'GitHub',
        username: 'antonypap',
        url: 'https://github.com/antonypap',
      },
      // {
      //   network: 'Twitter',
      //   username: 'antonypap',
      //   url: 'https://x.com/antonypap',
      // },
      {
        network: 'Google Scholar',
        username: 'aXE1Op0AAAAJ',
        url: 'https://scholar.google.com/citations?user=aXE1Op0AAAAJ',
      },
      // {
      //   network: 'ORCID',
      //   username: '0000-0002-4860-9101',
      //   url: 'https://orcid.org/my-orcid?orcid=0000-0002-4860-9101',
      // },
    ],
  },
  languages: [
    {
      language: 'English',
      fluency: 'Full Professional',
    },
    {
      language: 'Greek',
      fluency: 'Native',
    },
    {
      language: 'Italian',
      fluency: 'Limited Working',
    },
    {
      language: 'Polish',
      fluency: 'Elementary',
    },
  ],
  interests: [
    {
      name: 'Formula 1',
      keywords: [
        'Motorsport',
        'F1',
        'Cars',
      ],
    },
    {
      name: 'Sustainability',
      keywords: [
        'Green Tech',
        'Environment',
      ],
    },
    {
      name: 'Music',
      keywords: [
        'Guitar',
        'Music',
      ],
    },
  ],
  education,
  work,
  projects,
  publications,
  awards,
  volunteer,
  skills,
};

export default details;
