const x = 100;
const y = 50;

function getSum(n1, n2){
    const sum = n1 + n2;
    return sum;
}

const sum1 = getSum(x, y);

const sum2 = getSum(10, 5);

console.log(sum1, sum2);

// Go to browser Inspect => then go to Sources tab => Set the debug point to first line => Refresh Browser
// Debugging will start and debug the whole code to check line by line