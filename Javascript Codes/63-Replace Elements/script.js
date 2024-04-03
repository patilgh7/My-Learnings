
//

function replaceFirstItem(){

    const firstItem = document.querySelector('li:first-child');

    const li = document.createElement('li');

    li.textContent = 'Replaced First';

    firstItem.replaceWith(li);


}

function replaceSecondItem(){

    const secondItem = document.querySelector('li:nth-child(2)');

    secondItem.outerHTML = '<li>Replaced Second</li>';

}


function replaceAllItems(){

    const list = document.querySelectorAll('li');

   
    list.forEach((item, index) => {

        if(index === 1){
            item.innerHTML = 'Second Item';
        }else{

            item.innerHTML = 'Replace All';
        }

        // or you can use outerHTML for same
        // item.outerHTML = '<li>Replace All</li>';

    });

  

    // Using Ternary Operator above code rewritten here
    // list.forEach((item, index) => (item.outerHTML = index === 1 ? '<li>Second Item</li>' : '<li>Item</li>'));


}


// replaceChildHeading function changes Header of Shopping List is <h1></h1> to <h2></h2>
// This will see you in Elements tab and you will see change in Shopping List font

function replaceChildHeading(){
    const header = document.querySelector('header');

    const h1 = document.querySelector('header h1');

    const h2 = document.createElement('h2');

    h2.id = 'app-title';
    h2.textContent = 'Shopping List';
    header.replaceChild(h2, h1);

}

replaceFirstItem();
replaceSecondItem();
replaceAllItems();
replaceChildHeading();