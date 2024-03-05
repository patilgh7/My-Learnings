let x, y;

x = Math.ceil(Math.random() * 100);
console.log(`x = ${x}`);

y = Math.ceil(Math.random() * 50);
console.log(`y = ${y}`);

let sumOutput, differenceOutput, productOutput, quotientOutput;

sumOutput = x + y;
differenceOutput = x - y;
productOutput = x * y;
quotientOutput = x / y;
rmOutput = x % y;

console.log(` Sum => ${x} + ${y} = ${sumOutput}`);

console.log(` Difference => ${x} - ${y} = ${differenceOutput}`);

console.log(` Product => ${x} * ${y} = ${productOutput}`);

console.log(` Quotient => ${x} / ${y} = ${quotientOutput}`);

console.log(` Remainder => ${x} % ${y} = ${rmOutput}`);