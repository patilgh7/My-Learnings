// Falsy values
console.log('==============================');
console.log('Falsy Values');
console.log('==============================');

let x = false;

console.log('x = false');
if(x){
    console.log('This is truthy');
}else{
    console.log('This is falsy');
}

console.log(Boolean(x));

console.log('==============================');

x = 0;

console.log('x = 0 (0 without string is false)');

if(x){
    console.log('This is truthy');
}else{
    console.log('This is falsy');
}

console.log(Boolean(x));

console.log('==============================');
// empty string without space i.e falsy
x = '';

console.log('x = \'\'(string without space is false)');

if(x){
    console.log('This is truthy');
}else{
    console.log('This is falsy');
}

console.log(Boolean(x));

console.log('==============================');

x = null;

console.log('x = null');

if(x){
    console.log('This is truthy');
}else{
    console.log('This is falsy');
}

console.log(Boolean(x));

console.log('==============================');

x = undefined;

console.log('x = undefined');

if(x){
    console.log('This is truthy');
}else{
    console.log('This is falsy');
}

console.log(Boolean(x));

console.log('==============================');

x = NaN;

console.log('x = NaN');

if(x){
    console.log('This is truthy');
}else{
    console.log('This is falsy');
}

console.log(Boolean(x));

// Truthy Values

console.log('==============================');
console.log('Truthy Values');
console.log('==============================');

let y  = true;

console.log('y = true');

if(y){
    console.log('This is truthy');
}else{
    console.log('This is falsy');
}

console.log(Boolean(y));

console.log('==============================');
// 0 with string is true and 0 without string is false
y  = '0';

console.log('y = \'0\' (0 with string is true)');

if(y){
    console.log('This is truthy');
}else{
    console.log('This is falsy');
}

console.log(Boolean(y));

console.log('==============================');
// ' ' string with space is true and  ''string without space is false
y  = ' ';

console.log('y = \' \'(string with space is true)');

if(y){
    console.log('This is truthy');
}else{
    console.log('This is falsy');
}

console.log(Boolean(y));

console.log('==============================');

y  = [];

console.log('y = []');

if(y){
    console.log('This is truthy');
}else{
    console.log('This is falsy');
}

console.log(Boolean(y));

console.log('==============================');

y  = {};

console.log('y = {}');

if(y){
    console.log('This is truthy');
}else{
    console.log('This is falsy');
}

console.log(Boolean(y));

console.log('==============================');

y  = function () {};

console.log('y = function () {}');

if(y){
    console.log('This is truthy');
}else{
    console.log('This is falsy');
}

console.log(Boolean(y));

// Truthy and Falsy Caveats
console.log('==============================');

console.log('Truthy and Falsy Caveats');

console.log('==============================');


let children = 2; 

if(children){
    console.log(`You have ${children} children`);
}else{
    console.log('Please enter number of children');
}

console.log('==============================');

children = 0;

if(children !== undefined){
    console.log(`You have ${children} children`);
}else{
    console.log('Please enter number of children');
}

console.log('==============================');

// Checking for empty array

console.log('Checking for empty array');

const posts = ['Post One, Post Two'];

// const posts = [];

if(posts.length > 0){
    console.log('List Posts');
}else{
    console.log('No Posts To List');

}

console.log('==============================');


// Checking for empty object

console.log('Checking for empty object');

const user = {
    name:'Brad'
};

// const user = {};

if(Object.keys(user).length > 0){
    console.log('List User');

}else{
    console.log('No User');

}

console.log('==============================');
