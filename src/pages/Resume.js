import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Publications from '../components/Resume/Publications';
import Awards from '../components/Resume/Awards';

import education from '../data/resume/education';
import work from '../data/resume/work';
import { skills, categories } from '../data/resume/skills';
import publications from '../data/resume/publications';
import awards from '../data/resume/awards';
// import volunteer from '../data/resume/volunteering';

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={education} />,
  Experience: () => <Experience data={work} />,
  Publications: () => <Publications data={publications} />,
  Awards: () => <Awards data={awards} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
};

const Resume = () => (
  <Main
    title="CV"
    description="Antonios Papaoikonomou's CV. MSc Applied Machine Learning Imperial, MEng Electrical and Computer Engineering NTUA, Software Engineer, Machine Learning Engineer"
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>
            <Link to="/api/resume">CV</Link>
          </h2>
          <p>
            Hint: You can click on the header above to get my CV in a &quot;mock&quot; <a href="https://jsonresume.org/schema">JSON Resume</a> format
          </p>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Resume;
