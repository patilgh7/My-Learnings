for(let i = 0; i <= 10; i++){
    console.log('Number '+i);
}
console.log('===========================');

for(let i = 5; i <= 10; i+= 2){
    console.log('Number '+i);
}

console.log('===========================');

for(let i = 0; i <= 10; i++){

    if(i === 7){
        console.log('7 is my lucky number');
    }
}

console.log('===========================');

// Nested loop

for(let i = 1; i <= 10; i++){
    console.log('Number '+i);

    for(let j = 1; j <= 10; j++){
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

console.log('===========================');

// Loop throgh an array

const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

for(let i = 0; i < names.length; i++){
    
    if(i === 2){
        console.log(names[i] +' is the best');
    }else{
        console.log(names[i]);
    }
    
}

console.log('===========================');

for(let i = 0; i < names.length; i++){
    
    if(names[i] === 'John'){
        console.log(names[i] +' is the best');
    }else{
        console.log(names[i]);
    }
    
}

console.log('===========================');
