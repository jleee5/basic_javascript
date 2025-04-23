const tests = [
  {
    timeToFix: 10,
    name: "test 1",
    testers: ["bob", "phil", "marco"],
  },
  {
    timeToFix: 12,
    name: "test 2",
    testers: ["bob", "phil", "marco", "miran"],
  },
  {
    timeToFix: 30,
    name: "test 3",
    testers: ["bob"],
  },
  {
    timeToFix: 33,
    name: "test 4",
    testers: ["phil", "marco", "miran", "kaiser"],
  },
  {
    timeToFix: 93,
    name: "test 5",
    testers: ["phil", "marco"],
  },
  {
    timeToFix: 12,
    name: "test 6",
    testers: ["josh"],
  },
  {
    timeToFix: 13,
    name: "test 7",
    testers: ["bob", "phil", "marco", "miran"],
  },
];

// const getTestsByTesterName = (array, tester) => {
//   let philTests = [];
//   for (let i = 0; i < array.length; i++) {
//     const test = array[i];
//     if (test["testers"].includes(tester)) {
//       philTests.push(test["name"]);
//     }
//   }
//   return philTests;
// };
// console.log(getTestsByTesterName(tests, "phil"));

// const getTestsByTesterName = (array, tester) => {
//   let philTests = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (array[i].testers[j] === tester) {
//         philTests.push(array[i]);
//       }
//     }
//   }
//   return philTests;
// };
// console.log(getTestsByTesterName(tests, "phil"));

const filter = (array, callback) => {
  let philTests = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      philTests.push(array[i]);
    }
  }
  return philTests;
};
console.log(filter(tests, (test) => test.testers.includes("phil")));

const includes = (array, string) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === string) {
      return true;
    }
  }
  return false;
};
console.log(includes(tests[2].testers, "phil"));
