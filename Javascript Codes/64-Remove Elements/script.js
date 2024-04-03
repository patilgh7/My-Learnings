
function removeClearButton(){
    const clearBtn = document.querySelector('#clear');
    clearBtn.remove();
}

function removeFirstItem(){
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');  // or use 'li:nth-child(1)'

    ul.removeChild(li);

}


// For remove any item from list created removeItem() function

function removeItem(itemNumber){

    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${itemNumber})`);

    ul.removeChild(li);
}


// Another version of removeItem method
function removeItem2(itemNumber){

    const ul = document.querySelector('ul');
    const li = document.querySelectorAll('li')[itemNumber - 1];

    ul.removeChild(li);
}

// Another version of removeItem method
function removeItem3(itemNumber){

    const ul = document.querySelector('ul');
    const li = document.querySelectorAll('li');

    li[itemNumber - 1].remove();

}

// Using Arrow function

const removeItem4 = (itemNumber) => document.querySelectorAll('li')[itemNumber - 1].remove();




// removeClearButton();
// removeFirstItem();

// removeItem(2);

// removeItem2(1);

// removeItem3(1);

removeItem4(1);

