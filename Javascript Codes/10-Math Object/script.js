let x;

x = Math.sqrt(9);
console.log(x);

// round method round up and round down accordding to figure that means 4.2 => 4  and 4.6 => 5
x = Math.round(4.2)
console.log(x);

// ceil method round up the figure that means 4.2 => 5
x = Math.ceil(4.2);
console.log(x);

// floor method round down the figure that means 4.2 => 4
x = Math.floor(4.2);
console.log(x);

// pow method 2^3 = 8
x = Math.pow(2, 3);
console.log(x);

// min and max methods

x = Math.min(4,5,3,1);
console.log(x);

x = Math.max(12,9,3,1);
console.log(x);

// random method gives number between 0 to 1 in decimal fraction
x = Math.random();
console.log(x);

// Gives random number between 1 to 9 in decimal in decimal fraction 
x = Math.random() * 10
console.log(x);

// Gives random number between 1 to 100 round figure
x = Math.floor(Math.random() * 101);
console.log(x);