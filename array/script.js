const friends = ["karam", "didar", "marcus", "alim", "gullbodin"];
//console.log(friends.length);
// friends[4] = 4444;
// console.log(friends[4]);
//console.log(friends[friends.length - 1]);
function calcAge(year) {
  return 2024 - year;
}

const ages = [1995, 1894, 2000, 1990];

const agesResult = [
  calcAge(ages[0]),
  calcAge(ages[2]),
  calcAge(ages[ages.length - 1]),
];
console.log(agesResult);
ages.push(400);
//push in end of array
console.log(ages);
ages.unshift(1992);
// add in the beginning of array
console.log(ages);
ages.pop();
//delete the end of array
console.log(ages);
ages.shift();
// delete the beginning of array
console.log(ages);

// indexOf() function return in which index is the element
console.log(friends.indexOf("didar"));

// includes() function return true if element exist in false if not. we can use the includes method to write conation
console.log(friends.includes("didar"));
console.log(friends.includes("did"));

if (friends.includes("marcus")) {
  console.log("marcus is in the array");
}
