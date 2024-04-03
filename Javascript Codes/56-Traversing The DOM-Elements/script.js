let output;

// Get child elements from parent
console.log('======================================================');

console.log('Get child elements from parent :  ');

const parent = document.querySelector('.parent');

output = parent.children[1];

console.log(output);

output = parent.children[1].innerText;

console.log(output);

output = parent.children[1].className;

console.log(output);

output = parent.children[1].nodeName;

console.log(output);


// change the properties
parent.children[1].innerText = 'Child Two';

parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = 'Child One';

parent.lastElementChild.innerText = 'Child Three';

console.log('======================================================');

// Get parent element from a child

console.log('Get parent element from a child : ');
const child = document.querySelector('.child');

output = child.parentElement;

console.log(output);

child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';


console.log('======================================================');

// sibling elements

const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem;

console.log(output);

output = secondItem.nextElementSibling;

console.log(output);

secondItem.nextElementSibling.style.color = 'green';

secondItem.previousElementSibling.style.color = 'orange';
