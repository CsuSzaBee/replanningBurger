let temperatures = [-1, 13.8, 20, 35.7, 5, 26, -10];
let tempUpperLimits = [0, 15, 20, 25, 60]
let offers = [
  "Try our super hot hot-chocolate!",
  "Warm up your soul with our spicy tee!",
  "We offer today delicious cakes.",
  "Of course, ice cream!",
  "Cool down yourself with our icy lemonade!"
]


function showTemp() {
  let day = parseInt(document.querySelector("#weekdays").value, 10);
  document.querySelector("#tempdata").innerHTML = temperatures[day];
  for (let i = 0; i < tempUpperLimits.length; i++) {
    if (temperatures[day] <= tempUpperLimits[i]) {
      document.querySelector("#dailyoffer").innerHTML = offers[i];
      break;
    } 
  }
}

function calcMinTemp(arr) {
  let minTemp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    minTemp = minTemp > arr[i] ? arr[i] : minTemp;
  }
  return minTemp
}

function calcMaxTemp(arr) {
  let maxTemp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    maxTemp = maxTemp < arr[i] ? arr[i] : maxTemp;
  }
  return maxTemp
}

function calcAvgTemp(arr) {
  let total = arr[0];
  for (let i = 1; i < arr.length; i++) {
    total += arr[i];
  }
  return total/arr.length;
}


showTemp();

console.log(calcMinTemp(temperatures));
console.log(calcMaxTemp(temperatures));
console.log(calcAvgTemp(temperatures));