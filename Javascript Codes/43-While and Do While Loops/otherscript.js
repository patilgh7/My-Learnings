// Nesting while loops
 i = 1;

while(i <= 5){
    console.log('Number ' + i);

    let j = 1;

    while(j <= 5){
        console.log(`${i} * ${j} = ${i * j}`);
        j++;
    }

    i++;
}


// do while
console.log('====================');

i = 0;
do{
    console.log('Number '+i);
    i++;
}while(i <= 20)

console.log('====================');
