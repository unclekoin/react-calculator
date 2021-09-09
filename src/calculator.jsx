import React, { useState, useEffect } from 'react';
import './calculator.css';
import Buttons from './components/buttons';
import Display from './components/display';
import computer from './utils/computer';

function App() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');
  const [operator, setOperator] = useState('');
  const [dot, setDot] = useState(true);
  const [expression, setExpression] = useState('');

  useEffect(() => {
    if (operator === 'equal') setExpression(result);
    if (!operator && number) setExpression(number);
    if (result === Infinity) clearDisplay();
  }, [result, operator, number]);

  const handleNumbers = (id, symbol) => {
    if (number === '0' && id !== 'dot') setNumber('');
    if (dot && !number && id === 'dot') {
      setNumber('0');
    }
    if (id === 'dot') setDot(false);
    if (!dot && id === 'dot') return;
    if (operator === 'equal') {
      setOperator('');
      setResult('');
    }
    if (number === '0' && symbol === '0' && dot) return;

    setNumber((prevNumber) => prevNumber + symbol);
  };

  const handleOperators = (id) => {
    if (operator && result && number) {
      setResult(computer(Number(result), Number(number), operator));
      setOperator(id);
      setNumber('');
      return;
    }

    setOperator(id);
    if (number) setResult(number);
    setNumber('');
    setDot(true);
  };

  const handleExpression = (id, symbol, type) => {
    if (
      id === 'equal' ||
      id === 'ac' ||
      (!dot && id === 'dot') ||
      (!Number(number) && symbol === '0') ||
      (!number && !result && type === 'math')
    )
      return;
    
    if (!number && type === 'math' && operator !== 'equal') {
      setExpression((prev) => prev.slice(0, -2).trim() + symbol);
      return;
    }

    if (!number && id === 'dot') {
      setExpression(expression + '0.');
      return;
    }

    if (expression[expression.length - 1] === '.' && type === 'math') {
      setExpression((prev) => prev.slice(0, -1) + symbol);
      return;
    }

    setExpression(expression + symbol);
  };

  const handleResult = () => {
    if (operator === 'equal' || !result) return;
    setResult(computer(Number(result), Number(number), operator));
    setOperator('equal');
    setNumber('');
  };

  const clearDisplay = () => {
    setNumber('');
    setResult('');
    setOperator('');
    setExpression('');
    setDot(true);
  };

  const handleButtons = (id, symbol, type) => {
    if (type === 'number') handleNumbers(id, symbol);
    if (type === 'math') handleOperators(id);
    if (type === 'clear') clearDisplay();
    if (type === 'equal') handleResult();
    handleExpression(id, symbol, type);
  };

  return (
    <div className="calculator">
      <Display
        number={number || 0}
        result={Number(result) || 0}
        expression={expression || ''}
      />
      <Buttons onButtons={handleButtons} />
    </div>
  );
}

export default App;
