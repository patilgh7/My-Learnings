const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers);

console.log('=================================');


// same with foreach

const doubledNumbers2 = [];

numbers.forEach((number) => {
    doubledNumbers2.push(number * 2);
});

console.log(doubledNumbers2);

console.log('=================================');


const companies = [
    {name: 'Company One', category: 'Finance', start:1981, end: 2004},
    {name: 'Company Two', category: 'Retail', start:1992, end: 2008},
    {name: 'Company Three', category: 'Auto', start:1999, end: 2007},
    {name: 'Company Four', category: 'Retail', start:1989, end: 2010},
    {name: 'Company Five', category: 'Technology', start:2009, end: 2014},
    {name: 'Company Six', category: 'Finance', start:1987, end: 2010},
    {name: 'Company Seven', category: 'Auto', start:1986, end: 1996},
    {name: 'Company Eight', category: 'Technology', start:2011, end: 2016},
    {name: 'Company Nine', category: 'Retail', start:1981, end: 1989},

];

// Create an array of company names

const companyNames = companies.map((company) => company.name);

console.log(companyNames);

console.log('=================================');

const companyNames2 = companies.map((company) => `${company.name} started at ${company.start}`);

console.log(companyNames2);

console.log('=================================');


// Create an array with just company and category
const companyInfo = companies.map((company) => {
    return {
        name: company.name,
        category: company.category
    }
}); 

console.log(companyInfo);

console.log('=================================');

// Create an array of objects with the name and the length of each company in years 

const companyYears = companies.map((company) => {
    return {
        name: company.name,
        length: company.end - company.start + ' years'
    }
});

console.log(companyYears);

console.log('=================================');


// Chain map methods
// Taking square root first then square the number 
const squareAndDouble = numbers.map((number) => Math.sqrt(number)).map((sqrt) => sqrt * 2);

console.log(squareAndDouble);

console.log('=================================');


// longer version of above code

const squareAndDouble2 = numbers
.map(function (number){
    return Math.sqrt(number);
})
.map(function (sqrt){
    return sqrt * 2;
})
.map(function (sqrtDoubled) {
    return sqrtDoubled * 3;
})

console.log(squareAndDouble2);

console.log('=================================');


// Chaining different methods

const evenDouble = numbers.filter((number) => number % 2 === 0).map((number) => number * 2);

console.log(evenDouble);

console.log('=================================');
