// const firstName = "Joshua"
// const lastName = "Lee"
// const birthday = "August 1"
// const address = null
// let isMarried;

// //Arrays

// const classmates = ["Esther", "Josh", "DJ", "Inchan", "DC", "Phil"];
// const classDays = ["Tuesday", "Thursday", "Saturday"];
// const classmatesAndclassDays = [...classmates, ...classDays];// spread operator
// // zero based index

// const foods = ["chicken", "beef", "potatoes", "kimchi", "radish"];
// const foodAndPeople = [...foods, ...classmates];
// console.log("OG MEMBERS!", classmates.length);
// classmates.push("Jenny"); // add new item to end of array
// console.log("NEW CLASSMATE MEMBER", classmates.length); //number of items in the array
// console.log("location of inchan", classmates.indexOf("Inchan")); // find the location index of item in array
// console.log("remove an item from the end of the list", classmates.pop()); // removing the last item from the array

//Array methods
//push
//pop
//length
//index of

//const team = ["Josh", "Esther", "DJ", "Phil", "Inchan", "DC"];
//console.log(team[1], "and", team[2], "are friends");

// const car = [5, "Lexus", "Toyota", "Mercedes", "Tesla"];

// const parents = {
//     "Phil": ["Journey", "Audrey"],
//     "DC": ["Ashton", "Aiden"],
//     "Inchan": ["Moa"],
//     "Esther": ["Doyle"],
//     "DJ": ["Ailee", "Hazel"],
//     "Josh": null
// }

// console.log(parents.Phil[0]+",", parents.DC[0]+",", "and", parents.DJ[0], "are same grade");

// const names = ['phil', 'dc'];
// names[0]; //phil
//objects are just a collection key/value pairs

// let age = 22
// let years = 20
// let future = age + years;
// console.log("In", years, "years,", "I will be", future, "years old");

// let currentYear = 2024
// let birthYear = currentYear - age;

// let quarter = 1 / 4;
// let dollar = quarter * 4;

// let number = 5;
// let remainder = (number % 2);
// let isOdd = (remainder) === 1; // strictly equals
// let isOdd2 = remainder == "1"; // loosel equals

// let one = 1;
// let two = 2;
// let three = 3;
// let four = 4;
// let five = 5;
// let six = 6;
// let seven = 7;
// let eight = 8;
// let nine = 9;
// let ten = 10;

// let isOneEven = one % 2 === 0 && one < 5;
// let isTwoEven = two % 2 === 0 && two < 5;
// let isThreeEven = three % 2 === 0 && three < 5;
// let isFourEven = four % 2 === 0 && four < 5;
// let isFiveEven = five % 2 === 0 && five < 5;
// let isSixEven = six % 2 === 0 && six < 5;
// let isSevenEven = seven % 2 === 0 && seven < 5;
// let isEightEven = eight % 2 === 0 && eight < 5;
// let isNineEven = nine % 2 === 0 && nine < 5;
// let isTenEven = ten % 2 === 0 && ten < 5;

// console.log('is 1 even && less than five?', isOneEven);
// console.log('is two even && less than five?', isTwoEven);
// console.log('is three even && less than five?', isThreeEven);
// console.log('is four even && less than five?', isFourEven);
// console.log('is five even && less than five?', isFiveEven);
// console.log('is six even && less than five?', isSixEven);
// console.log('is seven even && less than five?', isSevenEven);
// console.log('is eight even && less than five?', isEightEven);
// console.log('is nine even && less than five?', isNineEven);
// console.log('is ten even && less than five?', isTenEven);

// let x = 5
// let y = 12

// let isXY = x > 10 || y > 10;
// console.log('is x or y greater than 10?', isXY);

// const number = 11;
// const hasDriversLicense = false;
// const isOfAge = age >= 16;

// if (isOfAge && hasDriversLicense) {
//     console.log("I can drive!")
// } else {
//     console.log("I cant drive!")
// }

// const number = "asdkasd";
// if (number === 0) {
//     console.log (0);
// } else if (number % 2 === 0) {
//     console.log ("Even");
// } else if(number % 2 === 1) {
//     console.log ("Odd");
// } else {
//     console.log ("Nothing");
// }

//  const hour = -2;
// if (hour >= 6 && hour < 12) {
//     console.log("Good Morning");
// } else if (hour >= 12 && hour < 18) {
//      console.log("Good Afternoon");
//  } else if (hour > 18 && hour <= 24) {
// console.log("Good evening");
//  } else if ( hour >= 0 || hour < 6) {
//      console.log("Good evening")
//  } else {
//      console.log("NA");
//  }

//  let x = 5;
//  if (true) {
//     x = 8;
//  }
// console.log(x);

// const baum = {
//    courses : ["QA", "web dev", "kids coding"],
//    students : [
//       {name: "Esther", age: 26, enrolled:true},
//       {name: "Josh", age: 20, enrolled: true},
//       {name:"Inchan", age:27, enrolled:true},
//       {name:"DJ", age:42, enrolled:true}
//    ],
//       currentPeriod: "Fall2024"
//    }; //If baum offers "QA" as a course, print out all of the students names

// if (baum.courses[0]=== "QA"){
// console.log(baum.students[0].name, baum.students[0].age, baum.students[0].enrolled);
// console.log(baum.students[1].name, baum.students[1].age, baum.students[1].enrolled);
// }

// const baumAcademy = {
//    courses: ["Web", "QA", "Kids-Coding"],
//    classHour: {
//      tuesday: {
//        day: "tuesday",
//        startHour: "6pm",
//        endHour: "9pm",
//        isLunchTime: false
//      },
//      thursday: {
//        day: "thursday",
//        startHour: "6pm",
//        endHour: "9pm",
//        isLunchTime: false
//      },
//      saturday: {
//        day: "saturday",
//        startHour: "10am",
//        endHour: "3pm",
//        isBreakTime: true
//      }
//    }
//  }
// if(baumAcademy.classHour.tuesday === "tuesday");
// console.log(baumAcademy.classHour.tuesday.day + ",", "class hour is from", baumAcademy.classHour.tuesday.startHour, "to", baumAcademy.classHour.tuesday.endHour);
// if(baumAcademy.classHour.thursday === "thursday");
// console.log(baumAcademy.classHour.thursday.day + ",", "class hour is from", baumAcademy.classHour.thursday.startHour, "to", baumAcademy.classHour.thursday.endHour);
// if(baumAcademy.classHour.saturday === "saturday");
// console.log(baumAcademy.classHour.saturday.day + ",", "class is from", baumAcademy.classHour.saturday.startHour, "to", baumAcademy.classHour.saturday.endHour);

// if (baumAcademy.classHour.tuesday.isLunchTime){
//   console.log("we have lunch time");
// } else {
//   console.log("we dont have lunch time");
// }
// if (baumAcademy.classHour.thursday.isLunchTime){
//   console.log("we have lunch time");
// } else {
//   console.log("we dont have lunch time");
// }

// triple equals makes sure that both value and data types are equal
// double equals just makes sure that the value is equal

// console.log(quarter);
// console.log("I was born in the year", birthYear);

// console.log("Start");
// console.log("Middle");
// console.log("End");

// let ageRange;
// const age = 200
// if (age >= 0 && age <= 1){
//   console.log("infant");
// } else if (age >=1 && age <= 4){
//   console.log("toddler");
// } else if (age >= 4 && age <= 10){
//   console.log("kid");
// } else if (age >= 10 && age <= 20){
//   console.log("teenager");
// } else if (age >= 20 && age <= 30){
//   console.log("gen z");
// } else if (age < 0){
//   console.log("not born yet");
// } else if (age >100){
//   console.log("passed away");
// } else{
//   console.log("grandpa")
// }

// and console.log ageRange
// please share the output of your age in the comments

// const info = {
//   favoriteFoods: ["chicken", "pizza", "sushi", "rice"],
//   pets: {
//   firstPet: "dog",
//   }
// }
// if (info.pets.firstPet === "dog"){
//   console.log(Object.values(info));
// }

// const obj = {};
// obj.name = 'josh'
// console.log(obj);

// let number = 1;

// while (number < 100){
//   console.log(number);
//   number = number + 1;
// }

// let array = ["DJ", "Marco", "Phil", "DC", "Esther", "Josh"];
// let index = 0;
// array.length // 6

