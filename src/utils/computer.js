const computer = (a, b, action) => {
  let result = 0;

  switch (action) {
    case 'plus':
      result = a + b;
      break;
    case 'minus':
      result = a - b;
      break;
    case 'multiply':
      result = a * b;
      break;
    case 'divide':
      result = a / b;
      break;
    default:
      return result;
  }

  return Number(result.toFixed(5));
};

export default computer;
