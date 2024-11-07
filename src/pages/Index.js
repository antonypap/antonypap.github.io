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
            <a href="https://github.com/antonypap/antonypap.github.io">About this site</a>
          </h2>
          <p>
            A responsive, statically-generated, react application
            written with modern Javascript.
          </p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website! Explore more{' '}
        <Link to="/about">about me</Link>, browse my{' '}
        <Link to="/resume">CV</Link>, <Link to="/projects">projects</Link>, or{' '}
        check out some <Link to="/stats">fun statistics</Link>.
      </p>
      <figure>
        <img
          src="/images/DALL-E/DALL·E 2022-07-29 12.23.30 - An Andy Warhol style painting of a corgi wearing sunglasses.png"
          alt="An Andy Warhol style painting of a corgi wearing sunglasses"
        />
        <figcaption>
          <a href="https://openai.com/dall-e-2/">DALL·E 2</a> - An Andy Warhol style painting of a corgi wearing sunglasses
        </figcaption>
      </figure>
    </article>
  </Main>
);

export default Index;