// while(index < array.length){
//   console.log(array[index]);
//   index = index + 1;
// }

// let number = 1;

// while(number < 50){
//   if (number % 2 === 0){
//     console.log(number);
//   }
// number = number + 1;
// }

//  const baum = [{name: "josh", age: 22}, {name: 'marco', age: 36}, {name: 'matthew', age: 39}, {name: 'inchan', age: 38}]
//  let index = 0;
//  while(index < baum.length){
//    console.log(baum[index].name, baum[index].age);
//    index = index +1;
//  }

// const baum = [{name: "josh", age: 22}, {name: 'marco', age: 36}, {name: 'matthew', age: 39}, {name: 'inchan', age: 38}]
// let number = 50;
// while(number > 0){
//   if(number % 2 === 1){
//   console.log(number);
//   }
//   number = number - 1;
// }

//  const names = ["phil", "esther", "josh", "miran"];
//  for(i = 0; i < names.length; i++){
//     if(i === names.length - 1);
//     console.log(names[i]);
//   }

// const array = [...Array(1634).keys()];
// for (i = 0; i < array.length; i++) {
//   if (i === array.length - 1 || i === 0) {
//     console.log(array[i]);
//   }
// }
// const students = [
//   {
//     name: "Phil",
//     course: "Web",
//     days: ["Tuesday", "Thursday", "Saturday"],
//   },
//   {
//     name: "DJ",
//     course: "Web",
//     days: ["Tuesday", "Thursday", "Saturday"],
//   },
//   {
//     name: "DC",
//     course: "QA",
//     days: ["Tuesday", "Thursday", "Saturday"],
//   },
//   {
//     name: "Inchan",
//     course: "QA",
//     days: ["Tuesday", "Thursday", "Saturday"],
//   },
//   {
//     name: "Esther",
//     course: "QA",
//     days: ["Tuesday", "Thursday", "Saturday"],
//   },
//   {
//     name: "Josh",
//     course: "QA",
//     days: ["Tuesday", "Thursday", "Saturday"],
//   },
// ];
// for (i = 0; i < students.length; i++) {
//   if (students[i].course === "QA") {
//     console.log(students[i].name);
//   }
// }

// const students = [
//   {
//     name: "Phil",
//     course: "Web",
//     days: ["Tuesday", "Thursday", "Friday", "Saturday"],
//     hasPriorExperience: true,
//   },
//   {
//     name: "DJ",
//     course: "QA",
//     days: ["Tuesday", "Thursday", "Saturday"],
//     hasPriorExperience: true,
//   },
//   {
//     name: "DC",
//     course: "QA",
//     days: ["Tuesday", "Thursday", "Saturday"],
//     hasPriorExperience: true,
//   },
//   {
//     name: "Inchan",
//     course: "QA",
//     days: ["Tuesday", "Thursday", "Friday", "Saturday"],
//     hasPriorExperience: false,
//   },
//   {
//     name: "Esther",
//     course: "QA",
//     days: ["Tuesday", "Thursday", "Friday", "Saturday"],
//     hasPriorExperience: false,
//   },
//   {
//     name: "Josh",
//     course: "QA",
//     days: ["Tuesday", "Thursday", "Saturday"],
//     hasPriorExperience: false,
//   },
// ];
// let number = 1;
// for (let i = 0; i < students.length; i++) {
//   for (let d = 0; d < students[i].days.length; d++) {
//     if (students[i].days[d] === "Friday") {
//       console.log(
//         number,
//         "student who has class on Friday is",
//         students[i].name
//       );
//       number = number + 1;
//     }
//   }
// }

// for (i = 0; i < students.length; i++) {
//   if (students[i].course === "QA" && students[i].hasPriorExperience === false) {
//     console.log(students[i].name);
//   }
// }
// for (i = 0; i < students.length; i++) {
//   for (d = 0; d < students[i].days.length; d++) {
//     if (students[i].days[d] === "Friday") {
//       console.log(students[i].name);
//     }
//   }
// }
// for (let i = 0; i < students.length; i++) {
//   if (
//     students[i].course === "Web" ||
//     students[i].hasPriorExperience === false
//   ) {
//     console.log(students[i].name);
//   }
// }

// const numbers = [1, 2, 3, 4, 5, 6];
// let numberReverse = [];
// for (let i = numbers.length - 1; i >= 0; i--) {
//   numberReverse.push(numbers[i]);
// }
// console.log(numberReverse);

// const cars = {
//   mercedes: {
//     models: [
//       { name: "C Class", isAvailable: true },
//       { name: "E Class", isAvailable: true },
//       { name: "S Class", isAvailable: true },
//       { name: "G Class", isAvailable: true },
//     ],
//   },
//   honda: {
//     models: [
//       { name: "Pilot", isAvailable: true },
//       { name: "Civic", isAvailable: true },
//       { name: "Accord", isAvailable: true },
//     ],
//   },
//   tesla: {
//     models: [
//       { name: "Model 3", isAvailable: false },
//       { name: "Model S", isAvailable: false },
//       { name: "Model Y", isAvailable: false },
//       { name: "Cyber Truck", isAvailable: false },
//     ],
//   },
// };
// for (let i = 0; i < cars.tesla.models.length; i++) {
//   console.log(cars.tesla.models[i].name);
// }

// const keys = Object.keys(cars);
// for (let i = 0; i < keys.length; i++) {
//   for (let j = 0; j < cars[keys[i]].models.length; j++) {
//     if (cars[keys[i]].models[j].isAvailable) {
//       console.log(cars[keys[i]].models[j].name);
//     }
//   }
// }
// for of for arrays
// for (const car of tesla) {
//   console.log(car.name);
// }

// const numbers = [1, 2, 3, 4, 5];
// for (const number of numbers) {
//   console.log(number);
// }
// // for in for objects
// for (const car in cars) {
//   const models = cars[car].models;
//   for (const model of models) {
//   }
// }
// let tesla = [
//   { name: "Model 3", isAvailable: true },
//   { name: "Model S", isAvailable: false },
//   { name: "Model Y", isAvailable: true },
//   { name: "Cyber Truck", isAvailable: false },
//   { name: "Model X", isAvailable: false },
// ];
// for (const car of tesla) {
//   if (car.isAvailable) {
//     console.log(car.name);
//   }
// }
// let newCar = ["Model A"];
// for (t = 0; t < tesla.length; t++) {
//   newCar.push(tesla[t].name);
// }
// tesla.push({ name: "Model A", isAvailable: true });
// console.log(tesla);

// const numbers = [1, 2, 3, 4, 5, 6];
// for (const num of numbers) {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
// }
// const number = [5, 67, 10, 25, 17, 9, 3, 21, 64, 78];
// let bigNumber = number[0];
// for (let i = 0; i < number.length; i++) {
//   if (number[i] > bigNumber) {
//     bigNumber = number[i];
//   }
// }
// console.log(bigNumber);

// const number = [5, 67, 10, 25, 17, 9, 3, 21, 64, 78];
// let smallNumber = number[0];
// for (i = 0; i < number.length; i++) {
//   if (number[i] < smallNumber) {
//     smallNumber = number[i];
//   }
// }
// console.log(smallNumber);

// const numbers = [5, 67, 10, 25, 17, 9, 3, 21, 64, 78];
// let bigNumber = 0;
// let secondNumber = 0;
// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] > bigNumber) {
//     secondNumber = bigNumber;
//     bigNumber = numbers[i];
//   } else if (numbers[i] > secondNumber && numbers[i] !== bigNumber) {
//     secondNumber = numbers[i];
//   }
// }
// console.log(bigNumber, secondNumber);

// const homes = [
//   { state: "Virginia", sold: 130 },
//   { state: "Maryland", sold: 34 },
//   { state: "New York", sold: 63 },
//   { state: "California", sold: 100 },
//   { state: "New Jersey", sold: 234 },
// ];
// let total = homes[0].sold;
// for (let i = 1; i < homes.length; i++) {
//   total += homes[i].sold;
// }
// console.log(total);

// const homesList = [
//   { state: "Virginia", sold: 13000 },
//   { state: "Maryland", sold: 34 },
//   { state: "New York", sold: 63 },
//   { state: "California", sold: 100 },
//   { state: "New Jersey", sold: 234 },
// ];

