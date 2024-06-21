// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

//get tips from eah index of bills array
//push the result in tips array
//Calculate total of bills and tips
//push it to total array
const bills = [125, 555, 55, 77, 80, 336];
// const tips = [];
const total = [80];
function calcTipResult(bills) {
  for (i = 0; i < bills.length; i++) {
    if (bills[i] >= 50 && bills[i] <= 300) {
      bills[i] * 0.15;
    } else {
      bills[i] * 0.2;
    }
  }
  return bills;
}
console.log(calcTipResult(bills));
//console.log(tispResult);
// console.log(total);
