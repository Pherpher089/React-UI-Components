import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer.js';
import CardContainer from './components/CardComponents/CardContainer.js'
const App = () => {
  return (
    
    <div className = "App">
      <HeaderContainer />  
      <CardContainer/>
      <h3>Welcome to React Social Card!</h3>
    </div>
  );
};

export default App;
