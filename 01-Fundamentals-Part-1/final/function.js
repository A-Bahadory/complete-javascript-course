"use strict"; // strict mood show bugs and reserve key words in Java Script.
// example.
//const private = "Audio";
//const interface = "name";

// let hasDriversLicense = false;
// const passTest = true;
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("i can drive");

// <----- Functions ----->

//  function declaration
// we can call them before the function is defined
//console.log(calculateBirthYear(1995)); // example

function calculateBirthYear(birthYear) {
  const currentYear = 2023 - birthYear;
  // current year - Birth year. to calculate how old is the person
  return currentYear;
}
//console.log(calculateBirthYear(1995));

// <-----function expression--->

// function expression, ans also can be called: anonymous function
const calculateBirthYear1 = function (birthYear) {
  return 2023 - birthYear;
};
//const myDateOfBirth = calculateBirthYear1(1995);
//console.log(myDateOfBirth);

// <-----Arrow function------>

const calculateBirthYear2 = (birthYear) => 2023 - birthYear;
//console.log(calculateBirthYear2(1995));

const yearsUntilRetirement = (birthYear) => {
  const year = calculateBirthYear2(birthYear);
  const retirementYear = 68 - year;
  return retirementYear;
};
//console.log(yearsUntilRetirement(1995));

const oldAndRetirment = function (year) {
  const old = calculateBirthYear2(year);
  const yearLeftToRetirment = yearsUntilRetirement(year);
  const result = `you are ${old} years old🤓, and you will be Retiret in ${yearLeftToRetirment} years🥸!`;
  return result;
};
console.log(oldAndRetirment(1995));
