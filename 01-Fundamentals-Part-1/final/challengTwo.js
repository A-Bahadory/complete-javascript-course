let scoreDolphins = (81 + 100 + 100) / 3;
console.log(scoreDolphins);
let scoreKoalas = (80 + 100 + 100) / 3;
console.log(scoreKoalas);

if (scoreDolphins === scoreKoalas && scoreDolphins >= 100) {
  console.log("both win the trophy");
} else if (scoreKoalas >= 100 && scoreKoalas > scoreDolphins) {
  console.log("koalas win the game");
} else if (scoreDolphins >= 100 && scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else {
  console.log("all scores less then 100");
}
