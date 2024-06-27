//Tak
//we work for a company building a smart home temperature

//given an array of temperature of one day
//Calculate the temperature amplitude
// keep in mind that sometimes there might be a sensor error

//Amplitude is deferent between high and lowest temperature

const temperatures = [3, -2, -6, -1, 9, 13, "error", 17, 15, 14, 9, 5];
const temperTest = [10, -1, -8, -13, 66, 13, "error", 1, 5, 4, 11, 0];
// let getMin = Math.min(...temperatures);
// console.log("MIN", getMin);
// let getMax = Math.max(...temperatures);
// console.log("Max", getMax);
// let amplitude = getMin - getMax;
// console.log(amplitude);

const calcTemAmplitude = function (array, arr2) {
  const arrayJoin = array.concat(arr2);
  let max = arrayJoin[0];
  let min = arrayJoin[0];
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
