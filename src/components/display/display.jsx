import React from 'react';
import './display.css';

const Display = ({ number, result }) => {
  return <div className="calculator__display">{number || result}</div>;
};

export default Display;
