//Tak
//we work for a company building a smart home temperature

//given an array of temperature of one day
//Calculate the temperature amplitude
// keep in mind that sometimes there might be a sensor error

//Amplitude is deferent between high and lowest temperature

const temperatures = [3, -2, -6, -1, 9, 13, "error", 17, 15, 14, 9, 5];
// let getMin = Math.min(...temperatures);
// console.log("MIN", getMin);
// let getMax = Math.max(...temperatures);
// console.log("Max", getMax);
// let amplitude = getMin - getMax;
// console.log(amplitude);

const calcTemAmplitude = function (array) {
  let max = array[0];
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    const arrayValue = array[i];
    //if (typeof arrayValue === "number") continue;
    if (typeof arrayValue !== "string") continue;
    if (arrayValue > max) max = arrayValue;
    if (arrayValue < min) min = arrayValue;
  }
  console.log(max, min);
  //return max, min;
};
calcTemAmplitude(temperatures);
