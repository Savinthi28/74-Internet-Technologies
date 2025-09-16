console.log("Functions.js file is loaded...");

// 1. Function Decoration
function greet(firstName) {
  if (typeof firstName === "undefined") {
    console.log("Hello World.");
  } else {
    console.log(`Hello ${firstName}`);
  }
}
greet();
greet("Savi");

console.log("===============");

// 2. Function expression
let greet2 = function (firstName) {
  console.log(`Hello ${firstName}`);
};
greet2("ABC");

console.log("===============");

// 3. Arrow function
let greet3 = (firstName) => {
  console.log(`Hello ${firstName}`);
};
greet3("XYZ");

let greet4 = (firstName) => console.log(`Hello ${firstName}`);
console.log("Kamal");

// Arrow function without parameters
let greet5 = () => console.log("Hllo World!");
greet5();

// 4. Default parameters
let greet6 = (firstName = "Amal") => {
  console.log(`Hello ${firstName}`);
};
greet6();
greet6("Kamal");
