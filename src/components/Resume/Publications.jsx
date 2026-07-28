/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

import Publication from './Publications/Publication';

const Publications = ({ data = [] }) => (
  <div className="publications">
    <div className="link-to" id="publications" />
    <div className="title">
      <h3>Publications</h3>
    </div>
    {data.map((publication) => (
      <Publication data={publication} key={publication.name} />
    ))}
  </div>
);

Publications.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      releaseDate: PropTypes.string,
      venue: PropTypes.string,
      journal: PropTypes.string,
      publisher: PropTypes.string,
      url: PropTypes.string,
      citation: PropTypes.string,
      authors: PropTypes.arrayOf(PropTypes.string),
      summary: PropTypes.string,
    }),
  ),
};

export default Publications;
