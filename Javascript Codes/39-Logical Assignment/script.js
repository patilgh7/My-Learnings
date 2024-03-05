// Logical OR assignment (||=) operator assigns the right side value only if the left is falsy value.

console.log('Logical OR assignment (||=) operator');
let a = false;

// a = a || 10;
// above line we can write also like 
a ||= 10;
console.log(a);

// or
if(!a){
    a = 10;
}
console.log(a);


// 20 is true thats why it assigns left side value 
// 20 || 10
a = 20;       
a ||= 10;
console.log(a);

// null is false thats why it assigns right side value 
// null || 10
a = null;
a ||= 10;
console.log(a);

// 0 is false thats why it assigns right side value 
// 0 || 10
a = 0;
a ||= 10;
console.log(a);

console.log('===========================================');

//  Logical AND assignment (&&=) operator assigns the right side value only if the left is truthy value.

console.log('Logical AND assignment (&&=) operator');
let b = true;

// b = b && 30;
// above line we can write also like 
b &&= 30;
console.log(b);

// or
if(b){
    b = 30;
}
console.log(b);


b = 40;
b &&= 40;
console.log(b);

console.log('===========================================');

// Logical nullish assignment (??=) operator assigns the right side value only if the left value is nullish (null or undefined).

console.log('Logical nullish assignment (??=) operator');

let c = null;

if(c === null || c === undefined){
    c = 50;
}

console.log(c);


c = null
c = c ?? 60;
console.log(c);

// shorter version
c = 200;
c ??= 70;
console.log(c);

c = undefined;
c ??= 80;
console.log(c);