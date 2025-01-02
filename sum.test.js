const add = require('./sum');

test('return empty string', () => {
  expect(add('')).toBe(0);
});

test('return number itself when single number', () => {
  expect(add('1')).toBe(1);
});

test('return sum of multiple number', () => {
  expect(add('1,2,3')).toBe(6);
});

test('return sum on newlines as delimiters', () => {
  expect(add('1\n2,3')).toBe(6);
});

test('return sum on multiple delimiters', () => {
  expect(add('//;\n1;\n2')).toBe(3);
});
