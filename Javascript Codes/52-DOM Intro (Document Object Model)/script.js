
console.log(window);

console.log(window.document);

console.dir(window.document);

console.log(document.body);

console.log(document.body.innerHTML);

console.log(document.body.innerText);

console.log("===================================================");

// console.log(document.links);

console.log(document.links[0]);

// Using document.body.innerHTML you can change html page content
//document.body.innerHTML = '<h1>Hello World!</h1>'


console.log("===================================================");

console.log(document.getElementById('main'));

const main = document.getElementById('main');

// main.innerHTML = '<h1>Hello from main</h1>';


// Using querySelector function you are changing  h1 tag data in index.html file from Document Object Model to Hello
document.querySelector('#main h1').innerText = 'Hello';