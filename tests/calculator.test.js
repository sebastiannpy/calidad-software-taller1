const { calculate } = require('../src/calculator');

describe('calculate', () => {
  test('suma', () => expect(calculate(2, 3, '+')).toBe(5));
  test('resta', () => expect(calculate(5, 2, '-')).toBe(3));
  test('multiplicación', () => expect(calculate(3, 4, '*')).toBe(12));
  test('división', () => expect(calculate(10, 2, '/')).toBe(5));
  test('división por cero', () => expect(calculate(10, 0, '/')).toBe('Error: División por cero'));
  test('módulo', () => expect(calculate(10, 3, '%')).toBe(1));
  test('potencia', () => expect(calculate(2, 3, '^')).toBe(8));
  test('operador inválido', () => expect(calculate(5, 2, 'x')).toBe('Operador inválido'));
});



