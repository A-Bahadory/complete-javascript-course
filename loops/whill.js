// let appCount = 1;
// while (appCount <= 10) {
//   console.log(`count are started from ${appCount}`);
//   appCount++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`dice number${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice == 6) {
    console.log(`you role profect dice number ${dice}`);
  }
}
