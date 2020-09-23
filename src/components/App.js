import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

export default function App() {
  return (
    <div id="calculator">
      <Display />
      <ButtonPanel />
    </div>
  );
}
