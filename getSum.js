const getSum = (arr, sum) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        newArray.push(arr[i]);
        newArray.push(arr[j]);
        return newArray;
      }
    }
  }
};
console.log(getSum([1, 2, 3, 4, 5, 6, 7], 6));
