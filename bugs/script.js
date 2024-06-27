// const test = document.getElementsByClassName("test");

// for (let i = 0; i < test.length; i++) {
//   test[i].style.color = "red";
// }

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unite: "celsius",
    value: "273",
  };

  const kelvin = Number(measurement.value) + 10;
  console.table(measurement);
};

//measureKelvin();

const temperatures = [3, 5, 1];
const temperTest = [9, 4, 5];

const calcTemAmplitude = function (array, arr2) {
  const arrayJoin = array.concat(arr2);
  let max = 0;
  let min = 0;
  for (let i = 1; i < arrayJoin.length; i++) {
    const arrayValue = arrayJoin[i];
    if (typeof arrayValue !== "number") continue;
    //if (typeof arrayValue !== "string") continue;
    if (arrayValue > max) max = arrayValue;
    if (arrayValue < min) min = arrayValue;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTemAmplitude(temperatures, temperTest);
console.log(amplitude);