// function home(homes) {
//   let total = homes[0].sold;
//   for (let i = 1; i < homes.length; i++) {
//     total += homes[i].sold;
//   }
//   console.log(total);
// }
// home(homesList);

// function myName(name) {
//   console.log("Hello my name is" + name);
// }
// myName("Josh");

// function myAge() {
//   console.log(22);
// }
// myAge();

// function multiply(num1, num2) {
//   console.log(num1 * num2);
// }
// multiply(12, 12);

// function greetings(arg1, repeat) {
//   for (let i = 0; i < repeat; i++) console.log(arg1);
// }
// greetings("hello", 3);

// function birthYear(age) {
//   const currentYear = 2024;
//   const birthYear = 2024 - age;
//   console.log(birthYear);
// }
// birthYear(22);

// function getOddEvenNumber(num) {
//   if (num === 0) {
//     console.log("number is", num);
//   } else if (num % 2 === 1) {
//     console.log(num, "is odd");
//   } else {
//     console.log(num, "is even");
//   }
// }
// getOddEvenNumber(9);

// function countCharacters(str) {
//   console.log(str.length);
// }

// countCharacters("Joshua");

// function max(a, b) {
//   if (a > b) {
//     console.log(a);
//   } else if (b > a) {
//     console.log(b);
//   }
// }
// max(99, 100);

// function minutesToSeconds(minutes) {
//   console.log(minutes * 60);
// }
// minutesToSeconds(10);

// function sumArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = arr[i] + sum;
//   }
// }
// sumArray;

// let studentList = [
//   {
//     name: "Matthew Seo",
//     gender: "Male",
//     age: 39,
//     position: "President",
//     currentJob: "CPA",
//     id: 1,
//   },
//   {
//     name: "Marco Seo",
//     gender: "Male",
//     age: 36,
//     position: "Instructor",
//     currentJob: "Developer",
//     id: 2,
//   },
//   {
//     name: "Phillip Lee",
//     gender: "Male",
//     age: 39,
//     position: "Instructor",
//     currentJob: "Developer",
//     id: 3,
//   },
//   {
//     name: "Inchan Choi",
//     gender: "Male",
//     age: 38,
//     position: "Employee",
//     currentJob: "Sole proprietorship",
//     id: 4,
//   },
//   {
//     name: "Joshua Lee",
//     gender: "Male",
//     age: 22,
//     position: "Student",
//     currentJob: "Student",
//     id: 5,
//   },
//   {
//     name: "Esther Chung",
//     gender: "Female",
//     age: 36,
//     position: "Student",
//     currentJob: "Teacher",
//     id: 6,
//   },
//   {
//     name: "Monica Lee",
//     gender: "Female",
//     age: 45,
//     position: "Student",
//     currentJob: "Admin",
//     id: 7,
//   },
// ];

// function addStudents(studentsArray) {
//   let lastAvailableId = studentList[studentList.length - 1].id;
//   for (let i = 0; i < studentsArray.length; i++) {
//     // make sure to increment each users id
//     // make sure we only push name, gender, age, position, currentJob, and id
//     const noInfo = "Not found";
//     lastAvailableId = lastAvailableId + 1;
//     const newStudent = {
//       name: studentsArray[i].name || noInfo,
//       gender: studentsArray[i].gender || noInfo,
//       age: studentsArray[i].age || noInfo,
//       position: studentsArray[i].position || noInfo,
//       currentJob: studentsArray[i].currentJob || noInfo,
//       id: lastAvailableId,
//     };
//     studentList.push(newStudent);
//   }
// }

// function removeStudent(names) {
//   const newStudentList = [];
//   for (let i = 0; i < studentList.length; i++) {
//     if (names.includes(studentList[i].name) === false) {
//       // make sure name is not included in the names array
//       newStudentList.push(studentList[i]);
//     }
//   }
//   studentList = newStudentList;
// }
// removeStudent(["Monica Lee"]);
// console.log(studentList);
//loop over studentList
// Check through studentList.name
// if it doesnt matches a certain name, then push to new student list

// addStudents([
//   {
//     name: "Peter",
//     age: 26,
//     position: "Student",
//     currentJob: "Police officer",
//     address: "123 main st",
//   },
//   {
//     name: "Sarah",
//     age: 21,
//     position: "Student",
//     currentJob: "Student",
//   },
// ]);
// removeStudent("Sarah");
// addStudents([
//   {
//     name: "John",
//     age: 28,
//     position: "Student",
//     currentJob: "Teacher",
//   },
// ]);
// console.log(studentList);
// console.log("DJ Seo");
// let myName = "DJ Seo";
// console.log(myName.split(""));
// function blah(arg1) {
//   // do this step first
//   const turn = 'djsdf'
//   // if something
//   if
//   // otherwise, do this
//   // then return something
// }

// function multiplyTwo(numbers) {
//   const num = [];
//   for (let i = 0; i < numbers.length; i++) {
//     num.push(numbers[i] * 2);
//   }
//   console.log(num);
// }
// multiplyTwo([2, 4, 6, 8]);

// function sumArray(arr) {
//   let num = 0;
//   for (let i = 0; i < arr.length; i++) {
//     num = num + arr[i];
//   }
//   console.log(num);
// }
// sumArray([23, 14, 24, 1]);

// const twitter = {
//   tweets: [
//     {
//       userId: 1,
//       content: "Twitter is awesome!",
//     },
//     {
//       userId: 1,
//       content: "Man, twitter sucks!",
//     },
//     {
//       userId: 2,
//       content: "What is twitter?",
//     },
//   ],
//   users: [
//     {
//       id: 1,
//       name: "Phil",
//     },
//     {
//       id: 2,
//       name: "Marco",
//     },
//   ],
// };

// 1st arg, tweets
// 2nd arg, userid
// loop over tweets, if userId = 1, post the tweet
// function number(tweet, user) {
//   for (let i = 0; i < tweet.length; i++) {
//     if (user === tweet[i].userId) {
//       console.log(tweet[i].content);
//     }
//   }
// }
// number(twitter.tweets, 2);

// function largerNumber(num1, num2) {
//   if (num1 > num2 || num2 > num1) {
//     console.log();
//   }
// }
// largerNumber(8, 10);
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
// }

// const users = [
//   {
//     id: 1,
//     name: "Alice",
//     age: 25,
//     email: "alice@example.com",
//     isActive: true,
//   },
//   {
//     id: 2,
//     name: "Bob",
//     age: 30,
//     email: "bob@example.com",
//     isActive: false,
//   },
//   {
//     id: 3,
//     name: "Charlie",
//     age: 28,
//     email: "charlie@example.com",
//     isActive: true,
//   },
// ];

// for (let i = 0; i < users.length; i++) {
//   if (users[i].isActive) {
//     console.log(users[i].name);
//   }
// }

// const products = [
//   {
//     id: 101,
//     name: "Laptop",
//     price: 799.99,
//     category: "Electronics",
//     inStock: true,
//   },
//   {
//     id: 102,
//     name: "Smartphone",
//     price: 599.99,
//     category: "Electronics",
//     inStock: false,
//   },
//   {
//     id: 103,
//     name: "Headphones",
//     price: 199.99,
//     category: "Accessories",
//     inStock: true,
//   },
// ];

// let highestPrice = 0;
// let highestProductName = "";
// for (let i = 0; i < products.length; i++) {
//   if (products[i].price > highestPrice) {
//     highestPrice = products[i].price;
//     highestProductName = products[i].name;
//     console.log(highestProductName);
//     console.log(highestPrice);
//   }
// }

// const events = [
//   {
//     eventId: 1,
//     name: "Conference",
//     date: "2024-05-15",
//     location: "New York",
//     attendees: ["Alice", "Charlie"],
//   },
//   {
//     eventId: 2,
//     name: "Workshop",
//     date: "2024-06-20",
//     location: "San Francisco",
//     attendees: ["Bob"],
//   },
//   {
//     eventId: 3,
//     name: "Meetup",
//     date: "2024-07-10",
//     location: "Toronto",
//     attendees: ["Alice", "Ethan", "George"],
//   },
//   {
//     eventId: 4,
//     name: "Seminar",
//     date: "2024-08-05",
//     location: "Vancouver",
//     attendees: ["Charlie", "Diana"],
//   },
//   {
//     eventId: 5,
//     name: "Networking",
//     date: "2024-09-15",
//     location: "London",
//     attendees: ["Fiona", "George"],
//   },
//   {
//     eventId: 6,
//     name: "Webinar",
//     date: "2024-10-20",
//     location: "Online",
//     attendees: ["Alice", "Bob", "Charlie", "Diana"],
//   },
//   {
//     eventId: 7,
//     name: "Hackathon",
//     date: "2024-11-01",
//     location: "Sydney",
//     attendees: ["Ethan", "Fiona"],
//   },
// ];
// for (let i = 0; i < events.length; i++) {
//   if (events[i].attendees.includes("Alice")) {
//     console.log(events[i].name);
//   }
// }
// for (let i = 0; i < events.length; i++) {
//   if (events[i].attendees.includes("George")) {
//     console.log(events[i].name, events[i].location, events[i].date);
//   }
// }

