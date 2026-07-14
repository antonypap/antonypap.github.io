import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Antonios Papaoikonomou's personal website. London-based AI Engineer, Machine Learning Engineer, "
      + 'and Software Engineer building production AI systems.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/about">Antonios Papaoikonomou</Link>
          </h2>
          <p>
            AI Engineer, Machine Learning Engineer, and Software Engineer based in London.
          </p>
        </div>
      </header>
      <p>
        Welcome to my corner of the internet. I build production AI systems across LLM
        platforms, voice agents, ML infrastructure, and the useful bits of software
        engineering that make ambitious ideas survive contact with reality.
      </p>
      <p>
        You can read more <Link to="/about">about me</Link>, browse my{' '}
        <Link to="/resume">CV</Link>, explore selected{' '}
        <Link to="/projects">projects</Link>, or check out some{' '}
        <Link to="/stats">fun statistics</Link>.
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
