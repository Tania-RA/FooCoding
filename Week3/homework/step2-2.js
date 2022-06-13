function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }

  console.log(numbers);
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 5 === 0 && numbers[i] % 3 === 0) {
      threeCallback(numbers[i]);
      fiveCallback(numbers[i]);
    } else if (numbers[i] % 3 === 0) {
      threeCallback(numbers[i]);
    } else if (numbers[i] % 5 === 0) {
      fiveCallback(numbers[i]);
    }
  }
}

function sayThree(number) {
  if (number % 3 === 0) {
    console.log('sayThree');
  }
}

function sayFive(number) {
  if (number % 5 === 0) {
    console.log('sayFive');
  }
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
