import React from 'react';

export default function ButtonPanel() {
  return (
    <div id="buttons">
      <div id="group1">
        <button type="button" id="ac">
          AC
        </button>
        <button type="button" id="change-sign">
          +/-
        </button>
        <button type="button" id="percent">
          %
        </button>
        <button type="button" id="divide">
          ÷
        </button>
      </div>

      <div id="group2">
        <button type="button" id="seven">
          7
        </button>
        <button type="button" id="eight">
          8
        </button>
        <button type="button" id="nine">
          9
        </button>
        <button type="button" id="multiply">
          X
        </button>
      </div>

      <div id="group3">
        <button type="button" id="four">
          4
        </button>
        <button type="button" id="five">
          5
        </button>
        <button type="button" id="six">
          6
        </button>
        <button type="button" id="subtract">
          -
        </button>
      </div>

      <div id="group4">
        <button type="button" id="one">
          1
        </button>
        <button type="button" id="two">
          2
        </button>
        <button type="button" id="three">
          3
        </button>
        <button type="button" id="add">
          +
        </button>
      </div>

      <div id="group5">
        <button type="button" id="zero">
          0
        </button>
        <button type="button" id="decimal">
          .
        </button>
        <button type="button" id="equal">
          equal
        </button>
      </div>
    </div>
  );
}
