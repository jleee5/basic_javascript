const removeElement = (arr, num) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== num) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
console.log(removeElement([1, 2, 3, 4, 3, 5], 3));
