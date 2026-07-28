import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import projects from '../data/resume/projects';

const Projects = () => (
  <Main title="Projects" description="Learn about Antonios Papaoikonomou's projects.">
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>
            <Link to="/projects">Projects</Link>
          </h2>
          <p>Selected projects, experiments, and occasional rabbit holes.</p>
        </div>
      </header>
      {projects.map((project) => (
        <Cell data={project} key={project.title} />
      ))}
    </article>
  </Main>
);

export default Projects;
