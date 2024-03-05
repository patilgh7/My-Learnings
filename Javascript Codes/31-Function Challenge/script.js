// Challenge 1 : 
// Convert Fahrenheit to Celsius 
function getCelsius(tempretureInFahrenheit){
    const celsius = (tempretureInFahrenheit - 32) *  5/9;

    console.log(celsius);

    return celsius;

}

getCelsius(32);


// Convert Fahrenheit to Celsius by Arrow Function

const getCels= (tempretureInFahrenheit) => (tempretureInFahrenheit - 32) *  5/9;


console.log(`The temperature is ${getCels(50)}\xB0c`);


// Challenge 2 : 
// create function that will find min and max value 

function minMax(numbers){

    const min = Math.min(...numbers);

    const max = Math.max(...numbers);


    return {
        minimum : min,
        maximum : max
    };
}

console.log(minMax([1,2,3,4,5]));


// Challenge 3 : 

// Calculate area 
const rectangle = (length, width) => length * width;

console.log(rectangle(10,5));

// Or another way

((length, width) => {

    const area = length * width;

    const output = `The area of a rectangle with a length of ${length} and width of ${width} is ${area}`;

    console.log(output);
})(50,5);