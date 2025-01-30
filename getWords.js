const getWords = (string, num) => {
  let split = string.split(" ");
  let array = [];
  for (let i = 0; i < num; i++) {
    if (i > split.length) {
      return "error";
    } else {
      array.push(split[i]);
    }
  }
  return array;
};
console.log(getWords("Hello my name is Josh", 4));
