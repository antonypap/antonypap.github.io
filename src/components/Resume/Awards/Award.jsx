import React from 'react';
import PropTypes from 'prop-types';

const Award = ({ data }) => {
  // Extract year from the date string
  const awardYear = new Date(data.date).getFullYear();

  return (
    <article className="award-container">
      <header>
        <h4 className="award-title">{data.title}</h4>
        <p className="awarder">
          {data.url ? (
            <a href={data.url}>{data.awarder}</a>
          ) : (
            data.awarder
          )}, {awardYear}
        </p>
      </header>
      {/* {data.summary && (
        <p className="award-description">{data.summary}</p>
      )} */}
    </article>
  );
};

Award.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    awarder: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    url: PropTypes.string,
    summary: PropTypes.string,
  }).isRequired,
};

export default Award;