// const orders = [
//   {
//     orderId: 1001,
//     userId: 1,
//     productIds: [101, 103],
//     totalAmount: 999.98,
//     status: "Shipped",
//   },
//   {
//     orderId: 1002,
//     userId: 2,
//     productIds: [102],
//     totalAmount: 599.99,
//     status: "Pending",
//   },
//   {
//     orderId: 1003,
//     userId: 3,
//     productIds: [104, 106],
//     totalAmount: 499.98,
//     status: "Delivered",
//   },
//   {
//     orderId: 1004,
//     userId: 4,
//     productIds: [105, 107],
//     totalAmount: 649.98,
//     status: "Canceled",
//   },
//   {
//     orderId: 1005,
//     userId: 5,
//     productIds: [101, 105],
//     totalAmount: 1299.98,
//     status: "Shipped",
//   },
//   {
//     orderId: 1006,
//     userId: 6,
//     productIds: [103, 106],
//     totalAmount: 399.98,
//     status: "Pending",
//   },
// ];

// for (let i = 0; i < orders.length; i++) {
//   if (orders[i].status === "Shipped") {
//     console.log(orders[i].orderId);
//   }
// }

// for (let i = 0; i < orders.length; i++) {
//   if (orders[i].status.includes("Pending")) {
//     console.log(orders[i].userId);
//   }
// }
// let sum = 0;
// for (let i = 0; i < orders.length; i++) {
//   if (orders[i].status.includes("Shipped")) {
//     sum = orders[i].totalAmount + sum;
//   }
// }
// console.log(sum);

// let sum = 0;
// for (let i = 0; i < orders.length; i++) {
//   if (
//     orders[i].status.includes("Shipped") ||
//     orders[i].status.includes("Delivered") ||
//     orders[i].status.includes("Pending")
//   ) {
//     sum = orders[i].totalAmount + sum;
//   }
// }
// console.log(sum);

// function minToHour(minutes) {
//   // console.log(minutes / 60);
//   return Math.round(minutes / 60);
// }
// const hour = minToHour(70);
// const rounded = Math.round(hour);
// console.log(rounded);

// function convertSeconds(num, time) {
//   switch (time) {
//     case "m":
//       return num * 60;
//     case "h":
//       return num * 60 * 60;
//     case "d":
//       return num * 24 * 60 * 60;

//     default:
//       return "invalid time format";
//   }
// }
// const minutes = convertSeconds(5, "m");
// const hours = convertSeconds(2, "h");
// const days = convertSeconds(1, "d");
// console.log(minutes);
// console.log(hours);
// console.log(days);

const orders = [
  {
    id: 1,
    customer: "Alice Smith",
    total: 120.5,
    items: 3,
    date: "2024-11-01",
    status: "Shipped",
  },
  {
    id: 2,
    customer: "Bob Johnson",
    total: 45.0,
    items: 1,
    date: "2024-11-02",
    status: "Pending",
  },
  {
    id: 3,
    customer: "Carol Williams",
    total: 78.99,
    items: 2,
    date: "2024-11-03",
    status: "Delivered",
  },
  {
    id: 4,
    customer: "David Brown",
    total: 150.0,
    items: 4,
    date: "2024-11-04",
    status: "Canceled",
  },
  {
    id: 5,
    customer: "Eve Davis",
    total: 99.5,
    items: 2,
    date: "2024-11-05",
    status: "Shipped",
  },
  {
    id: 6,
    customer: "Frank Wilson",
    total: 230.7,
    items: 5,
    date: "2024-11-06",
    status: "Delivered",
  },
  {
    id: 7,
    customer: "Grace Lee",
    total: 54.3,
    items: 1,
    date: "2024-11-07",
    status: "Pending",
  },
  {
    id: 8,
    customer: "Henry Walker",
    total: 80.0,
    items: 2,
    date: "2024-11-08",
    status: "Shipped",
  },
  {
    id: 9,
    customer: "Isabella Hall",
    total: 20.0,
    items: 1,
    date: "2024-11-09",
    status: "Pending",
  },
  {
    id: 10,
    customer: "Jack Young",
    total: 150.4,
    items: 3,
    date: "2024-11-10",
    status: "Delivered",
  },
  {
    id: 11,
    customer: "Kelly King",
    total: 120.75,
    items: 3,
    date: "2024-11-11",
    status: "Canceled",
  },
  {
    id: 12,
    customer: "Leo Allen",
    total: 200.5,
    items: 4,
    date: "2024-11-12",
    status: "Shipped",
  },
  {
    id: 13,
    customer: "Mona Wright",
    total: 55.0,
    items: 1,
    date: "2024-11-13",
    status: "Pending",
  },
  {
    id: 14,
    customer: "Nathan Green",
    total: 74.8,
    items: 2,
    date: "2024-11-14",
    status: "Delivered",
  },
  {
    id: 15,
    customer: "Olivia Adams",
    total: 99.9,
    items: 2,
    date: "2024-11-15",
    status: "Shipped",
  },
  {
    id: 16,
    customer: "Peter Nelson",
    total: 140.0,
    items: 3,
    date: "2024-11-16",
    status: "Pending",
  },
  {
    id: 17,
    customer: "Quincy Carter",
    total: 60.4,
    items: 1,
    date: "2024-11-17",
    status: "Canceled",
  },
  {
    id: 18,
    customer: "Rachel Mitchell",
    total: 170.6,
    items: 4,
    date: "2024-11-18",
    status: "Delivered",
  },
  {
    id: 19,
    customer: "Sam Baker",
    total: 85.3,
    items: 2,
    date: "2024-11-19",
    status: "Shipped",
  },
  {
    id: 20,
    customer: "Tina Roberts",
    total: 65.5,
    items: 1,
    date: "2024-11-20",
    status: "Pending",
  },
  {
    id: 21,
    customer: "Uma Scott",
    total: 100.0,
    items: 2,
    date: "2024-11-21",
    status: "Delivered",
  },
  {
    id: 22,
    customer: "Victor Morris",
    total: 135.5,
    items: 3,
    date: "2024-11-22",
    status: "Canceled",
  },
  {
    id: 23,
    customer: "Wendy Cook",
    total: 50.0,
    items: 1,
    date: "2024-11-23",
    status: "Pending",
  },
  {
    id: 24,
    customer: "Xander Hayes",
    total: 145.3,
    items: 3,
    date: "2024-11-24",
    status: "Shipped",
  },
  {
    id: 25,
    customer: "Yara Long",
    total: 90.8,
    items: 2,
    date: "2024-11-25",
    status: "Delivered",
  },
  {
    id: 26,
    customer: "Zane Brooks",
    total: 115.6,
    items: 2,
    date: "2024-11-26",
    status: "Shipped",
  },
];

// function getOrderByStatus(Status) {
//   const filteredOrders = [];
//   for (let i = 0; i < orders.length; i++) {
//     if (orders[i].status === Status) {
//       filteredOrders.push(orders[i]);
//     }
//   }
//   return filteredOrders;
// }
// const filtered = getOrderByStatus("Delivered");
// console.log(filtered);

// function getOrderByMaxPrice(max) {
//   const maxPrice = [];
//   for (let i = 0; i < orders.length; i++) {
//     if (orders[i].total < max) {
//       maxPrice.push(orders[i]);
//     }
//   }
//   return maxPrice;
// }
// const maxOrders = getOrderByMaxPrice(100);
// console.log(maxOrders);

