const age = 19;

// Using an if statement
if(age >= 18){
    console.log('You can vote!');
}else{
    console.log('You can not vote!');
}

// Using a ternary operator

age >= 18 ? console.log('You can vote!') : console.log('You can not vote!');

// Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
console.log(canVote);

const canVote2 = age >= 18 ? 'You can vote!' : 'You can not vote!';
console.log(canVote2);

// Multiple statements

/*
const auth = true;
let redirect;

if(auth){
    alert('Welcome to dashboard');
    redirect = '/dashboard';
}else{
    alert('Access Denied');
    redirect = '/login';
}

console.log(redirect);

*/  

// above code making shorter using ternary operator

const auth = false;

const redirect = auth ? (alert('Welcome to dashboard'), '/dashboard') : (alert('Access Denied'), '/login');

console.log(redirect);


// When you don't have else statement only if statement then how to use ternary operator 

const ride = true;

ride ? console.log('Ride the bike') : null;


// using && opeartor
const auth_2 = true;

auth_2 && console.log('Welcome to dashboard');