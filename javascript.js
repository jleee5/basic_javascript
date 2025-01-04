const getSecondLargest = (numbers) => {
  let largest = 0;
  let secondLargest = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      secondLargest = largest;
      largest = numbers[i];
    } else if (numbers[i] > secondLargest && numbers[i] < largest) {
      secondLargest = numbers[i];
    }
  }
  return secondLargest;
};
console.log(getSecondLargest([1, 2, 5, 10, 9, 12]));