// function getOrderByMinPrice(min) {
//   const minPrice = [];
//   for (let i = 0; i < orders.length; i++) {
//     if (orders[i].total > min) {
//       minPrice.push(orders[i]);
//     }
//   }
//   return minPrice;
// }
// const minOrders = getOrderByMinPrice(200);
// console.log(minOrders);

// function getNumberOne() {
//   return 1;
// }
// const one = getNumberOne();
// console.log(one);

// function getUserTweets(userId) {
//   const twitter = {
//     tweets: [
//       {
//         userId: 1,
//         content: "Twitter is awesome!",
//       },
//       {
//         userId: 1,
//         content: "Man, twitter sucks!",
//       },
//       {
//         userId: 2,
//         content: "What is twitter?",
//       },
//     ],
//     users: [
//       {
//         id: 1,
//         name: "Phil",
//       },
//       {
//         id: 2,
//         name: "Marco",
//       },
//     ],
//   };
//   let tweetss = [];
//   for (let i = 0; i < twitter.tweets.length; i++) {
//     if (twitter.tweets[i].userId === userId) {
//       tweetss.push(twitter.tweets[i].content);
//     }
//   }
//   return tweetss;
// }
// const tweets = getUserTweets(3);
// console.log(tweets);

// //take an array of tweets, only return the first tweet
// function getFirstTweet(first) {
//   // if (first.length === 0) {
//   //   return "no tweets are found";
//   // }
//   return first[0];
// }
// const firstTweet = getFirstTweet(tweets);
// console.log(firstTweet);

// function sayHello() {
//   return "Hello, World!";
// }

// console.log(sayHello());

// function add(num1, num2) {
//   return num1 + num2;
// }
// console.log(add(1, 2));

// function square(num1) {
//   return num1 * num1;
// }
// console.log(square(12));

// function isEven(num1) {
//   return num1 % 2 === 0;
// }
// console.log(isEven(3));

// function max(num1, num2) {
//   if (num1 > num2) {
//     return num1;
//   } else {
//     return num2;
//   }
// }
// console.log(max(3, 2));

// function getArrayLength(array) {
//   return array.length;
// }
// console.log(getArrayLength([2, 4, 6]));

//function async, await, promises

// function getHighestNumber(array) {
//   let highest = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > highest) {
//       highest = array[i];
//     }
//   }
//   return highest;
// }
// console.log(getHighestNumber([10, 4, 6, 8]));

// function getLongestText(strings) {
//   let string = strings[0];
//   for (let i = 0; i < strings.length; i++) {
//     if (strings[i].length > string.length) {
//       string = strings[i];
//     }
//   }
//   return string;
// }
// console.log(getLongestText(["baseball", "basketball", "football", "soccer"]));

// function addValueToArray(strings, string) {
//   strings.push(string);
//   return strings;
// }
// const array = ["phone", "wallet", "keys"];
// const newString = "airpods";
// console.log(addValueToArray(array, newString));

// function helloYourName(first, last) {
//   console.log("Hello,", first, last + "!");
// }
// helloYourName("Joshua", "Lee");

// function convertStringToArray(string) {
//   let array = [];
//   for (let i = 0; i < string.length; i++) {
//     array.push(string[i]);
//   }
//   return array;
// }
// console.log(convertStringToArray("Hello"));

// function removeDuplicates(arr) {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!newArray.includes(arr[i])) {
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;
// }
// console.log(removeDuplicates([1, 3, 5, 7, 3, 5]));

// function calculateGrade(score) {
//   if (score >= 90) {
//     return "A";
//   } else if (score >= 80) {
//     return "B";
//   } else if (score >= 70) {
//     return "C";
//   } else if (score >= 60) {
//     return "D";
//   } else {
//     return "F";
//   }
// }
// console.log(calculateGrade(88));

// function createUser(name, age, gender) {
//   if (typeof name !== "string") {
//     return "name must be a string";
//   } else if (typeof age !== "number") {
//     return "age must be a number";
//   } else if (gender !== "male" && gender !== "female") {
//     return "gender must be male or female";
//   } else {
//     return {
//       name: name,
//       age: age,
//       gender: gender,
//     };
//   }
// }
// console.log(createUser("Joshua Lee", 22, "male"));

