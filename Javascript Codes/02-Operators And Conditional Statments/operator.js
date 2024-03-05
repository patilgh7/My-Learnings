
// Arithmetic operators
console.log("Arithmetic operators");
let a = 5;
let b = 2;

console.log("a = ", a, "& b = ", b);
console.log("a + b = ", a+b);
console.log("a - b = ", a-b);
console.log("a * b = ", a*b);
console.log("a / b = ", a/b);
console.log("a % b = ", a%b);
//Exponentiation  5^2 = 25 => a**b
console.log("a ** b = ", a**b); 

// for 3rd or 4th or 5th power exponentiation
let number = 2;

console.log("2^3 = ",number**3);
console.log("2^4 = ",number**4);
console.log("2^5 = ",number**5);


// Unary operator
console.log("Unary operator");
let c = 4;
let d = 9;

console.log("c = ", c, "& d = ", d);
c++;
d--;
console.log(c,d);

// Assignment operator
console.log("Assignment operator");

let e = 10;

console.log("e = ", e);
e+=4;
console.log("+= operator  ", e);

// -= ,  *= ,  /= , %= these are all assignment opeartors

let f = 9;
console.log("f = ", f);
console.log("**= opearator ", f **= 2);


// Comparison operator
console.log("Comparison operator");

let x = 20;
let y = 25;
let z = "20"; // Here z is string value but give number in that string.So javascript implicitly convert into number.

console.log("x = ", x, " y = ", y, " z = \"20\"");

// == equal to operator only check values 
console.log("Equality Operator (==)");
console.log("x == y ", x == y);
console.log("x != y ", x != y);

console.log("x == z", x==z); // equal to operator only check values not datatypes

// First strictly checking datatype then it will compare.
// For that we have Strict Equality Operator (===)
console.log("Strict Equality Operator (===)");
console.log("x === y ", x === y);
console.log("x !== y ", x !== y);