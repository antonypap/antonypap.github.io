import React from 'react';
import PropTypes from 'prop-types';

const Publication = ({ data }) => {
  // Extract year from the date string
  const publicationYear = new Date(data.releaseDate).getFullYear();

  // Format authors list with proper punctuation
  const formatAuthors = (authors) => {
    const formatName = (author) => {
      const nameParts = author.split(' ');
      const firstName = nameParts[0];
      const lastName = nameParts.length > 2 ? nameParts[nameParts.length - 1] : nameParts[1];
      return `${lastName} ${firstName[0]}.`;
    };

    const formattedAuthors = authors.map(formatName);

    if (formattedAuthors.length === 1) return formattedAuthors[0];
    if (formattedAuthors.length === 2) return `${formattedAuthors[0]} and ${formattedAuthors[1]}`;

    return formattedAuthors.map((author, index) => {
      if (index === formattedAuthors.length - 1) return `and ${author}`;
      return `${author}, `;
    }).join('');
  };

  return (
    <article className="publication-container">
      <header>
        <h4 className="name"><a href={data.url}>{data.name}</a></h4>
        <p className="authors">{formatAuthors(data.authors)}</p>
        <p className="publish">
          {data.journal}, {data.publisher}, {publicationYear}
        </p>
      </header>
    </article>
  );
};

Publication.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    venue: PropTypes.string,
    journal: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    citation: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string),
    summary: PropTypes.string,
  }).isRequired,
};

export default Publication;
