console.log(10 < 20 && 30 > 15 && 40 > 30);

console.log(10 > 20 || 30 > 15);

// && will return first falsy value or the last value

let a;

a = 10 && 20;
console.log(a);

a = 10 && 20 && 30;
console.log(a);

a = 10 && '' && 0 && 30;
console.log(a);


const posts = ['Post One', 'Post Two'];

posts.length > 0 && console.log(posts[0]);

// || will return first truthy value or the last value

let b;

 b = 10 || 20;
 console.log(b);


 b = 0 || 20;
 console.log(b);

 b = 0 || '' || null;
 console.log(b);

 // Nullish coalescing operator (??)

 // ?? - returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. 

let c;

c = 10 ?? 20;
console.log(c);

c = null ?? 20;
console.log(c);

c = undefined ?? 30;
console.log(c);

c = 40 ?? null;
console.log(c);

c = 0 ?? null;
console.log(c);