const name = 'John';

const age = 30;

let x;

x = 'Hello, my name is '+name +' and I am ' +age +' years old';

console.log(x);

// Template Literals using BackTicks

let y;

y = `Hello, my name is ${name} and I am ${age} years old`;

console.log(y);


// String properties and methods

const s = 'Hello World';

let a = typeof s;  // type

let b = s.length; // length of string 

let c = s[0];  // Access valu by Key
console.log(a, b, c);

// If you want to see string methods
const str = 'Microsoft';
let d = str.__proto__;   // double underscore proto double underscore

console.log(d);

const str2 = new String('Apple');

console.log(str2);


// lowercase and uppercase

const str3 = new String('Suzuki');

let z = str3.toLowerCase();
console.log(z);

z = str3.toUpperCase();
console.log(z);

z = str3.charAt(4);
console.log(z);

z = str3.indexOf('z');
console.log(z);

z = str3.substring(0,4);
console.log(z);

const str4 = '     Hello World!';
console.log(str4);

z = str4.trim();
console.log(z);

const str5 = 'Hi World'
console.log(str5);


z = str5.replace('World', 'John');
console.log(z);

z = str5.includes('Hi');
console.log(z);

z = str5.valueOf();
console.log(z);


const str6 = 'No Parking';
console.log(str6);

z = str6.split('');
console.log(z);

let m = str6.split(' ');
console.log(m);
