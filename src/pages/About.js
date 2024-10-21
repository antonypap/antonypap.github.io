import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';

const About = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/about.md').then((res) => {
      fetch(res.default)
        .then((r) => r.text())
        .then(setMarkdown);
    });
  });

  const count = markdown
    .split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;

  return (
    <Main title="About" description="Learn about Antonios">
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2>
              <Link to="/about">About Me</Link>
            </h2>
            <p>(in about {count} words)</p>
          </div>
        </header>
        <Markdown>{markdown}</Markdown>
        <div>
          In the meantime, you can also check out this playlist:
          <iframe
            title="Spotify Playlist Embed"
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/playlist/3rGSys39PU0pSehtA1YRj8"
            width="100%"
            height="152"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </article>
    </Main>
  );
};

export default About;
