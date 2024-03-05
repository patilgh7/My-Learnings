
console.log('Using For In Loop for Object');
const colorObj = {
    color1 : 'red',
    color2 : 'blue',
    color3 : 'orange',
    color4 : 'green'

}

for(const key in colorObj){
    console.log(key, colorObj[key]);
}

console.log('========================');

console.log('Using For In Loop for Array');


const colorArr = ['red', 'green', 'blue', 'yellow'];

for(const key in colorArr){
    console.log(colorArr[key]);
}

console.log('========================');
