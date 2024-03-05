// creating object using object literal

const todo = {};

let x;

todo.id = 1;

x = todo;

console.log(x);

// creating object using object constructor


const obj = new Object();

obj.id = 2;
obj.name = 'Buy Milk';
obj.completed = false;

x = obj;

console.log(x);

// Nesting Object creation
const person = {
    address:{
        coord : {
            latitude: 42.1548,
            longitude  : -72.35,
        }
    },
};

x = person.address.coord.latitude;

console.log(x);

//Spread Operator

const obj1 = { a:1, b:2 };
const obj2 = { c:3, d:4 };

const obj3 = {...obj1, ...obj2};

x = obj3;

console.log(x);


// Other than Spread Operator Object.assign()

const obj4 = Object.assign({}, obj1, obj2);

x = obj4
console.log(x);

//Array

const todos = [
    { id:1, name: 'Buy Milk' },
    { id:2, name: 'Pickup kids from school' },
    { id:3, name: 'Take out trash' },

];

x = todos[0];

console.log(x);

let y = todos[0].name;

console.log(y);


// To access the keys of object

x = Object.keys(obj);

console.log(x);

// length 

x = Object.keys(obj).length;

console.log(x);

// access the values of object

x = Object.values(obj)

console.log(x);


// To access the both keys and values of object

x = Object.entries(obj);

console.log(x);

// To check property is present in object use hasOwnProperty()

x = obj.hasOwnProperty('name');

console.log(x);