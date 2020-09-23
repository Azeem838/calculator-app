import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class ButtonPanel extends React.Component {
  handleClick(buttonName) {
    const { handleClick } = this.props;
    return handleClick(buttonName);
  }

  render() {
    return (
      <div id="buttons">
        <div id="group1">
          <Button onClick={this.handleClick} name="AC" color="#dfdfdf" />
          <Button onClick={this.handleClick} name="+/-" color="#dfdfdf" />
          <Button onClick={this.handleClick} name="%" color="#dfdfdf" />
          <Button onClick={this.handleClick} name="÷" />
        </div>

        <div id="group2">
          <Button onClick={this.handleClick} name="7" color="#dfdfdf" />
          <Button onClick={this.handleClick} name="8" color="#dfdfdf" />
          <Button onClick={this.handleClick} name="9" color="#dfdfdf" />
          <Button onClick={this.handleClick} name="X" />
        </div>

        <div id="group3">
          <Button onClick={this.handleClick} name="4" color="#dfdfdf" />
          <Button onClick={this.handleClick} name="5" color="#dfdfdf" />
          <Button onClick={this.handleClick} name="6" color="#dfdfdf" />
          <Button onClick={this.handleClick} name="-" />
        </div>

        <div id="group4">
          <Button onClick={this.handleClick} name="1" color="#dfdfdf" />
          <Button onClick={this.handleClick} name="2" color="#dfdfdf" />
          <Button onClick={this.handleClick} name="3" color="#dfdfdf" />
          <Button onClick={this.handleClick} name="+" />
        </div>

        <div id="group5">
          <Button onClick={this.handleClick} name="0" wide color="#dfdfdf" />
          <Button onClick={this.handleClick} name="." color="#dfdfdf" />
          <Button onClick={this.handleClick} name="=" />
        </div>
      </div>
    );
  }
}

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
