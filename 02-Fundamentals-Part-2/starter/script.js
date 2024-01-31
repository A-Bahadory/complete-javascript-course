// const jonasArray = [
//   "jonas",
//   "bahadory",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "peter", "steven"],
// ];

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// jonas.location = "finland";
// jonas["facebook"] = "www.facebook.com";
// console.log(jonas);
// const jonasFriend = `${jonas.firstName} has 3 friends and his best friend is called ${jonas.friends[0]}`;
// console.log(jonasFriend);

const jonas = {
  firstName: "jonas",
  lastName: "bahadory",
  birthYeah: 1991,
  job: "coder",
  friends: ["Micheal", "peter", "steven"],
  hasDriverLicense: false,

  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // }

  // this key word is equal to the object calling the method
  calcAge: function () {
    //console.log(this);
    return 2037 - this.birthYeah;
  },
  getSummary: function () {
    return `${this.firstName} is ${this.calcAge()} years old ${
      this.job
    } and he has ${this.hasDriverLicense ? "a" : "no"}  driver License`;
  },
};
const jonasAge = jonas.calcAge();
//console.log(jonas["calcAge"](1995));
//console.log(jonas.age);

// if (jonas.hasDriverLicense === true) {
//   console.log(
//     `${jonas.firstName} is ${jonasAge} year old and he has driving license`
//   );
// } else {
//   console.log(
//     `${jonas.firstName} is ${jonasAge} year old and he has not driving license`
//   );
// }

//console.log(jonasCheckUp);

// console.log(jonas.getSummary());

const jonas1 = [
  "jonas",
  "Bahadory",
  2037 - 1991,
  "teacher",
  ["Michael", "peter", "steven"],
  "meow",
  true,
  44,
];

const types = [];

for (let i = 0; i < jonas1.length; i++) {
  //console.log(jonas1[i], typeof jonas1[i]);
  //filling types array
  // types[i] = typeof jonas1[i];

  types.push(typeof jonas1[i]);
}
//console.log(types);

const years = [
  1995,
  1997,
  1998,
  "hello",
  true,
  "morning",
  false,
  "how are you doing today?",
  20000,
  false,
];
const ages = [];
for (let i = 0; i < years.length; i++) {
  //console.log(2024 - years[i]);
  //ages.push(2024 - years[i]);
  if (typeof years[i] !== "number") continue;

  //console.log(years[i], typeof years[i]);
}

for (let i = 0; i < years.length; i++) {
  if (typeof years[i] === "string") break;
  //console.log(years[i], typeof years[i]);
}

const testArray = [1, 2, 3, 4, 5];
for (let i = testArray.length - 1; i >= 0; i--) {
  //console.log(i, testArray[i]);
}

for (let exercise = 1; exercise < 3; exercise++) {
  //console.log(`---- starting exercise ${exercise}`);

  for (let workout = 1; workout <= 2; workout++) {
    // console.log(`exercise:${exercise} rep${workout}`);

    for (let i = 1; i <= 2; i++) {
      //console.log(`rep: ${workout} keep going ${i}`);
      for (let i = 1; i <= 4; i++) {
        // console.log(`${i} push up `);
      }
    }
  }
}

const measureKelvin = function () {
  const last = {
    type: "temp",
    unit: "celsius",
    value: prompt("degrees celsius"),
  };

  const kelvin = measurement.value + 273;
  return kelvin;
};
console.table(measurement);
