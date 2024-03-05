const numbers = [1,2,3,4,5,6,7,8,9,10];

const evenNumbers = numbers.filter(function (number){
    return number % 2 === 0;
});

console.log(evenNumbers);

console.log('================================');

// short version

const evenNums = numbers.filter((num) => num % 2 === 0);

console.log(evenNums);

console.log('================================');


// same with forEach

const oddNumbers = [];

numbers.forEach(num => {
    if(num %2 !== 0){
        oddNumbers.push(num);
    }
});

console.log(oddNumbers);

console.log('================================');


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

// Get only Retail Companies

console.log('Filter by retail category only ');
const retailCompanies = companies.filter((company) => company.category === 'Retail');

console.log(retailCompanies);

console.log('================================');


// Get companies that started in or after 1980 and ended in or before 2005

console.log('Get companies that started in or after 1980 and ended in or before 2005');

const earlyCompanies = companies.filter(comp => comp.start >= 1980 && comp.end <= 2005);

console.log(earlyCompanies);

console.log('================================');

// Get companies that lasted 10 years 

console.log('Get companies that lasted 10 years ');

const longCompanies = companies.filter(company => company.end - company.start >= 10);

console.log(longCompanies);

console.log('================================');
