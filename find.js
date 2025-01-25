const find = (array, callBackFn) => {
  for (let i = 0; i < array.length; i++) {
    if (callBackFn(array[i])) {
      return true;
    }
  }
  return false;
};
console.log(find([1, 2, 3], (num) => num === 5));
