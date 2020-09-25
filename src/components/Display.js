import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ total, next, operation }) => (
  <div>
    <div id="result">
      {total}
      {' '}
      {operation}
      {' '}
      {next}
    </div>
  </div>
);

Display.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

Display.defaultProps = {
  total: '0',
  next: '',
  operation: '',
};

export default Display;
