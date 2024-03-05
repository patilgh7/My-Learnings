// destructuring =  extract values from arrays and objects,
//                              then assign them to variables in a convenient way
//                              [] = to perform array destructuring
//                              {} = to perform object destructuring


const firstN = 'John';
const lastN = 'Doe';
const age = 30;

const person = {
    firstN,
    lastN,
    age,
};

console.log(person.age);

// Destructuring objects

// Destructuring objects we use {} curly braces
// and Destructuring array we use [] square brackets

const todo = {
    id : 1,
    title : 'Take out trash',
    user : {
        name : 'John',
    },
};

const { id, title, user } = todo;

console.log(id, title, user);

// when you use {} curly braces i.e. destructuring
const {user : {name}} = todo;

console.log(name);


// Destructure array 

const numbers = [22, 33, 44, 66];

const [first, second, ...rest] = numbers;  // Destructuring array 

console.log(first, second, rest);

console.log('--------------------------------------------------------------');

// Note : 

// syntax of rest operator =>  ...rest 

// Rest operator it is the same as Spread Operator 

// Rest operator gives remaining values from array Whereas Spread Operator combines two objects.


/*

Destructuring just a simplified syntax

1) Destructuring Array : 

	// old way 
	const arr = [1, 2, 3]
	const one = arr[0];
	const two = arr[1];

	// destrucuring new way 
	const[one, two] = [1, 2, 3]

================================================================================================

	When some values are undefined in array in that case we use (bacon = ' ') this syntax
	
	const arr = [undefined, pizza, fries];
	
	const [bacon = ' ', pizza, fries) = arr;



2) Destructuring Object: 

	
	const obj  = {
	
	    shroom = '',
	    banana = '',
	    pepper = ''		
	
	}

	const shroom = obj.shroom;
	const banana = obj.banana;
	const pepper = obj.pepper;

	
	// destrucuring new way 

	const { shroom, banana, pepper } = obj

	// When some values are undefined like arrays you can set default using
	const { shroom =' ', banana, pepper }  = obj

	// when you to change some property name you can change using : 
	const { shroom : mushroom } = obj


3) Destructuring Nested Object: 


	const obj = {
	   
	    parent : {
		child : ''
	    },			
	}


        // destrucuring new way 


	const { parent: { child } } = obj

*/

// --------- EXAMPLE 1 ---------
// SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

console.log('Before Swapping');
console.log(`a = ${a}`);
console.log(`b = ${b}`);

// [a, b] left hand side use for destructurring
// [b, a] right hand side uses for creating an array


// destructuring
[a, b] = [b, a];

console.log('After Swapping');
console.log(`a = ${a}`);
console.log(`b = ${b}`);

console.log('--------------------------------------------------------------');

// --------- EXAMPLE 2 ---------
// SWAP 2 ELEMENTS IN AN ARRAY

const colors = ['red', 'green', 'blue', 'black', 'white'];

console.log('Before Swapping');

console.log(colors);

// destructuring
[colors[0], colors[4]] = [colors[4], colors[0]]

console.log('After Swapping');

console.log(colors);

console.log('--------------------------------------------------------------');


// --------- EXAMPLE 3 ---------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

console.log(colors);

// destructuring
const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log('firstColor : '+firstColor);
console.log('secondColor : ' +secondColor);
console.log('thirdColor : '+thirdColor);
console.log('extraColors : '+extraColors);

console.log('--------------------------------------------------------------');


// --------- EXAMPLE 4 ---------
// EXTRACT VALUES FROM OBJECTS

const person1 = {
	first_name: 'Spongebob',
	last_name: 'Squarepants',
	ageIs: 30,
	job: "Fry cook",
  };
  const person2 = {
	first_name: 'Patrick',
	last_name: 'Star',
	ageIs: 34
  };
  
  // destructuring
  const {first_name, last_name, ageIs, job="Unemployed"} = person2;
  
  console.log(first_name);
  console.log(last_name);
  console.log(ageIs);
  console.log(job);


console.log('--------------------------------------------------------------');


// --------- EXAMPLE 5 ---------
// DESTRUCTURING IN FUNCTION PARAMETERS

function displayPerson({first_name, last_name, ageIs, job="Unemployed"}) {
    console.log(`name: ${first_name} ${last_name}`);
    console.log(`age: ${ageIs}`);
    console.log(`job: ${job}`);
}

displayPerson(person1);
displayPerson(person2);