// Conforms to https://jsonresume.org/schema/

import education from './resume/education';
import work from './resume/work';
import projects from './resume/projects';
import publications from './resume/publications';
import awards from './resume/awards';
import volunteer from './resume/volunteering';
import { categories, skills } from './resume/skills';

const mapLevel = (level) => {
  if (level >= 5) return 'Expert';
  if (level >= 4) return 'Advanced';
  if (level >= 3) return 'Proficient';
  if (level >= 2) return 'Familiar';
  return 'Beginner';
};

const resumeSkills = categories.map(({ name }) => {
  const matchingSkills = skills.filter(({ keywords }) => keywords.includes(name));
  const averageLevel = matchingSkills.reduce(
    (sum, { level }) => sum + level,
    0,
  ) / matchingSkills.length;

  return {
    name,
    level: mapLevel(Math.round(averageLevel)),
    keywords: matchingSkills.map(({ name: skillName }) => skillName),
  };
});

const resumeProjects = projects.map(({
  title, subtitle, date, description, url,
}) => ({
  name: title,
  description: subtitle || description,
  highlights: [description],
  keywords: [],
  startDate: date,
  url,
}));

const details = {
  basics: {
    firstName: 'Antonios',
    lastName: 'Papaoikonomou',
    name: 'Antonios Papaoikonomou',
    label: 'Machine Learning and AI Engineer | MSc Applied Machine Learning @ Imperial',
    email: 'antonypap@hotmail.com',
    url: 'https://antonypap.github.io/',
    summary: 'Machine Learning and AI Engineer with experience building and operating production AI systems across LLM platforms, voice agents, and scalable ML infrastructure. Strong background in software engineering, cloud-native ML, and end-to-end model lifecycle (data → training → serving → observability). Experienced in Kubernetes, AWS, FastAPI/Celery, and deploying low-latency ML systems at scale.',
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
  projects: resumeProjects,
  publications,
  awards,
  volunteer,
  skills: resumeSkills,
};

export default details;
