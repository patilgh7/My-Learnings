const arr = [35,55,63,78,23];

console.log(arr);

// Push method add element to the end
arr.push(100);
console.log(arr);

arr.pop();
console.log(arr);

// unshift method add element to the beginning
arr.unshift(1);
console.log(arr);

arr.shift();
console.log(arr);


// reverse
arr.reverse();
console.log(arr);


// check passed value is available in array or not
let x; 
x = arr.includes(35);
console.log(x); 

// check index of element
x = arr.indexOf(55);
console.log(x);

x = arr.indexOf(659);  // when value is not present it returns -1
console.log(x);

// slice removes 1 and 3 element
const arr2 = [100, 200 , 300 , 400 , 500];
x = arr2.slice(1, 3);
console.log(x);   // output = [200, 300]
console.log(arr2); // output = [100, 200 , 300 , 400 , 500]

// splice removes from 1 upto 3 elements that are 600 = 0th and 900 = 3th element 
const arr3 = [600, 700 , 800 , 900 , 1000];
x = arr3.splice(1,3);
console.log(x);  // output = [700, 800, 900]
console.log(arr3); // output = [600, 1000]