import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState((prevState) => {
      const data = calculate(prevState, buttonName);
      return {
        total: data.total,
        next: data.next,
        operation: data.operation,
      };
    });
  }

  render() {
    const { total } = this.state;
    return (
      <div id="calculator">
        <Display result={total} />
        <ButtonPanel onClick={this.handleClick} />
      </div>
    );
  }
}
