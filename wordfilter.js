const longWordsOnly = (arr, length) => {
  return arr.filter((word) => word.length > length);
};
console.log(longWordsOnly(["Hi", "Hello", "banana"], 5));
