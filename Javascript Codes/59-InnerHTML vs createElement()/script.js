// We have in our page already we have shopping item list like Apples, Orange Juice, Oreos, Milk
// So in this code we will learn how to add new item in HTML page using javascript methods
// we are using innerHTML and document.createElement() to add item
// innerHTML is quick way but not recommended.
// createElement() is recommended

// Using innerHTML (Short Way)
function createListItem(item){
    const li = document.createElement('li');

    li.innerHTML = `${item}
    <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
    </button>`

    document.querySelector('.items').appendChild(li); 

    // .items => it is a class name for item list in html file => <ul id="item-list" class="items">  


}

createListItem('Eggs');


// Using document.createElement() ...This is good approach

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


/**
 * Note : 
 * Using innerHTML causes the web browser to Re-Parse and ReCreate all the DOM Nodes inside
 * the ul element so this is less efficient.
 * 
 * Using createElement() it is more clean and more readable.
 * 
 * 
 */