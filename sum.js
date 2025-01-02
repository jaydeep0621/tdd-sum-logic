function add(numbers) {
  if (numbers === '') {
    return 0;
  }
  numbers = numbers.replace(/\n/g, ',');
  const nums = numbers.split(',');
  return nums.reduce((sum, num) => sum + parseInt(num, 10), 0);
};

module.exports = add;
