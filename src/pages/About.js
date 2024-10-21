import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';

const SpotifyPlaylistEmbed = ({ playlistId, height = 152 }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <iframe
      title="Spotify Playlist Embed"
      src={`https://open.spotify.com/embed/playlist/${playlistId}`}
      width="100%"
      height={height}
      style={{ borderRadius: '12px' }}
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  );
};

SpotifyPlaylistEmbed.propTypes = {
  playlistId: PropTypes.string.isRequired,
  height: PropTypes.number,
};

SpotifyPlaylistEmbed.defaultProps = {
  height: 152,
};

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
          <SpotifyPlaylistEmbed playlistId="3rGSys39PU0pSehtA1YRj8" />
        </div>
      </article>
    </Main>
  );
};

export default About;
