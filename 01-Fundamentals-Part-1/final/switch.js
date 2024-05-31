const day = "wednesday";
switch (day) {
  case "monday":
    console.log("i am heading to market !");
    break;
  case "Tuesday":
    console.log("it is my day off!");
    break;
  case "wednesday":
  case "friday":
    console.log("heading to gym!");
    console.log("hiking in scotland");
    break;
  default:
    console.log("not in the plan");
}

if (day == "monday") {
  console.log("today is monday");
} else if (day == "tuesday") {
  console.log("today is tuesday!");
} else if (day == "wednesday" || day == "friday") {
  console.log("heading to gym");
  console.log("hiking to scotland");
} else {
  console.log("no in day plan ");
}
