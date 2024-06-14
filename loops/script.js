const baha = [22, "kabul", true, 88, "bahar"];
const typeArray = [];

for (let i = 0; i < baha.length; i++) {
  //console.log(baha[i]);
  //typeArray.push(typeof baha[i]);
  typeArray[i] = typeof baha[i];
}

const ages = [1999, 1995, 2000];
const births = [];
for (let i = 0; i < ages.length; i++) {
  births.push(2024 - ages[i]);
}

const checkStrings = [22, true, false, "hello"];
// for (let i = 0; i < checkStrings.length; i++) {
//   if (typeof checkStrings[i] !== "string") continue;
//   console.log(checkStrings[i]);
// }
for (let i = 0; i < checkStrings.length; i++) {
  if (
    typeof checkStrings[i] !== "number" &&
    typeof checkStrings[i] !== "string"
  )
    break;
  //console.log(checkStrings[i], typeof checkStrings[i]);
}

const backs = [22, true, false, "hello"];
//back word loop
for (let i = backs.length - 1; i >= 0; i--) {
  console.log(backs[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`chaste day${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`rep ${rep}`);
  }
}
