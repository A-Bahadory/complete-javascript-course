const details = {
  firstName: "Bahador",
  lastName: "Ahmadzay",
  age: 1995,
  friends: ["staphili", "joo", "nawid"],
  calcAge: function () {
    return 2024 - this.age;
  },

  summeryM: function () {
    this.summery = `${this.firstName} is ${this.calcAge()} years old ${
      this.deriverLicense ? "has driver license" : "has not driver license"
    }`;
    return this.summery;
  },
};

//braked notation
const nameKey = "Name";
console.log(details["first" + nameKey]);
console.log(details["last" + nameKey]);
//add to object
details.socialMedia = "07bahadory";
details.deriverLicense = true;
console.log(details);
details["location"] = "Birmingham";
console.log(details);

console.log(
  `${details.firstName} has ${details.friends.length} friend,and his best friend is ${details.friends[0]}`
);

console.log(details.calcAge());
details.summeryM();

console.log("age output", details.summery);
