const findMultipleMissingNumbers = (arr) => {
  let missing = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      missing.push(arr[i] + 1);
    }
  }
  return missing;
};
console.log(findMultipleMissingNumbers([1, 2, 4, 5, 6, 8, 9, 10, 12]));
