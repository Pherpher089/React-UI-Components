import React from 'react';
import './App.css';

import Display from './components/DisplayComponents/CalculatorDisplay.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButtons from './components/ButtonComponents/ActionButton.js';

const App = () => {
  return (
    <div className = 'App'>
      <Display />
      <div className = 'Buttons'>
        <div className = 'Number-Buttons'>
          <div className = 'Clear-Button'>
            <ActionButtons/>
          </div> 
          <div className = 'Number-Row'>
            <NumberButton/>
            <NumberButton/>
            <NumberButton/>
          </div>
          <div className = 'Number-Row'>
            <NumberButton/>
            <NumberButton/>
            <NumberButton/>
          </div>

          <div className = 'Number-Row'>
            <NumberButton/>
            <NumberButton/>
            <NumberButton/>
          </div>
          <div className = 'Zero-Button'>
            <NumberButton/>
          </div>  
        </div>
        <div className = 'ActionButtons'> 
          <ActionButtons/>
          <ActionButtons/>
          <ActionButtons/>
          <ActionButtons/>
          <ActionButtons/>
        </div>
      </div>
     
    </div>
  );
};

export default App;
