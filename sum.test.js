const add = require('./sum');

test('empty string returns 0', () => {
  expect(add('')).toBe(0);
});