import React from 'react';
import Button from './Button';

export default function ButtonPanel() {
  return (
    <div id="buttons">
      <div id="group1">
        <Button name="AC" color="#dfdfdf" />
        <Button name="+/-" color="#dfdfdf" />
        <Button name="%" color="#dfdfdf" />
        <Button name="÷" />
      </div>

      <div id="group2">
        <Button name="7" color="#dfdfdf" />
        <Button name="8" color="#dfdfdf" />
        <Button name="9" color="#dfdfdf" />
        <Button name="X" />
      </div>

      <div id="group3">
        <Button name="4" color="#dfdfdf" />
        <Button name="5" color="#dfdfdf" />
        <Button name="6" color="#dfdfdf" />
        <Button name="-" />
      </div>

      <div id="group4">
        <Button name="1" color="#dfdfdf" />
        <Button name="2" color="#dfdfdf" />
        <Button name="3" color="#dfdfdf" />
        <Button name="+" />
      </div>

      <div id="group5">
        <Button name="0" wide={true} color="#dfdfdf" />
        <Button name="." color="#dfdfdf" />
        <Button name="=" />
      </div>
    </div>
  );
}
