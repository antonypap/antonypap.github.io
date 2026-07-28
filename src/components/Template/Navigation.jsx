import React from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import routes from '../../data/routes';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => {
  const indexRoute = routes.find((route) => route.index);
  const navRoutes = routes.filter((route) => !route.index && route.showInNav);

  return (
    <header id="header">
      {/* Site Title/Home Link */}
      <h1 className="index-link">
        {indexRoute && (
          <Link to={indexRoute.path}>
            {indexRoute.label}
          </Link>
        )}
      </h1>

      {/* Navigation Links */}
      <nav className="links">
        <ul>
          {navRoutes.map((route) => (
            <li key={route.path}>
              <Link to={route.path}>
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu */}
      <Hamburger />
    </header>
  );
};

export default Navigation;
