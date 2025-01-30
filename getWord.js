const getWord = (string, num) => {
  const split = string.split(" ");
  return split[num - 1];
};
console.log(getWord("hello my name is Josh", 2));
