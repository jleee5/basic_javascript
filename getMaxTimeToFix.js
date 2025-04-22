const tests = [
  {
    timeToFix: 10,
    name: "test 1",
  },
  {
    timeToFix: 12,
    name: "test 2",
  },
  {
    timeToFix: 30,
    name: "test 3",
  },
  {
    timeToFix: 33,
    name: "test 4",
  },
  {
    timeToFix: 93,
    name: "test 5",
  },
  {
    timeToFix: 12,
    name: "test 6",
  },
  {
    timeToFix: 13,
    name: "test 7",
  },
];

const getMaxTimeToFix = (array) => {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i]["timeToFix"] > max["timeToFix"]) {
      max = array[i];
    }
  }
  return max["name"];
};
console.log(getMaxTimeToFix(tests));
