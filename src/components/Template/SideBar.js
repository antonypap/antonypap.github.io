import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';
import details from '../../data/info';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>{details.firstName} {details.lastName}</h2>
        <p>
          <a href={`mailto:${details.email}`}>{details.email}</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m {details.firstName}. I am a{' '}
        <a href="https://imperial.ac.uk">Imperial College London</a> and a{' '}
        <a href="https://www.ntua.gr/en/">NTUA</a> graduate,
        and have been working as a Software Engineer and Machine Learning Engineer in the past.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; {details.firstName} {details.lastName} <Link to="/">antonypap.github.io</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
