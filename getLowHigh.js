const getLowHigh = (arr, num) => {
  // let low = [];
  // let high = [];
  const hash = { low: [], high: [] };
  // const hash = {}
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < num) {
      hash["low"].push(arr[i]);
    } else if (arr[i] > num) {
      hash["high"].push(arr[i]);
    }
  }
  return hash;
};
console.log(getLowHigh([1, 2, 3, 4, 5, 6], 4));
