const findMissingNumber = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i] + 1;
    }
  }
};
console.log(findMissingNumber([4, 5, 6, 8, 9, 10]));
