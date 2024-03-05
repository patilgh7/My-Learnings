function addFunction(a , b){

    return a + b;
}

console.log(addFunction(1,2));


// Arrow Function Regular Syntax 
const add = (a, b) => {
    return a + b;
};

console.log(add(40, 20));


// Implicit Return
const substract = (a, b) => a - b;

console.log(substract(99, 9));

// Can leave off () with single parameter

const double = a => a * 2;

console.log(double(5));


// Returning Object 

const createObj = () => ({
    name:'Brad'
});

console.log(createObj());


const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (num) {
    console.log(num);
});

// Or Using Arrow function for forEach loop

const numbers2 = [90, 80, 60, 30, 10];

numbers2.forEach((num) => console.log(num));