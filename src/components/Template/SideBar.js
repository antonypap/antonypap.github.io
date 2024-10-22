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
        <h2>{details.basics.name}</h2>
        <p>
          <a href={`mailto:${details.basics.email}`}>{details.basics.email}</a>
        </p>
      </header>
      <ContactIcons />
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m {details.basics.firstName}! I am an engineer at heart, with degrees from{' '}
        <a href="https://imperial.ac.uk">Imperial College London</a> and <a href="https://www.ntua.gr/en/">NTUA</a>.{' '}
        I&apos;ve always loved the challenge of turning complex problems into real-world solutions,{' '}
        whether as a Software Engineer, Machine Learning Engineer, or just a curious tech enthusiast.{' '}
        From building high-performance systems to harnessing the power of AI,{' '}
        I&apos;m passionate about creating technology that makes a difference.
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
      <p className="copyright">
        &copy; {details.basics.firstName} {details.basics.lastName} <Link to="/">antonypap.github.io</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
