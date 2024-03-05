
// Conditional Statements

// let age = 25;

// if(age >= 18){
//     console.log("You can vote");
// }

// =======================
let mode = "dark";
let color;

if(mode === "dark"){
    color = "black";
}
else{
    color = "white";
}


console.log(color);

// =========================

let theme = "blue";
let shade;

if(theme === "dark"){
    shade = "black";
}else if(theme === "blue"){
    shade = "blue";
}else if(theme === "pink"){
    shade = "pink";
}else{
    shade = "white";
}

console.log(shade);


// ============================

// Ternary Operator
let age = 20;

let result = age >= 18 ? "adult" : "not adult";

console.log(result);


// ============================

// prompt

let num = prompt("Enter a number : ");

if(num % 5 === 0){
    console.log(num,"is a multiple of 5");
}else{
    console.log(num, "is Not a multiple of 5");
}
