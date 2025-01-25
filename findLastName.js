const find = (arr, callBack) => {
  for (let i = 0; i < arr.length; i++) {
    if (callBack(arr[i])) {
      return arr[i].lastName;
    }
  }
  return "not found";
};
console.log(
  find(
    [
      { firstName: "Josh", lastName: "Lee" },
      { firstName: "Tae", lastName: "Cho" },
      { firstName: "Marco", lastName: "Seo" },
    ],
    (obj) => obj.lastName === "Seo"
  )
);
