// Challenge One
// output : [6, 5, 4, 3, 2, 1, 0]


const arr = [1, 2, 3, 4, 5];

/*
 solution 1 : 

  let x;

  x = arr.reverse().concat(0);

  console.log(x); // output : [6, 5, 4, 3, 2, 1, 0]

*/

// another way to solve challenge one
// solution 2 : 
arr.push(6);
arr.unshift(0);
arr.reverse();

console.log(arr);



// Challenge Two
// Remove one 5 from array
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

/*
// solution 1 for challenge two :

const arr3 = arr1.slice(0, 4).concat(arr2);

console.log(arr3);

*/

// solution 2 for challenge two : 

const arr4 = [...arr1, ...arr2];  // or const arr4 = arr1.concat(arr2)

arr4.splice(4,1);

console.log(arr4);