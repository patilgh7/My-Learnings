
// for(let i = 1; i <= 100; i++){
   
//     console.log(i);

// }
console.log('=====================');
console.log('Using if else with for loop');
console.log('=====================');

for(let i = 1; i <= 100; i++){
   
    if(i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
    }else if(i % 3 === 0){
    
        console.log('Fizz');
    }else if(i % 5 === 0){
        console.log('Buzz');

    }
    else{
        console.log(i);
    }

}

console.log('=====================');
console.log('Using switch with for loop');
console.log('=====================');

for(let j = 1; j <= 100; j++){

    switch(true){

        case j % 3 === 0 && j % 5 === 0 :
            console.log('FizzBuzz');
            break;
        case j % 3 === 0 :
            console.log('Fizz');
            break;
        case j % 5 === 0 :
            console.log('Buzz');
            break;
        default:
            console.log(j);    
    }
}

console.log('=====================');