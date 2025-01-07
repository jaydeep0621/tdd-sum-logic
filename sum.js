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

function removeNumberGreaterThanThousand(numbers) {
  return numbers.filter(num => num < 1000);
};

function add(numbers) {
  const parseNumber = parseStringToNumber(numbers);

  checkNegativeNumber(parseNumber);

  const filterNumber = removeNumberGreaterThanThousand(parseNumber);

  return filterNumber.reduce((total, num) => total + num, 0);
};

module.exports = add;
