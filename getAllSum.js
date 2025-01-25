const getAllSum = (arr, sum) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        newArray.push([arr[i], arr[j]]);
      }
    }
  }
  return newArray;
};
console.log(getAllSum([1, 2, 3, 4, 5, 6], 6));
