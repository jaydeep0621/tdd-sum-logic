const add = require('./sum');

test('empty string returns 0', () => {
  expect(add('')).toBe(0);
});

test('single number should return itself', () => {
  expect(add('1')).toBe(1);
});