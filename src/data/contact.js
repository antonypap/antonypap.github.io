import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
// import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faGoogleScholar } from '@fortawesome/free-brands-svg-icons/faGoogleScholar';
// import { faOrcid } from '@fortawesome/free-brands-svg-icons/faOrcid';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

import details from './info';

const getProfileUrl = (network) => {
  const profile = details.basics.profiles.find((p) => p.network === network);
  return profile?.url;
};

const data = [
  {
    link: getProfileUrl('GitHub'),
    label: 'Github',
    icon: faGithub,
  },
  {
    link: getProfileUrl('LinkedIn'),
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  // {
  //   link: getProfileUrl('Twitter'),
  //   label: 'Twitter',
  //   icon: faTwitter,
  // },
  {
    link: getProfileUrl('Google Scholar'),
    label: 'Google Scholar',
    icon: faGoogleScholar,
  },
  // {
  //   link: getProfileUrl('ORCID')
  //   label: 'ORCID ID',
  //   icon: faOrcid,
  // },
  {
    link: `mailto:${details.basics.email}`,
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
