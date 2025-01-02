const add = require('./sum');

test('empty string returns 0', () => {
  expect(add('')).toBe(0);
});

test('return number itself when single number', () => {
  expect(add('1')).toBe(1);
});

test('return sum of multiple number', () => {
  expect(add('1,2,3')).toBe(6);
});