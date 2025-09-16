let person = {
  firstName: "John",
  lastName: "Cena",
  age: 30,
  hobbies: ["music", "restling"],
  address: {
    street: "123 Main St",
    city: "New York",
  },
  getBirthYear: function () {
    return 2025 - this.age;
  },
};
console.log(person);

// 1. Accessing objects propertites

// Dot notation
console.log(person.firstName);
console.log(person.lastName);
console.log(person.address.city);
console.log(person.getBirthYear());

console.log("=============================");

// Bracket notation
console.log(person["firstName"]);
console.log(person["lastName"]);
console.log(person["address"]["city"]);
console.log(person["getBirthYear"]());

console.log("=============================");

// 2. Adding Properties
person.phone = "0761044343";
console.log(person);

console.log("=============================");

//3. Modify properties
person.firstName = "Savi";
person.lastName = "Vithanage";
console.log(person);

console.log("=============================");
// 4. Delete Properties
delete person.phone;
console.log(person);

console.log("=============================");

// 5. Looping Object Properties
for (let key in person) {
  console.log(key);
  console.log(person[key]);
}

console.log("=============================");
// 6.
let { firstName, lastName, age, email } = person;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(email);

console.log("=============================");

// Built-in object functions
console.log(Object.values(person));

console.log("=============================");

console.log(Object.keys(person));

console.log("=============================");

console.log(Object.entries(person));

let car = {
  brand: "Toyota",
  model: "xyz",
  year: 2022,
  getDescription: function () {
    return `Brand - ${this.brand} ~ model - ${this.model} ~ year - ${this.year}`;
  },
};
console.log(car.getDescription());

console.log("=============================");

class Student {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
let student = new Student("Johan", "Cena", 30);
console.log(student);
