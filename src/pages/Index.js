import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Antonios Papaoikonomou's personal website. London, UK based Imperial College London and NTUA graduate, "
      + 'Software Engineer and Machine Learning Engineer.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">About this site</Link>
          </h2>
          <p>
            A responsive, statically-generated, react application
            written with modern Javascript.
          </p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. Please feel free to read more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">CV</Link>, <Link to="/projects">projects</Link>, or{' '}
        view some <Link to="/stats">fun statistics</Link> about me.
      </p>
    </article>
  </Main>
);

export default Index;
