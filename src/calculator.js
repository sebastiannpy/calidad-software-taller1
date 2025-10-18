const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => (b === 0 ? 'Error: División por cero' : a / b),
  '%': (a, b) => a % b,
  '^': (a, b) => Math.pow(a, b),
};

function calculate(a, b, operator) {
  const operation = operations[operator];
  return operation ? operation(a, b) : 'Operador inválido';
}
module.exports = { calculate };



