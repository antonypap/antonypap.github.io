import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const publicUrl = import.meta.env.BASE_URL.replace(/\/$/, '');
const DEFAULT_IMAGE = `${publicUrl}/images/projects/default.jpg`;

const Cell = ({ data }) => {
  const imageUrl = data.image
    ? `${publicUrl}${data.image}`
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
