const SayMyName = (schoolId) => {
  const baum = [
    { schoolId: 1, firstName: "Marco", lastName: "Seo", class: "QA" },
    { schoolId: 2, firstName: "Phil", lastName: "Lee", class: "QA" },
    { schoolId: 3, firstName: "Joshua", lastName: "Lee", class: "Kids coding" },
    { schoolId: 4, firstName: "Tae", lastName: "Cho", class: "QA" },
    { schoolId: 5, firstName: "Inchan", lastName: "Choi", class: "QA" },
  ];
  for (let i = 0; i < baum.length; i++) {
    if (baum[i]["schoolId"] === schoolId) {
      return `You are ${baum[i].firstName} ${baum[i].lastName}`;
    }
  }
};
console.log(SayMyName(1));
    