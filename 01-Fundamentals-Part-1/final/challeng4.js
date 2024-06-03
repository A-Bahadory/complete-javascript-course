const calcAverage = (a, b, c) => (a + b + c) / 3;
const scoreDolphins = calcAverage(44, 23, 72);
const scoreKoalas = calcAverage(85, 54, 41);

const checkWinner = function (dolphins, koalas) {
  if (dolphins >= 2 * koalas) {
    return `dolphin win ${dolphins} vs ${koalas}`;
  } else if (koalas >= 2 * dolphins) {
    return `koalas win ${koalas} vs ${dolphins}`;
  } else {
    return "no one win the match";
  }
};
console.log(checkWinner(scoreDolphins, scoreKoalas));
