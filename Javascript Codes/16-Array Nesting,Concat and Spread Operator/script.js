const fruits = ['apple', 'pear', 'orange'];

const berries = ['strawberry', 'blueberry', 'rasberry'];

// Array Nesting (Array inside array)

fruits.push(berries);

console.log(fruits);

// Access nested array values

let x;

x = fruits[3][1];

console.log(x);

// Another way to access nested array

const allFruits = [fruits, berries];

x = allFruits[1][0];

console.log(x);

// Array Concat (it makes single array)

const cars = ['Mercerdes', 'Audi', 'Lamborghini'];

const bikes = ['Honda', 'Suzuki', 'Hero'];

let y;

y = cars.concat(bikes);

console.log(y);

// Spread Operator (...) => It gives same ouput as Array concat method

y = [...bikes, ...cars];

console.log(y);

// Flatten arrays
const arr = [1, 2, [3, 4], 5, [6, 7], 8];

console.log(arr);

// After flatten array
console.log('After flatten array');
x = arr.flat();

console.log(x);

// Static methods on array objects
// Checking is it array or not
x = Array.isArray(fruits);
console.log(x);

// from method each digit makes individual array element
x = Array.from('67891');
console.log(x);


// making array using 'of' method

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a,b,c);
console.log(x);