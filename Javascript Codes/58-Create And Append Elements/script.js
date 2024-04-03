const div = document.createElement('div');  // This create blank div
console.log(div);

// Here you are adding className 
div.className = 'my-element';

// adding id
div.id = 'my-element';

// set an attribute
div.setAttribute('title','My Element');
console.log(div);


// innerText
// This is not good approach to add text using innerText..it is mostly to used for replacing existing text
// div.innerText = 'Hello World';  

const text = document.createTextNode('Hello World');
div.appendChild(text);

// Below line will add changes to last of the html page 
// document.body.appendChild(div);  

// If you want to add created div in ul tag into html page
document.querySelector('ul').appendChild(div);

// console.log(div);

/*
 Note : changes added from script file like adding new div into html page directly reflect on browser...

        These changes you will see in Elements tab in browser.
        
        But you can't see these changes in actual html pages...because these changes injected externally from script file
        to html page

*/