// const findLetterIndex = (string, char) => {
//   let letter = [];
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === char) {
//       letter.push(i);
//     }
//   }
//   return letter;
// };
// console.log(findLetterIndex("apple", "p"));

// const findVowelIndices = (string) => {
//   const vowels = "a, e, i, o, u";
//   const num = [];
//   for (let i = 0; i < string.length; i++) {
//     if (vowels.includes(string[i])) {
//       num.push(i);
//     }
//   }
//   return num;
// };
// console.log(findVowelIndices("apartment"));

// const countCharacter = (string, char) => {
//   let num = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === char) {
//       num++;
//     }
//   }
//   return num;
// };
// console.log(countCharacter("apple", "p"));

// const containsLetter = (string, char) => {
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === char) {
//       return true;
//     }
//   }
//   return false;
// };
// console.log(containsLetter("hello", "e"));

// const splitIntoChunks = (string, num) => {
//   let letter = "";
//   let chunks = [];
//   for (let i = 0; i < string.length; i++) {
//     if ((i + 1) % num === 0) {
//       letter = letter + string[i];
//       chunks.push(letter);
//       letter = "";
//     } else {
//       letter = letter + string[i];
//     }
//   }
//   chunks.push(letter);

//   return chunks;
// };

// console.log(splitIntoChunks("Hello World", 3));

// const findDivisible = (num, div) => {
//   let numbers = [];
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] % div === 0) {
//       numbers.push(num[i]);
//     }
//   }
//   return numbers;
// };
// console.log(findDivisible([10, 15, 20, 25, 30], 3));

// const countEvenOdd = (num) => {
//   let even = 0;
//   let odd = 0;
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] % 2 === 0) {
//       even++;
//     } else if (num[i] % 2 === 1) {
//       odd++;
//     }
//   }
//   return {
//     even: even,
//     odd: odd,
//   };
// };
// console.log(countEvenOdd([11, 16, 21, 41, 45, 52]));

// const twoNumbersAddToTarget = (num, target) => {};
// console.log(twoNumbersAddToTarget([1, 2, 4, 3, 5], 7));

// const students = [
//   {
//     name: "Alice Johnson",
//     email: "alice.johnson@example.com",
//     age: 20,
//     occupation: "Student",
//     GPA: 3.8,
//   },
//   {
//     name: "Bob Smith",
//     email: "bob.smith@example.com",
//     age: 22,
//     occupation: "Intern",
//     GPA: 3.5,
//   },
//   {
//     name: "Charlie Brown",
//     email: "charlie.brown@example.com",
//     age: 19,
//     occupation: "Student",
//     GPA: 3.9,
//   },
//   {
//     name: "Diana Prince",
//     email: "diana.prince@example.com",
//     age: 21,
//     occupation: "Part-time Worker",
//     GPA: 3.7,
//   },
//   {
//     name: "Ethan Hunt",
//     email: "ethan.hunt@example.com",
//     age: 23,
//     occupation: "Student",
//     GPA: 3.6,
//   },
//   {
//     name: "Fiona Green",
//     email: "fiona.green@example.com",
//     age: 20,
//     occupation: "Intern",
//     GPA: 3.8,
//   },
//   {
//     name: "George Lucas",
//     email: "george.lucas@example.com",
//     age: 24,
//     occupation: "Freelancer",
//     GPA: 3.4,
//   },
//   {
//     name: "Hannah Davis",
//     email: "hannah.davis@example.com",
//     age: 22,
//     occupation: "Student",
//     GPA: 3.9,
//   },
//   {
//     name: "Ivy Adams",
//     email: "ivy.adams@example.com",
//     age: 21,
//     occupation: "Research Assistant",
//     GPA: 4.0,
//   },
//   {
//     name: "Jack Wilson",
//     email: "jack.wilson@example.com",
//     age: 19,
//     occupation: "Student",
//     GPA: 3.3,
//   },
//   {
//     name: "Kara Kent",
//     email: "kara.kent@example.com",
//     age: 20,
//     occupation: "Intern",
//     GPA: 3.7,
//   },
//   {
//     name: "Liam King",
//     email: "liam.king@example.com",
//     age: 23,
//     occupation: "Part-time Worker",
//     GPA: 3.6,
//   },
//   {
//     name: "Mia Wong",
//     email: "mia.wong@example.com",
//     age: 21,
//     occupation: "Freelancer",
//     GPA: 3.8,
//   },
//   {
//     name: "Noah Patel",
//     email: "noah.patel@example.com",
//     age: 22,
//     occupation: "Student",
//     GPA: 3.5,
//   },
//   {
//     name: "Olivia Taylor",
//     email: "olivia.taylor@example.com",
//     age: 19,
//     occupation: "Student",
//     GPA: 4.0,
//   },
//   {
//     name: "Peter Parker",
//     email: "peter.parker@example.com",
//     age: 20,
//     occupation: "Student",
//     GPA: 3.6,
//   },
//   {
//     name: "Quinn Blake",
//     email: "quinn.blake@example.com",
//     age: 23,
//     occupation: "Research Assistant",
//     GPA: 3.9,
//   },
//   {
//     name: "Riley Cooper",
//     email: "riley.cooper@example.com",
//     age: 21,
//     occupation: "Freelancer",
//     GPA: 3.8,
//   },
//   {
//     name: "Sophia Carter",
//     email: "sophia.carter@example.com",
//     age: 22,
//     occupation: "Student",
//     GPA: 3.7,
//   },
//   {
//     name: "Thomas Evans",
//     email: "thomas.evans@example.com",
//     age: 19,
//     occupation: "Student",
//     GPA: 3.4,
//   },
//   {
//     name: "Uma Grant",
//     email: "uma.grant@example.com",
//     age: 20,
//     occupation: "Intern",
//     GPA: 3.8,
//   },
//   {
//     name: "Victor Hill",
//     email: "victor.hill@example.com",
//     age: 23,
//     occupation: "Part-time Worker",
//     GPA: 3.6,
//   },
//   {
//     name: "Willow Knight",
//     email: "willow.knight@example.com",
//     age: 21,
//     occupation: "Freelancer",
//     GPA: 3.9,
//   },
//   {
//     name: "Xander Lopez",
//     email: "xander.lopez@example.com",
//     age: 22,
//     occupation: "Research Assistant",
//     GPA: 3.5,
//   },
//   {
//     name: "Yara Moore",
//     email: "yara.moore@example.com",
//     age: 19,
//     occupation: "Student",
//     GPA: 3.8,
//   },
//   {
//     name: "Zara Nelson",
//     email: "zara.nelson@example.com",
//     age: 20,
//     occupation: "Student",
//     GPA: 4.0,
//   },
//   {
//     name: "Aaron Perez",
//     email: "aaron.perez@example.com",
//     age: 21,
//     occupation: "Part-time Worker",
//     GPA: 3.6,
//   },
//   {
//     name: "Bella Quinn",
//     email: "bella.quinn@example.com",
//     age: 23,
//     occupation: "Freelancer",
//     GPA: 3.7,
//   },
//   {
//     name: "Caleb Ross",
//     email: "caleb.ross@example.com",
//     age: 22,
//     occupation: "Student",
//     GPA: 3.4,
//   },
//   {
//     name: "Daisy Stone",
//     email: "daisy.stone@example.com",
//     age: 20,
//     occupation: "Intern",
//     GPA: 3.9,
//   },
//   {
//     name: "Evan Torres",
//     email: "evan.torres@example.com",
//     age: 21,
//     occupation: "Student",
//     GPA: 3.5,
//   },
//   {
//     name: "Faith Underwood",
//     email: "faith.underwood@example.com",
//     age: 19,
//     occupation: "Student",
//     GPA: 3.8,
//   },
//   {
//     name: "Gavin Vega",
//     email: "gavin.vega@example.com",
//     age: 20,
//     occupation: "Research Assistant",
//     GPA: 3.7,
//   },
//   {
//     name: "Harper White",
//     email: "harper.white@example.com",
//     age: 22,
//     occupation: "Freelancer",
//     GPA: 3.6,
//   },
//   {
//     name: "Isaac Young",
//     email: "isaac.young@example.com",
//     age: 23,
//     occupation: "Part-time Worker",
//     GPA: 3.9,
//   },
//   {
//     name: "Jenna Zane",
//     email: "jenna.zane@example.com",
//     age: 21,
//     occupation: "Student",
//     GPA: 4.0,
//   },
//   {
//     name: "Kyle Anderson",
//     email: "kyle.anderson@example.com",
//     age: 19,
//     occupation: "Student",
//     GPA: 3.4,
//   },
//   {
//     name: "Lila Bennett",
//     email: "lila.bennett@example.com",
//     age: 20,
//     occupation: "Intern",
//     GPA: 3.8,
//   },
//   {
//     name: "Mason Clark",
//     email: "mason.clark@example.com",
//     age: 21,
//     occupation: "Research Assistant",
//     GPA: 3.5,
//   },
//   {
//     name: "Nina Diaz",
//     email: "nina.diaz@example.com",
//     age: 22,
//     occupation: "Freelancer",
//     GPA: 3.7,
//   },
//   {
//     name: "Owen Edwards",
//     email: "owen.edwards@example.com",
//     age: 23,
//     occupation: "Part-time Worker",
//     GPA: 3.6,
//   },
//   {
//     name: "Paige Fisher",
//     email: "paige.fisher@example.com",
//     age: 20,
//     occupation: "Student",
//     GPA: 3.9,
//   },
//   {
//     name: "Quincy Garcia",
//     email: "quincy.garcia@example.com",
//     age: 19,
//     occupation: "Student",
//     GPA: 4.0,
//   },
//   {
//     name: "Rose Harper",
//     email: "rose.harper@example.com",
//     age: 21,
//     occupation: "Freelancer",
//     GPA: 3.6,
//   },
//   {
//     name: "Sam Ives",
//     email: "sam.ives@example.com",
//     age: 22,
//     occupation: "Part-time Worker",
//     GPA: 3.8,
//   },
//   {
//     name: "Tina Jones",
//     email: "tina.jones@example.com",
//     age: 23,
//     occupation: "Research Assistant",
//     GPA: 3.7,
//   },
//   {
//     name: "Ulysses Knight",
//     email: "ulysses.knight@example.com",
//     age: 20,
//     occupation: "Student",
//     GPA: 3.5,
//   },
//   {
//     name: "Vera Lane",
//     email: "vera.lane@example.com",
//     age: 19,
//     occupation: "Student",
//     GPA: 3.9,
//   },
//   {
//     name: "Wyatt Morgan",
//     email: "wyatt.morgan@example.com",
//     age: 21,
//     occupation: "Part-time Worker",
//     GPA: 3.4,
//   },
//   {
//     name: "Xenia Neal",
//     email: "xenia.neal@example.com",
//     age: 22,
//     occupation: "Freelancer",
//     GPA: 3.7,
//   },
//   {
//     name: "Yusuf Ortiz",
//     email: "yusuf.ortiz@example.com",
//     age: 23,
//     occupation: "Intern",
//     GPA: 3.6,
//   },
//   {
//     name: "Zoe Parker",
//     email: "zoe.parker@example.com",
//     age: 20,
//     occupation: "Student",
//     GPA: 4.0,
//   },
// ];

// console.log(students);

// function averageGPA() {
//   let total = 0;
//   for (let i = 0; i < students.length; i++) {
//     total = total + students[i].GPA;
//   }
//   const average = total / students.length;
//   return average;
// }
// console.log(averageGPA());

// function gpa() {
//   let list = [];
//   for (let i = 0; i < students.length; i++) {
//     if (students[i].GPA >= 3.9) {
//       list.push(students[i].name);
//     }
//   }
//   return list;
// }
// console.log(gpa());

// function averageGpaAge() {
//   let gpaAverage = 0;
//   // let studentList = [];
//   let studentCount = 0;
//   for (let i = 0; i < students.length; i++) {
//     if (students[i].age > 21) {
//       gpaAverage = gpaAverage + students[i].GPA;
//       studentCount++;
//       studentList.push(students[i].name);
//     }
//   }
//   console.log(studentList.length);
//   console.log(studentCount);
//   const averageList = gpaAverage / studentCount;
//   return averageList;
// }
// console.log(averageGpaAge());

// const findDivisible = (num, div) => {
//   // let numbers = [];
//   // for (let i = 0; i < num.length; i++) {
//   //   if (num[i] % div === 0) {
//   //     numbers.push(num[i]);
//   //   }
//   // }
//   // num.forEach((ele) => {
//   //   if (ele % div === 0) {
//   //     numbers.push(ele);
//   //   }
//   // });
//   const numbers = num.filter((ele) => {
//     // if (ele % div === 0) {
//     //   // numbers.push(ele);
//     //   return true;
//     // }
//     return ele % div === 0;
//   });
//   return numbers;
// };
// console.log(findDivisible([10, 15, 20, 25, 30], 3));

// const replaceOddEven = (number) => {
//   return number.map((num) => {
//     if (num % 2 === 0) {
//       return "Even";
//     } else {
//       return "Odd";
//     }
//   });
// };
// console.log(replaceOddEven([10, 15, 20, 25, 30]));

// const studentss = [
//   {
//     name: "Alice Johnson",
//     email: "alice.johnson@example.com",
//     age: 20,
//     occupation: "Student",
//     GPA: 3.8,
//   },
//   {
//     name: "Bob Smith",
//     email: "bob.smith@example.com",
//     age: 22,
//     occupation: "Intern",
//     GPA: 3.5,
//   },
//   {
//     name: "Charlie Brown",
//     email: "charlie.brown@example.com",
//     age: 19,
//     occupation: "Student",
//     GPA: 3.9,
//   },
//   {
//     name: "Diana Prince",
//     email: "diana.prince@example.com",
//     age: 21,
//     occupation: "Part-time Worker",
//     GPA: 3.7,
//   },
//   {
//     name: "Ethan Hunt",
//     email: "ethan.hunt@example.com",
//     age: 23,
//     occupation: "Student",
//     GPA: 3.6,
//   },
//   {
//     name: "Fiona Green",
//     email: "fiona.green@example.com",
//     age: 20,
//     occupation: "Intern",
//     GPA: 3.8,
//   },
//   {
//     name: "George Lucas",
//     email: "george.lucas@example.com",
//     age: 24,
//     occupation: "Freelancer",
//     GPA: 3.4,
//   },
//   {
//     name: "Hannah Davis",
//     email: "hannah.davis@example.com",
//     age: 22,
//     occupation: "Student",
//     GPA: 3.9,
//   },
//   {
//     name: "Ivy Adams",
//     email: "ivy.adams@example.com",
//     age: 21,
//     occupation: "Research Assistant",
//     GPA: 4.0,
//   },
//   {
//     name: "Jack Wilson",
//     email: "jack.wilson@example.com",
//     age: 19,
//     occupation: "Student",
//     GPA: 3.3,
//   },
//   {
//     name: "Kara Kent",
//     email: "kara.kent@example.com",
//     age: 20,
//     occupation: "Intern",
//     GPA: 3.7,
//   },
//   {
//     name: "Liam King",
//     email: "liam.king@example.com",
//     age: 23,
//     occupation: "Part-time Worker",
//     GPA: 3.6,
//   },
//   {
//     name: "Mia Wong",
//     email: "mia.wong@example.com",
//     age: 21,
//     occupation: "Freelancer",
//     GPA: 3.8,
//   },
//   {
//     name: "Noah Patel",
//     email: "noah.patel@example.com",
//     age: 22,
//     occupation: "Student",
//     GPA: 3.5,
//   },
//   {
//     name: "Olivia Taylor",
//     email: "olivia.taylor@example.com",
//     age: 19,
//     occupation: "Student",
//     GPA: 4.0,
//   },
//   {
//     name: "Peter Parker",
//     email: "peter.parker@example.com",
//     age: 20,
//     occupation: "Student",
//     GPA: 3.6,
//   },
//   {
//     name: "Quinn Blake",
//     email: "quinn.blake@example.com",
//     age: 23,
//     occupation: "Research Assistant",
//     GPA: 3.9,
//   },
//   {
//     name: "Riley Cooper",
//     email: "riley.cooper@example.com",
//     age: 21,
//     occupation: "Freelancer",
//     GPA: 3.8,
//   },
//   {
//     name: "Sophia Carter",
//     email: "sophia.carter@example.com",
//     age: 22,
//     occupation: "Student",
//     GPA: 3.7,
//   },
//   {
//     name: "Thomas Evans",
//     email: "thomas.evans@example.com",
//     age: 19,
//     occupation: "Student",
//     GPA: 3.4,
//   },
//   {
//     name: "Uma Grant",
//     email: "uma.grant@example.com",
//     age: 20,
//     occupation: "Intern",
//     GPA: 3.8,
//   },
//   {
//     name: "Victor Hill",
//     email: "victor.hill@example.com",
//     age: 23,
//     occupation: "Part-time Worker",
//     GPA: 3.6,
//   },
//   {
//     name: "Willow Knight",
//     email: "willow.knight@example.com",
//     age: 21,
//     occupation: "Freelancer",
//     GPA: 3.9,
//   },
//   {
//     name: "Xander Lopez",
//     email: "xander.lopez@example.com",
//     age: 22,
//     occupation: "Research Assistant",
//     GPA: 3.5,
//   },
//   {
//     name: "Yara Moore",
//     email: "yara.moore@example.com",
//     age: 19,
//     occupation: "Student",
//     GPA: 3.8,
//   },
//   {
//     name: "Zara Nelson",
//     email: "zara.nelson@example.com",
//     age: 20,
//     occupation: "Student",
//     GPA: 4.0,
//   },
//   {
//     name: "Aaron Perez",
//     email: "aaron.perez@example.com",
//     age: 21,
//     occupation: "Part-time Worker",
//     GPA: 3.6,
//   },
//   {
//     name: "Bella Quinn",
//     email: "bella.quinn@example.com",
//     age: 23,
//     occupation: "Freelancer",
//     GPA: 3.7,
//   },
//   {
//     name: "Caleb Ross",
//     email: "caleb.ross@example.com",
//     age: 22,
//     occupation: "Student",
//     GPA: 3.4,
//   },
//   {
//     name: "Daisy Stone",
//     email: "daisy.stone@example.com",
//     age: 20,
//     occupation: "Intern",
//     GPA: 3.9,
//   },
//   {
//     name: "Evan Torres",
//     email: "evan.torres@example.com",
//     age: 21,
//     occupation: "Student",
//     GPA: 3.5,
//   },
//   {
//     name: "Faith Underwood",
//     email: "faith.underwood@example.com",
//     age: 19,
//     occupation: "Student",
//     GPA: 3.8,
//   },
//   {
//     name: "Gavin Vega",
//     email: "gavin.vega@example.com",
//     age: 20,
//     occupation: "Research Assistant",
//     GPA: 3.7,
//   },
//   {
//     name: "Harper White",
//     email: "harper.white@example.com",
//     age: 22,
//     occupation: "Freelancer",
//     GPA: 3.6,
//   },
//   {
//     name: "Isaac Young",
//     email: "isaac.young@example.com",
//     age: 23,
//     occupation: "Part-time Worker",
//     GPA: 3.9,
//   },
//   {
//     name: "Jenna Zane",
//     email: "jenna.zane@example.com",
//     age: 21,
//     occupation: "Student",
//     GPA: 4.0,
//   },
//   {
//     name: "Kyle Anderson",
//     email: "kyle.anderson@example.com",
//     age: 19,
//     occupation: "Student",
//     GPA: 3.4,
//   },
//   {
//     name: "Lila Bennett",
//     email: "lila.bennett@example.com",
//     age: 20,
//     occupation: "Intern",
//     GPA: 3.8,
//   },
//   {
//     name: "Mason Clark",
//     email: "mason.clark@example.com",
//     age: 21,
//     occupation: "Research Assistant",
//     GPA: 3.5,
//   },
//   {
//     name: "Nina Diaz",
//     email: "nina.diaz@example.com",
//     age: 22,
//     occupation: "Freelancer",
//     GPA: 3.7,
//   },
//   {
//     name: "Owen Edwards",
//     email: "owen.edwards@example.com",
//     age: 23,
//     occupation: "Part-time Worker",
//     GPA: 3.6,
//   },
//   {
//     name: "Paige Fisher",
//     email: "paige.fisher@example.com",
//     age: 20,
//     occupation: "Student",
//     GPA: 3.9,
//   },
//   {
//     name: "Quincy Garcia",
//     email: "quincy.garcia@example.com",
//     age: 19,
//     occupation: "Student",
//     GPA: 4.0,
//   },
//   {
//     name: "Rose Harper",
//     email: "rose.harper@example.com",
//     age: 21,
//     occupation: "Freelancer",
//     GPA: 3.6,
//   },
//   {
//     name: "Sam Ives",
//     email: "sam.ives@example.com",
//     age: 22,
//     occupation: "Part-time Worker",
//     GPA: 3.8,
//   },
//   {
//     name: "Tina Jones",
//     email: "tina.jones@example.com",
//     age: 23,
//     occupation: "Research Assistant",
//     GPA: 3.7,
//   },
//   {
//     name: "Ulysses Knight",
//     email: "ulysses.knight@example.com",
//     age: 20,
//     occupation: "Student",
//     GPA: 3.5,
//   },
//   {
//     name: "Vera Lane",
//     email: "vera.lane@example.com",
//     age: 19,
//     occupation: "Student",
//     GPA: 3.9,
//   },
//   {
//     name: "Wyatt Morgan",
//     email: "wyatt.morgan@example.com",
//     age: 21,
//     occupation: "Part-time Worker",
//     GPA: 3.4,
//   },
//   {
//     name: "Xenia Neal",
//     email: "xenia.neal@example.com",
//     age: 22,
//     occupation: "Freelancer",
//     GPA: 3.7,
//   },
//   {
//     name: "Yusuf Ortiz",
//     email: "yusuf.ortiz@example.com",
//     age: 23,
//     occupation: "Intern",
//     GPA: 3.6,
//   },
//   {
//     name: "Zoe Parker",
//     email: "zoe.parker@example.com",
//     age: 20,
//     occupation: "Student",
//     GPA: 4.0,
//   },
// ];

// const filterStudents = (students, filterBy, filterValue) => {
//   if (!students[0].hasOwnProperty(filterBy)) {
//     return "stupid mother fucker  invalid filterBy";
//   }
//   return students.filter((students) => students[filterBy] === filterValue);
// };
// console.log(filterStudents(studentss, "occupation", "Student"));

// const venmo = (amount, people) => {
//   const amountPerPerson = (amount / people).toFixed(2);
//   console.log(amountPerPerson);
// };
// venmo(122.01, 6);

// const repeatNum = (num) => {
//   for (let i = 0; i < num.length; i++) {
//     for (let n = i + 1; n < num.length; n++) {
//       if (num[i] === num[n]) {
//         return num[i];
//       }
//     }
//   }
//   return -1;
// };
// console.log(repeatNum([1, 2, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9, 10]));

// const repeatNumber = (number) => {
//   const firstNumber = {};
//   for (let i = 0; i < number.length; i++) {
//     if (firstNumber[number[i]]) {
//       return number[i];
//     }
//     firstNumber[number[i]] = true;
//   }
// };
// console.log(repeatNumber([1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10]));

// const addTogether = (numbers, target) => {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let n = i + 1; n < numbers.length; n++) {
//       if (numbers[i] + numbers[n] === target) {
//         return true;
//       }
//     }
//   }
//   return false;
// };
// console.log(addTogether([1, 2, 3, 6], 10));

// const anagrams = (s, t) => {
//   if (s.split("").sort().join("") === t.split("").sort().join("")) {
//     return true;
//   }

//   return false;
// };
// console.log(anagrams("racecar", "carrace"));

// const objectana = (s, t) => {
//   const firstString = {};
//   const secondString = {};
//   for (let s = 0; s < s.length; s++) {
//     if(firstString[s[s]]){
//       firstString[s[s]]++;
//     } else {
//       firstString[s[s]] = 1
//     }
//   }
// };
// console.log(objectana("racecar", "racecar"));

// const longestWord = (strings) => {
//   const longestString = {};
//   for (let i = 0; i < strings.length; i++) {
//     if (longestString[strings[i]]) {
//     }
//   }
// };

// const noVowels = (string) => {
//   const vowels = "a, e, i, o, u;
//   const word = "";
//   const newWord = "";
//   for (let i = 0; i < string.length; i++) {
//     if (string[i].includes(vowels)) {
//       word.push(string[i]);
//     } else {
//       newWord.push(string[i]);
//     }
//   }
//   return newWord;
// };
// console.log(noVowels("hello"));

// const moveZero = (numbers) => {
//   const zero = [];
//   const nonZero = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === 0) {
//       zero.push(numbers[i]);
//     } else {
//       nonZero.push(numbers[i]);
//     }
//   }
//   return nonZero.concat(zero);
// };
// console.log(moveZero([0, 1, 0, 3, 12]));

// const oddNumbers = (array) => {
//   let number = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 1) {
//       number++;
//     }
//   }
//   if (number === 1) {
//     return `You gave me ${number} odd number`;
//   } else {
//     return `You gave me ${number} odd numbers`;
//   }
// };
// console.log(oddNumbers([1, 3, 5, 7, 8]));

// const findCommonElement = (arr1, arr2) => {
//   let commonElement = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let t = 0; t < arr2.length; t++) {
//       if (arr1[i] === arr2[t]) {
//         commonElement.push(arr1[i]);
//       }
//     }
//   }
//   return commonElement;
// };
// console.log(findCommonElement([1, 2, 3, 4, 5], [2, 3, 4, 5, 6]));

// const countFrequency = (arr) => {
//   let frequency = {};
//   for (let i = 0; i < arr.length; i++) {
//     let element = arr[i];
//     if (frequency.hasOwnProperty(element)) {
//       frequency[element]++;
//     } else {
//       frequency[element] = 1;
//     }
//   }
//   return frequency;
// };
// console.log(countFrequency([1, 2, 3, 2, 1, 3, 4]));

const add = (a, b) => {
  return a + b;
};
console.log(add(2, 3));

const celsiusToF = (celsius) => {
  return (celsius * 9) / 5 + 32;
};
console.log(celsiusToF(0));

const maxOfTwo = (a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};
console.log(maxOfTwo(10, 20));

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
console.log(isEven(4));

const reverseString = (str) => {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    //loop through the string starting at the end
    reverse = reverse + str[i]; // add each letter to the new variable
  }
  return reverse;
};
console.log(reverseString("Hello"));

