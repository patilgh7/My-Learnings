
// Break
for(let i = 1; i <= 20; i++){

    if(i === 15){
        console.log('Breaking.....');
        break;
    }

    console.log(i);
    
}

console.log('================================');

// Continue
for(let i = 1; i <= 20; i++){

    if(i === 13){
        console.log('Skipping 13.....');
        continue;
    }

    console.log(i);
    
}