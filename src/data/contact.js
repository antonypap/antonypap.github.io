import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
// import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faGoogleScholar } from '@fortawesome/free-brands-svg-icons/faGoogleScholar';
// import { faOrcid } from '@fortawesome/free-brands-svg-icons/faOrcid';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

import details from './info';

const data = [
  {
    link: details.links.github,
    label: 'Github',
    icon: faGithub,
  },
  {
    link: details.links.linkedin,
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  // {
  //   link: details.links.twitter,
  //   label: 'Twitter',
  //   icon: faTwitter,
  // },
  {
    link: details.links.googleScholar,
    label: 'Google Scholar',
    icon: faGoogleScholar,
  },
  // {
  //   link: details.links.orcid,
  //   label: 'ORCID ID',
  //   icon: faOrcid,
  // },
  {
    link: `mailto:${details.email}`,
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
