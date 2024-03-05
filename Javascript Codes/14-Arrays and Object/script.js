
// Array Literals
const numbers = [12, 45, 33, 29, 39];

console.log(numbers);
console.log(`Number Array Length = ${numbers.length}`);

// Array Constructor

const fruits = new Array('apple', 'grape', 'orange');

console.log(fruits);

// Access numbers array and fruits array data

let x;

x = numbers[0];
console.log(x);

x = `My favourite fruit is an ${fruits[2]}`;
console.log(x);


fruits[1] = 'banana';
console.log(fruits);

// Add element to last of array
fruits[fruits.length] ='blueberry';
console.log(fruits);

fruits[fruits.length]  = 'strawberry , watermelon'
console.log(fruits);

// mixed array
const mixed = [12, 'Hello', true, null];