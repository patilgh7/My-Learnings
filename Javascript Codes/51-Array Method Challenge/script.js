
/*  
    Note : 
    1) when you add current value with previous value use reduce method
    2) when you want apply condition on object use filter method
    3) when you want whole result after filtering then use map and return huge data with specific string values
       like name and email.

    Use map for one-to-one transformations of array elements.
    Use filter for selecting elements based on a condition.
    Use reduce for aggregating array elements into a single value.

*/

console.log('===========================================');


console.log('Use of map in number data');
const num = [1, 2, 3, 4, 5];

// Using map to transform each number into its square
const squares = num.map(num => num * num);

console.log(squares);

console.log('===========================================');


// When you want to transform each name to uppercase using the map method
console.log('Use of map in string data');

const names = ["john", "mary", "peter"];

const upperCaseNames = names.map(name => name.toUpperCase());

console.log(upperCaseNames);

console.log('===========================================');


console.log('\"Challenge 1\" ');

/*
    Expected output of Challenge 1

    {name: 'Jane Poe', email: 'jane@gmail.com'}

    {name: 'Sara Soe', email: 'sara@gmail.com'}

    {name: 'Jose Koe', email: 'jose@gmail.com'}
 */

const people = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        phone: '111-111-1111',
        age: 30,
    },
    {
        firstName: 'Jane',
        lastName: 'Poe',
        email: 'jane@gmail.com',
        phone: '222-222-2222',
        age: 25,
    },
    {
        firstName: 'Bob',
        lastName: 'foe',
        email: 'bob@gmail.com',
        phone: '333-333-3333',
        age: 45,
    },
    {
        firstName: 'Sara',
        lastName: 'Soe',
        email: 'sara@gmail.com',
        phone: '444-444-4444',
        age: 19,
    },
    {
        firstName: 'Jose',
        lastName: 'Koe',
        email: 'jose@gmail.com',
        phone: '555-555-5555',
        age: 23,
    }
];


// const youngPeople = people.map((young_pep) => young_pep >= 25 )


console.log('Challenge 1 : Using filter and map methods');
const youngPeople = people.filter(function(young_pep){
    return young_pep.age <= 25;
}).map(function (yp){
    return {
        name : yp.firstName+' '+yp.lastName,
        email : yp.email
    };
});

console.log(youngPeople);

console.log('===========================================');

console.log('Challenge 1 : Another way using filter and map methods');

/*
    when you want to return object you can write in 2 ways in map method : 

    1) return {
        name : yp.firstName+' '+yp.lastName,
        email : yp.email
    };

    2) or simply send object in ({})

       ({name : person.firstName+' '+person.lastName,
        email : person.email}))

*/

const youngPeople2 = people
    .filter((person) => person.age <= 25)
    .map((person) => 
        ({name : person.firstName+' '+person.lastName,
        email : person.email}))

console.log(youngPeople2);

console.log('===========================================');


console.log('Challenge 1 : Using reduce method');
const youngPeople3 = people.reduce((acc, yp) => {
    if (yp.age <= 25) {
      acc.push({
        name: yp.firstName + ' ' + yp.lastName,
        email: yp.email,
      });
    }
    return acc;
  }, []);

  console.log(youngPeople3);


console.log('===========================================');


console.log('\"Challenge 2\" ');

/*
    Expected output of Challenge 2

    Add the all positive numbers in the array
    
 */



const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveSum = numbers
    .filter((num) => num > 0)
    .reduce((acc, cur) => acc + cur, 0);
    
    
console.log(positiveSum);


console.log('===========================================');


console.log('\"Challenge 3\" ');

/*
    Expected output of Challenge 3

    create new array with the first letter of each word capitalized
    
 */

    console.log('Challenge 3 : Using map method along with charAt and slice methods');

    const words = ['coder', 'programmer', 'developer'];

    const cWords = words.map((word) =>{
        return word[0].toUpperCase() + word.slice(1, word.length);
    });

    console.log(cWords);

    console.log('===========================================');


    console.log('Challenge 3 : Using another way');

    const cWords2 = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    console.log(cWords2);

    console.log('===========================================');
