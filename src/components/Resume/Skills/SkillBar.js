/* eslint-disable no-bitwise */
import React from 'react';
import PropTypes from 'prop-types';

// Helper function to convert hex to RGB
const hexToRgb = (hex) => {
  const bigint = parseInt(hex.slice(1), 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
};

// Helper function to convert RGB to hex
const rgbToHex = (r, g, b) => `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

// Calculate average color
const averageColor = (colors) => {
  const total = colors.reduce(
    (acc, color) => {
      const [r, g, b] = hexToRgb(color);
      return [acc[0] + r, acc[1] + g, acc[2] + b];
    },
    [0, 0, 0],
  );

  const avg = total.map((sum) => Math.round(sum / colors.length));
  return rgbToHex(avg[0], avg[1], avg[2]);
};

const SkillBar = ({ data, categories }) => {
  const { keywords, level, name } = data;

  const titleStyle = {
    background: averageColor(
      categories
        .filter((cat) => keywords.includes(cat.name))
        .map((cat) => cat.color),
    ),
  };

  const barStyle = {
    ...titleStyle,
    width: `${String(Math.min(100, Math.max((level / 5.0) * 100.0, 0)))}%`,
  };

  return (
    <div className="skillbar clearfix">
      <div className="skillbar-title" style={titleStyle}>
        <span>{name}</span>
      </div>
      <div className="skillbar-bar" style={barStyle} />
      <div className="skill-bar-percent">{level} / 5</div>
    </div>
  );
};

SkillBar.propTypes = {
  data: PropTypes.shape({
    keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
    level: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
    }),
  ),
};

SkillBar.defaultProps = {
  categories: [],
};

export default SkillBar;
