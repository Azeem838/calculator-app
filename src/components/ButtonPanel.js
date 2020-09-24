import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function ButtonPanel({ clickHandler }) {
  return (
    <div id="buttons">
      <div id="group1">
        <Button clickHandler={clickHandler} name="AC" color="#dfdfdf" />
        <Button clickHandler={clickHandler} name="+/-" color="#dfdfdf" />
        <Button clickHandler={clickHandler} name="%" color="#dfdfdf" />
        <Button clickHandler={clickHandler} name="÷" />
      </div>

      <div id="group2">
        <Button clickHandler={clickHandler} name="7" color="#dfdfdf" />
        <Button clickHandler={clickHandler} name="8" color="#dfdfdf" />
        <Button clickHandler={clickHandler} name="9" color="#dfdfdf" />
        <Button clickHandler={clickHandler} name="X" />
      </div>

      <div id="group3">
        <Button clickHandler={clickHandler} name="4" color="#dfdfdf" />
        <Button clickHandler={clickHandler} name="5" color="#dfdfdf" />
        <Button clickHandler={clickHandler} name="6" color="#dfdfdf" />
        <Button clickHandler={clickHandler} name="-" />
      </div>

      <div id="group4">
        <Button clickHandler={clickHandler} name="1" color="#dfdfdf" />
        <Button clickHandler={clickHandler} name="2" color="#dfdfdf" />
        <Button clickHandler={clickHandler} name="3" color="#dfdfdf" />
        <Button clickHandler={clickHandler} name="+" />
      </div>

      <div id="group5">
        <Button clickHandler={clickHandler} name="0" wide color="#dfdfdf" />
        <Button clickHandler={clickHandler} name="." color="#dfdfdf" />
        <Button clickHandler={clickHandler} name="=" />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
