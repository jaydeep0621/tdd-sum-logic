function add(numbers) {
  if (numbers === '') {
    return 0;
  };
  if (numbers.startsWith('//')) {
    const delimiterEndIndex = numbers.indexOf('\n');
    const delimiter = numbers.slice(2, delimiterEndIndex);
    numbers = numbers.slice(delimiterEndIndex + 1);
    numbers = numbers.replace(new RegExp(delimiter, 'g'), ',');
  } else {
    numbers = numbers.replace(/\n/g, ',');
  }

  const nums = numbers.split(',');
  return nums.reduce((sum, num) => sum + parseInt(num, 10), 0);
};

module.exports = add;
