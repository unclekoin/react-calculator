import React from 'react';
import './calculator.css';
import Buttons from './components/buttons';
import Display from './components/display';

function App() {

  const handleButtons = (id, symbol, type) => {
    console.log(id, symbol, type);
  };

  return (
    <div className="calculator">
      <Display />
      <Buttons onButtons={handleButtons} />
    </div>
  );
}

export default App;
