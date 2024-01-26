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

console.log(jonas.getSummary());
