import React from 'react';
import PropTypes from 'prop-types';

export default function Button({
  name, color, wide, clickHandler,
}) {
  return (
    <button
      style={{ backgroundColor: color, width: wide ? '50%' : '25%' }}
      type="button"
      onClick={() => clickHandler(name)}
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};
