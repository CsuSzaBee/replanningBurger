let temperatures = [-1, 13.8, 20, 35.7, 5, 26, 10];
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

showTemp();


