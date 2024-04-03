
const clearBtn = document.querySelector('#clear');

// function onClear(){

//     alert('Clear Items');
// }


/*
function onClear(){
    const itemList = document.querySelector('ul');

    itemList.innerHTML = '';
}

*/

/*
function onClear(){
    const itemList = document.querySelector('ul');
    const items = itemList.querySelectorAll('li');

    items.forEach((item) => item.remove());

}

*/

function onClear(){
    const itemList = document.querySelector('ul');
    const items = itemList.querySelectorAll('li');

    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }

}

// JavaScript Event Listener

/*
clearBtn.onclick = function(){

    alert('Clear Items');
};

*/


// addEventListener
// clearBtn.addEventListener('click', () => alert('Clear Items'));


// Passing onClear function in addEventListener
clearBtn.addEventListener('click', onClear);


// After 5 seconds EventListener will stop working because we are using removeEventListener 
// so ClearAll button will freeze after 5 seconds
// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);


// Below code automatically give alert without giving click on Clear All button 
/*
clearBtn.addEventListener('click', onClear);
setTimeout(() => clearBtn.click(), 5000);

*/