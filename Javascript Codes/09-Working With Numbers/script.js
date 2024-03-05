const number = 5;

console.log(number , typeof number);

// Use number in object form to use methods like toLocaleString() thats why we used "new Number()" this syntax
// we can not use toLocaleString() method for string 

const num = new Number(999);

console.log(num , typeof num);

let x;

// If you want how many digits are in given numbers
x = num.toString().length;

console.log(`Digit in numbers : ${x}`);


// toFixed method gives how many digits you want after point 33.1235 => becomes 33.12 if you use toFixed(2)
const num2 = new Number(33.1235);

let y = num2.toFixed(2);

console.log(y);

// toPrecision method gives round figure
const num3 = new Number(34.568);

let z = num3.toPrecision(2);

console.log(z);



/*
This code is not working properly

const num5 = new Number(444);

let n = num5.toLocaleString("hi-IN");
console.log(n);

*/


function convertToHindiNumeral(number) {
    const digits = String(number).split('');
    const hindiNumerals = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];

    return digits.map(digit => hindiNumerals[digit]).join('');
}

const num4 = 444;
let m = convertToHindiNumeral(num4);
console.log(m);