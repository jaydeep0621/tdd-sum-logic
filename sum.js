function checkNegativeNumber(parseNumber) {
  const negativeNumbers = parseNumber.filter(num => num < 0);

  if (negativeNumbers.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(',')}`);
  };
}

function parseStringToNumber(numbers) {
  if (numbers.startsWith('//')) {
    const delimiterEndIndex = numbers.indexOf('\n');
    const delimiter = numbers.slice(2, delimiterEndIndex);
    numbers = numbers.slice(delimiterEndIndex + 1);
    numbers = numbers.replace(new RegExp(delimiter, 'g'), ',');
  } else {
    numbers = numbers.replace(/\n/g, ',');
  };

  const nums = numbers.split(',');

  parseNumber = nums.map(num => parseInt(num, 10));

  return parseNumber;
};

function add(numbers) {
  if (numbers === '') {
    return 0;
  };

  const parseNumber = parseStringToNumber(numbers);

  checkNegativeNumber(parseNumber);

  const sum = parseNumber.reduce((total, num) => total + num, 0);

  return sum;
};

module.exports = add;


