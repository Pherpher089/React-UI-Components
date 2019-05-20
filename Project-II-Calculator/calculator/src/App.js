import React from 'react';
import './App.css';

import Display from './components/DisplayComponents/CalculatorDisplay.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButtons from './components/ButtonComponents/ActionButton.js';

var calcValue = 0;
const App = () => {
  return (
    <div className = 'App'>
      <Display value = {calcValue}/>
      <div className = 'Buttons'>
        <div className = 'Number-Buttons'>
          <div className = 'Clear-Button'>
            <ActionButtons name = 'Clear' />
          </div> 
          <div className = 'Number-Row'>
            <NumberButton number="1"/>
            <NumberButton number ='2'/>
            <NumberButton number = '3'/>
            
          </div>
          <div className = 'Number-Row'>
            <NumberButton number ='4'/>
            <NumberButton number = '5'/>
            <NumberButton number = '6'/>
          </div>

          <div className = 'Number-Row'>
            <NumberButton number = '7'/>
            <NumberButton number = '8'/>
            <NumberButton number = '9'/>
          </div>
          <div className = 'Zero-Button'>
            <NumberButton number = '0'/>
          </div>  
        </div>
        <div className = 'ActionButtons'> 
          <ActionButtons name = '÷'/>
          <ActionButtons name = '×'/>
          <ActionButtons name = '-'/>
          <ActionButtons name = '+'/>
          <ActionButtons name = '='/>
        </div>
      </div>
     
    </div>
  );
};

export default App;
 