

/* IMP Note : To run javascript file first.js in VS Code. You have to run index.html file.
So Right click on index.html file and select Open with Live Server option.It will open browser page.
Right click in browser select Inspect option.And You will see console tab on browser here we show our output of 
javascript code.(Make sure you have installed Live Server plugin in vscode).

JavaScript code alone cannot be executed without an HTML document because HTML provides the structure 
and context for the JavaScript code to run within a web browser.
The two languages work together to create dynamic and interactive web pages. 

*/

console.log("Hello World!");


/* var,let,const :

var : Variable can be re-declared and updated. A global scope variable.

In these days we don't use var keyword in javascript code.This is old style. We use var keyword before 2015.

ECMAScript 6th edition released in 2015 after that We generally use let and const keyword most of the time.
ECMA => European Computer Manufacturers Association.

let : Variable cannot be re-declared but can be updated. A block scope variable.

const : Variable cannot be re-declared or updated. A block scope variable. */



let fullName ="Tony Stark";
console.log(fullName);

let age = 24;
console.log(age);

let price = 99.99;
console.log(price);

const PI = 3.14;
console.log(PI);

let b;
console.log(b);   //output : undefined 
