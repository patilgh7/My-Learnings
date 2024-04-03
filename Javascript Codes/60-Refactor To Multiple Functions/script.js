/* 

function createNewItem(item){

    const li = document.createElement('li');
    // TextNode is inside the li tag...so we need to append that
    li.appendChild(document.createTextNode(item));

    const button = document.createElement('button');
    button.className = 'remove-item btn-link text-red';

    const icon = document.createElement('icon');
    icon.className = 'fa-solid fa-xmark';

    // icon tag needs to be appended inside the button tag
    button.appendChild(icon);

    // button tag needs to go inside the list item
    li.appendChild(button);

    // Append all to the ul or item list or DOM 
    document.querySelector('.items').appendChild(li); 


    console.log(li.innerHTML);


}

createNewItem('Cheese');

*/



// createNewItem function refactoring

function createNewItem(item){

    const li = document.createElement('li');
    // TextNode is inside the li tag...so we need to append that
    li.appendChild(document.createTextNode(item));

    const button = createButton('remove-item btn-link text-red');

    // button tag needs to go inside the list item
    li.appendChild(button);

    // Append all to the ul or item list or DOM 
    document.querySelector('.items').appendChild(li); 


    console.log(li.innerHTML);


}

createNewItem('Cheese');
createNewItem('Sauce');



// createNewItem function refactoring to multiple fuction for more readability

function createButton(classes){

    const button = document.createElement('button');
    button.className = classes;

    const icon = createIcon('fa-solid fa-xmark');

    // icon tag needs to be appended inside the button tag
    button.appendChild(icon);

    return button;
}

function createIcon(classes){

    const icon = document.createElement('icon');
    icon.className = classes;
    return icon;
}