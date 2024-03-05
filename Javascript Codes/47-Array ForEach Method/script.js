const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

socials.forEach(function (item){
    console.log(item);
});

console.log('============================');
console.log('Print using arrow function 1st way');
console.log('\n');

socials.forEach((item) => console.log(item));

console.log('============================');

console.log('Print using arrow function 2nd way');
console.log('\n');

socials.forEach((item, index,arr) => console.log(`${index} - ${item}`,arr));

console.log('============================');

console.log('Print using another way');
console.log('\n');

function logSocials(social){
    console.log(social);
}

socials.forEach(logSocials);

console.log('============================');

const socialObjs = [
    {name:'Twitter', url:'https://twitter.com'},
    {name:'Facebook', url:'https://facebook.com'},
    {name:'Instagram', url:'https://instagram.com'},
    {name:'LinkedIn', url:'https://linkedin.com'},

];

socialObjs.forEach((item) => console.log(item.name, item.url));

console.log('============================');
