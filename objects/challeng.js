const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.Bmi = this.mass / (this.height * this.height);
    return this.Bmi;
  },
};

mark.calcBMI();

console.log("mark bmi is", mark.Bmi);
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.Bmi = this.mass / (this.height * this.height);
    return this.Bmi;
  },
};
john.calcBMI();
mark.calcBMI();
console.log("john bmi is ", john.Bmi);

const total =
  john.johnBmi > mark.markBmi
    ? `${john.fullName}' BMI is (${john.Bmi}) higher then ${mark.fullName}s (${mark.Bmi})! `
    : `${mark.fullName}' BMI is (${mark.Bmi}) higher then ${john.fullName}s (${john.Bmi})! `;
console.log(total);
