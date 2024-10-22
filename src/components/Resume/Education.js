import React from 'react';
import PropTypes from 'prop-types';

import Degree from './Education/Degree';

const Education = ({ data }) => (
  <div className="education">
    <div className="link-to" id="education" />
    <div className="title">
      <h3>Education</h3>
    </div>
    {data.map((degree) => (
      <Degree data={degree} key={degree.institution} />
    ))}
  </div>
);

Education.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      institution: PropTypes.string,
      degree: PropTypes.string,
      url: PropTypes.string,
      endDate: PropTypes.string,
    }),
  ),
};

Education.defaultProps = {
  data: [],
};

export default Education;
