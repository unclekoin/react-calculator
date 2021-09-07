import React from 'react';
import './display.css';

const Display = ({ number, result, expression}) => {
  return (
    <div className="calculator__display">
      <div className="calculator__expression">{expression || 0}</div>
      <div className="calculator__result">{number || result}</div>    
    </div>);
};

export default Display;