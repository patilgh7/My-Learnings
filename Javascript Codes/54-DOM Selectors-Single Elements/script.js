
// document.getElementById()
console.log(document.getElementById('app-title'));

console.log(document.getElementById('app-title').id);

console.log(document.getElementById('app-title').getAttribute('id'));

// set attributes

// document.getElementById('app-title').id = 'new-id';

// document.getElementById('new-id').getAttribute('id');

document.getElementById('app-title').title = 'Shopping List';

document.getElementById('app-title').setAttribute('class','title');

const title = document.getElementById('app-title');

console.log(title);


// Get/change content

console.log(title.textContent);

title.textContent = 'Hello World!';

title.innerText = 'Hello Again';

title.innerHTML = '<strong>Shopping List</strong>';

// change styles

title.style.color = 'red';

title.style.backgroundColor = 'black';

title.style.padding = '10px';

title.style.borderRadius = '10px';


// In vanilla javascript we use getElementById whatever you selected you must need id 
// so in some cases you dont have control of html. 
// when we use querySelector => here you dont need class or attributes.

// document.querySelector()

console.log(document.querySelector('h1'));

// Note querySelector('h1') it gives only first h1 tag details

// select by id

console.log(document.querySelector('#app-title'));

// select by class

console.log(document.querySelector('.container'));

console.log(document.querySelector('input[type = "text"]'));

console.log(document.querySelector('li:nth-child(2)').innerText);

const secondItem = document.querySelector('li:nth-child(2)');

secondItem.innerText = 'Apple Juice';

secondItem.style.color = 'red';

// Use these methods on other elements means other than document we can use querySelector method on another element
// like below we used in list element

const list = document.querySelector('ul');

console.log(list);

const firstItem = list.querySelector('li');

firstItem.style.color = 'blue';