const countVowels = (str) => {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
};
console.log(countVowels("Hello World"));

const findLargest = (arr) => {
  let largest = arr[0]; //Start with the first element in the array
  for (let i = 1; i < arr.length; i++) {
    //Loop through the array starting at the second element
    if (arr[i] > largest) {
      // if the element is greater than the set variable
      largest = arr[i]; // if the statement is true then set the element as the new largest
    }
  }
  return largest;
};
console.log(findLargest([3, 2, 11, 7, 9]));

const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(sumArray([1, 2, 3, 4, 5]));

const countPosNegZero = (numbers) => {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) {
      zero++;
    } else if (numbers[i] > 0) {
      positive++;
    } else {
      negative++;
    }
  }
  return { positive, negative, zero };
};
console.log(countPosNegZero([0, -1, 2, -3, 4, 0, -5]));

const groupByParity = (numbers) => {
  let obj = { even: [], odd: [] };
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      obj["even"].push(numbers[i]);
    } else {
      obj["odd"].push(numbers[i]);
    }
  }
  return obj;
};
console.log(groupByParity([1, 2, 3, 4, 5, 6]));

const intArray = (numbers) => {
  let newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    let total = 1;
    for (let t = 0; t < numbers.length; t++) {
      if (i !== t) {
        total = total * numbers[t];
      }
    }
    newArray.push(total);
  }
  return newArray;
};
console.log(intArray([1, 2, 4, 6]));

// const twoSum = (arr, target) => {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let t = i + 1; t < arr.length; t++) {
//       if (arr[i] + arr[t] === target) {
//         newArray.push(arr[i]);
//         newArray.push(arr[t]);
//       }
//     }
//   }
//   return newArray;
// };
// console.log(twoSum([1, 3, 5, 9], 8));

const twoSum = (arr, target) => {
  let hashMap = {};
  for (let i = 0; i < arr.length; i++) {
    console.log(hashMap);
    const remainder = target - arr[i];
    if (hashMap.hasOwnProperty(remainder)) {
      return [hashMap[remainder], arr[i]];
    } else {
      hashMap[arr[i]] = arr[i];
    }
  }
};
console.log(twoSum([1, 3, 5, 9], 8));
