const cars = [
  {
    model: "civic",
    year: 2005,
    seats: 4,
    owners: ["phil", "marco", "dj"],
    cdPlayer: true,
    spareTire: null,
    miles: 200000,
  },
  {
    model: "accord",
    year: 2007,
    seats: 4,
    owners: ["phil"],
    cdPlayer: true,
    spareTire: null,
    miles: 20000,
  },
  {
    model: "ram",
    year: 2024,
    seats: 4,
    owners: ["dj"],
    cdPlayer: true,
    spareTire: 2,
    miles: 200,
  },
  {
    model: "tesla",
    year: 2022,
    seats: 4,
    owners: ["marco"],
    cdPlayer: false,
    spareTire: 1,
    miles: 200,
  },
];

const phil = (car) => {
  const philCars = [];
  for (let i = 0; i < car.length; i++) {
    if (car[i].owners.includes("phil")) {
      philCars.push(car[i].model);
    }
  }
  return philCars;
};
console.log(phil(cars));
