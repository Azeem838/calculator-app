import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, color, wide }) => (
  <button
    style={{ backgroundColor: color, width: wide ? '50%' : '25%' }}
    type="button"
  >
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
