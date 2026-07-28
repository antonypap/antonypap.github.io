/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';
// eslint-disable-next-line import/no-unresolved
import aboutMarkdown from '../data/about.md?raw';

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

const About = () => {
  const count = aboutMarkdown
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
        <Markdown>{aboutMarkdown}</Markdown>
        {/* <div>
          In the meantime, you can also check out this playlist:
          <SpotifyPlaylistEmbed playlistId="3rGSys39PU0pSehtA1YRj8" />
        </div> */}
      </article>
    </Main>
  );
};

export default About;
