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
  
  let negativeNumbers = [];

  const sum = nums.reduce((total, num) => {
    const parsedNum = parseInt(num, 10);
    if (parsedNum < 0) {
      negativeNumbers.push(parsedNum);
    }
    return total + parsedNum;
  }, 0);

  if (negativeNumbers.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(',')}`);
  };

  return sum;
};

module.exports = add;
