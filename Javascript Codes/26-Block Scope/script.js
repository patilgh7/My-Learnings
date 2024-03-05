const x = 100;

if(true){

    const y = 50;
    console.log(x + y);
}

for(let i = 0; i <= 10; i++){
    console.log(i);
}

// difference between var, const, let
// var is not block scope it can be access outside the block

if(true){
    
    const a = 500;
    let b = 600;
    var c = 700;
}

console.log(c);

// var is function scoped if it is declared in function then it can not be accessible outside the block
// var only works in if statements and in loops if it is declared. It can be accessible outside.

function run(){
    var d = 100;

    console.log(d);
}

