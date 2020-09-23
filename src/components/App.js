import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

export default function App() {
  return (
    <div id="calculator">
      <Display />
      <ButtonPanel />
    </div>
  );
}
