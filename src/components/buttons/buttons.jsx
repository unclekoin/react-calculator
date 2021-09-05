import React from 'react';
import { data } from '../../data';
import './buttons.css';

const Buttons = ({ onButtons }) => {
  return (
    <div className="calculator__buttons">
      {data.map(({ id, symbol, cls, type }) => (
        <div
          onClick={() => onButtons(id, symbol, type)}
          key={id}
          className={`calculator__${cls}`}
        >
          {symbol}
        </div>
      ))}
    </div>
  );
};

export default Buttons;
