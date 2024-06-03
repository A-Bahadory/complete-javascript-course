function billCal(bill) {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return `the bill was ${bill} the tip was ${tip} and the total is ${
    bill + tip
  }`;
}
console.log(billCal(300));
console.log(billCal(275));
