const computer = (a, b, action) => {
  switch (action) {
    case 'plus':
      return a + b;
    case 'minus':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
    default:
      return;
  }
}

export default computer;