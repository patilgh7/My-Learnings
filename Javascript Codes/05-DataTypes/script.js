const firstName = 'Sara';

const output = firstName;

console.log(output, typeof output);

// values are stored on the stack

const name = 'John';
const age = 30;

let newName = name;

console.log(name, newName);

newName = 'Johnathan';

console.log(name, newName);


const person = {
    name : 'sara',
    age:'35'
};

console.log(person);

const newPerson = person;

console.log(newPerson);

newPerson.name = 'Brad';

console.log(person, newPerson);