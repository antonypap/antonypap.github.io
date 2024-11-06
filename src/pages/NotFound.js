import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const PageNotFound = () => (
  <HelmetProvider>
    <div className="not-found">
      <Helmet title="404 Not Found">
        <meta
          name="description"
          content="The content you are looking for cannot be found."
        />
      </Helmet>
      <h1>404</h1>
      <h2>Houston, we have a problem!</h2>
      <p>
        The page you&apos;re looking for has drifted into deep space.
      </p>
      <p>
        <Link to="/">Return to Earth</Link>
      </p>
    </div>
  </HelmetProvider>
);

export default PageNotFound;
