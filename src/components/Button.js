import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  handleClick(buttonName) {
    const { handleClick } = this.props;
    return handleClick(buttonName);
  }

  render() {
    const { name, color, wide } = this.props;
    return (
      <button
        style={{ backgroundColor: color, width: wide ? '50%' : '25%' }}
        type="button"
        onClick={this.handleClick}
      >
        {name}
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};
