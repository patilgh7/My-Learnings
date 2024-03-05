const person = {
    name : 'John Doe',
    age : 30,
    isAdmin : true,
    address : {
        street : '123 Main st',
        city : 'Boston',
        state : 'MA',
    },

    hobbies : ['music', 'sports']
};

let x;
 
x = person.name;

console.log(x);


// another way to access data inside object

x = person['age'];

console.log(x);


x = person.address.state;

console.log(x);

x = person.hobbies[0];

console.log(x);

// Update the values inside object 

person.name = 'Jane Doe';
person['isAdmin'] = false;

x = person;

console.log(x);


// Delete the properties of person object

delete person.age;

// Adding the property to object

person.hasChildren = true;

x = person;

console.log(x);

// create function

person.greet = function(){
    console.log(`Hello, my name is ${this.name}`);
};

person.greet();


// Another object
// Generally we don't write variable like 'first name' instead of this use always 'firstName or first_name'
const person2 = {
    'first name':'Brad',
    'last name' : 'Traversy'
};

x = person2['first name'];

console.log(x);