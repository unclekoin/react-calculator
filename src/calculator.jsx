import React, { useState } from 'react';
import './calculator.css';
import Buttons from './components/buttons';
import Display from './components/display';
import computer from './utils/computer';

function App() {
  const [number, setNumber] = useState('0');
  const [result, setResult] = useState(0);
  const [sign, setSign] = useState('');
  const [dot, setDot] = useState(true);

  const handleButtons = (id, symbol, type) => {
    if (id === 'ac') {
      setSign('');
      setNumber('0');
      setResult(0);
    }

    if (id === 'equal') {
      setSign('');
      setNumber('0');
    }

    if (!Number(number) && !result && symbol === '0') return;

    if (id === 'dot') setDot(false);

    if (id === 'dot' && !dot) return;

    if (type === 'number') {
      setNumber((prev) =>
        prev === '0' && id !== 'dot' ? (prev = symbol) : prev + symbol
      );
    }

    if (!number && id === 'dot') setNumber('0.');


    if (type === 'math') {
      if (result && number) {
        setResult(computer(Number(result), Number(number), sign));
        setNumber('');
        return;
      }

      if (number) {
        setResult(number);
        setNumber('');
      }
      
      setDot(true);
      setSign(id);
    }
  };

  console.log('number', number);
  console.log('result', result);
  console.log('sign', sign);
  console.log('-----------------');

  return (
    <div className="calculator">
      <Display number={number} result={result} />
      <Buttons onButtons={handleButtons} />
    </div>
  );
}

export default App;
