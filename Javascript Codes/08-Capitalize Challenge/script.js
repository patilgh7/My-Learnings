
// Make first letter of developer make capital

const myString = 'developer';

let myNewString;
// Solution 1 : 
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

console.log(myNewString);

// Solution 2 : 
myNewString = myString[0].toUpperCase() + myString.slice(1);

console.log(myNewString);

// Solution 3 Using Template  : 
myNewString = `${myString[0].toUpperCase()}${myString.substring(1)}`;

console.log(myNewString);