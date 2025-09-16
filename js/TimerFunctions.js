// let timeoutId = setTimeout(() => {
//   console.log("Hello World");
// }, 2000);
// clearTimeout(timeoutId)

// =======================

// let intervalId = setInterval(() => {
//   console.log("Hello World");
// }, 1000);
// clearInterval(intervalId)

let intervalId = setInterval(() => {
  counter++;
  console.log("Number:" + counter);
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 10500);
