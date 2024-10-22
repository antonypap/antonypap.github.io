import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const DEFAULT_IMAGE = `${process.env.PUBLIC_URL}/images/projects/default.jpg`; // Adjust path as needed

const Cell = ({ data }) => {
  const imageUrl = data.image
    ? `${process.env.PUBLIC_URL}${data.image}`
    : DEFAULT_IMAGE;

  return (
    <div className="cell-container">
      <article className="mini-post">
        <header>
          <h3>
            <a href={data.url}>{data.title}</a>
          </h3>
          <time className="published">
            {dayjs(data.date).format('MMMM, YYYY')}
          </time>
        </header>
        <a href={data.url} className="image">
          <img src={imageUrl} alt={data.title} />
        </a>
        <div className="description">
          <p>{data.description}</p>
        </div>
      </article>
    </div>
  );
};

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
