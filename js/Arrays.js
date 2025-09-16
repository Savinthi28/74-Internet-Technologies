// 1. Creating an array

// Array Literal
let colors = ["Red", "Green", "Orange"];
console.log(colors);

console.log("==============================");
// Create using 'new' keyword
let colors2 = new Array("Red", "Blue", "Green");
console.log(colors2);

console.log("==============================");
let myArray = [
  10,
  "Kamal",
  true,
  undefined,
  { name: "Johan", age: 30 },
  [1, 2, 3],
];
console.log(myArray);

console.log("==============================");
// 2. Access elements
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);

console.log("==============================");
// 3. Modify elements
colors[0] = "Yellow";
console.log(colors);

console.log("==============================");
// 4. Array length
console.log(colors.length);

console.log("==============================");
// Built-in Array function
let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits);

console.log("==============================");
// 5. Push() - Adds new element to the end of an array
fruits.push("Grapes");
console.log(fruits);

// 6. pop() - Removes the last element from an array
console.log("==============================");
fruits.pop();
console.log(fruits);

// 7. unshift() -  Adds new element to the first of an array
console.log("==============================");
fruits.unshift("Strawberry");
console.log(fruits);

// 8. shift() - Removes the first element from an array
console.log("==============================");
fruits.shift();
console.log(fruits);

// 9.concat() - Joins two or more arrays
console.log("==============================");
let vegetables = ["Tomato", "Potato", "Onion"];
let foodItems = fruits.concat(vegetables);
console.log(foodItems);

// 10. forEach() - Calls a function for each element in an array
console.log("==============================");
// foodItems.forEach(function (item) {
//   console.log(item);
// });
foodItems.forEach((item) => {
  console.log(item);
});

// 11. map() - Create a new array with the results of calling a provided function an every element in the array
console.log("==============================");
let upperCaseItems = foodItems.map((item) => item.toUpperCase());
console.log(upperCaseItems);

// 12. filter()
console.log("==============================");
let filteredItems = foodItems.filter((item) => item.length > 5);
console.log(filteredItems);
