const ageSarah = 18;
if (ageSarah >= 19) {
  //console.log(`sarah can drive`);
} else {
  const yearsLeft = 19 - ageSarah;
  //console.log(`you can drive in ${yearsLeft} years:`);
}

const placeOfBirth = "Asia";
let newPlace;
if (placeOfBirth == "Asia") {
  newPlace = "you are asian !";
} else {
  newPlace = "you're not from Asia !";
}

const ageTest = 18;
if (ageTest === 18) console.log("you are now younger boy (strict)");
if (ageTest == 18) console.log("you are now a younger boy (loos)");

let age = 18;
//age >= 20 ? console.log("this is true day") : console.log("this is false day");

// using ternary operator with template literal

console.log(
  `you can drive ${age >= 18 ? "motor bike" : "when you are above 18"}`
);
