// Student Information

let studentName = "  Ellaha  ";
let age = "19";
let score = "89.875";

// String Methods

console.log(studentName.trim());
console.log(studentName.toUpperCase());
console.log(studentName.toLowerCase());
console.log(studentName.length);

// Type Conversion

let numberAge = Number(age);
let numberScore = Number(score);

console.log(numberAge);
console.log(numberScore);

console.log(typeof numberAge);
console.log(typeof numberScore);

//   NaN

let result = Number("Hello");

console.log(result);
console.log(typeof result);

// Type Coercion

console.log("10" + 5);
console.log("10" - 5);
console.log("10" * 2);

// Debugging Challenge

let studentName2 = "Raha";
console.log(studentName2);
console.log("Hello");

// Bonus Challenge

console.log("Student:", studentName.trim());
console.log("Age:", numberAge);
console.log("Score:", numberScore);
