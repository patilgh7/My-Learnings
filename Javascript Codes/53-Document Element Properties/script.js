// Using DOM properties you can simply access properties of html page.

// You can access following things from html page but note that all the fields you are trying to access here
// It must contain in html page otherwise it will give error 

// Note : In this code we dont mention all the fields in html page like forrm, link.
// If you want to see output please add these fields in html page first then uncomment the code.

let output;

output = document.all;

console.log(output);

console.log("==================================");

output = document.all[11];

console.log(output);

console.log("==================================");

output = document.all.length;

console.log(output);

console.log("==================================");

output = document.documentElement;

console.log(output);

console.log("==================================");

output = document.head;

console.log(output);

console.log("==================================");

output = document.body;

console.log(output);

console.log("==================================");

output = document.head.children;

console.log(output);

console.log("==================================");

output = document.body.children;

console.log(output);

console.log("==================================");

output = document.doctype;

console.log(output);

console.log("==================================");

output = document.domain;

console.log(output);

console.log("==================================");


output = document.URL;

console.log(output);

console.log("==================================");

output = document.characterSet;

console.log(output);

console.log("==================================");

output = document.contentType;

console.log(output);

console.log("==================================");

// Following method works when html page has these fields in code like forms, forms[0].id

output = document.forms;

console.log(output);

console.log("==================================");



output = document.forms[0];

console.log(output);

console.log("==================================");



output = document.forms[0].id;

console.log(output);

console.log("==================================");


// You can set id of form

document.forms[0].id = 'new-id';

console.log("==================================");

output = document.forms[0].action;

console.log(output);

console.log("==================================");


output = document.links;

console.log(output);

console.log("==================================");



output = document.links[0];

console.log(output);

console.log("==================================");


// If you want to access just link

output = document.links[0].href;

console.log(output);

console.log("==================================");



// If you want to change the link

output = document.links[0].href = 'https://facebook.com'; 

console.log(output);

console.log("==================================");


output = document.links[0].id = 'google-link';

console.log(output);

console.log("==================================");


output = document.links[0].className = 'google-class';

console.log(output);

console.log("==================================");


output = document.links[0].classList;

console.log(output);

console.log("==================================");


output = document.images;

console.log(output);

console.log("==================================");


output = document.images[0];

console.log(output);

console.log("==================================");



// If you want source of the image

output = document.images[0].src;

console.log(output);

console.log("==================================");


// If you want to access multiple forms 

const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));
console.log(output);