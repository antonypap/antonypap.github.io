/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

import Award from './Awards/Award';

const Awards = ({ data = [] }) => (
  <div className="awards">
    <div className="link-to" id="awards" />
    <div className="title">
      <h3>Awards & Achievements</h3>
    </div>
    {data.map((award) => (
      <Award data={award} key={award.title} />
    ))}
  </div>
);

Awards.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      awarder: PropTypes.string,
      date: PropTypes.string,
      summary: PropTypes.string,
    }),
  ),
};

export default Awards;
