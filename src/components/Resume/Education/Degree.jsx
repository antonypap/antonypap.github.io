import React from 'react';
import PropTypes from 'prop-types';

const Degree = ({ data }) => {
  // Extract year from the date string
  const graduationYear = new Date(data.endDate).getFullYear();

  return (
    <article className="degree-container">
      <header>
        <h4 className="degree">{data.degree}</h4>
        <p className="school">
          <a href={data.url}>{data.institution}</a>, {graduationYear}
        </p>
      </header>
    </article>
  );
};

Degree.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
  }).isRequired,
};

export default Degree;
