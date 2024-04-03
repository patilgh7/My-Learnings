
const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

function run(){
    //className 
    // console.log(itemList.className);
    // text.className = 'card dark';

    // classList
    // console.log(itemList.classList);

    itemList.classList.forEach(c => console.log(c));

    // text.classList.add('dark');
    // text.classList.remove('card');

    // text.classList.toggle('dark');

    // text.classList.toggle('hidden');

    // text.classList.replace('card', 'dark');

    // Change style
    // itemList.style.lineHeight = '3';

    items.forEach((item, index) => {
        item.style.color = 'red';

        if(index === 2){
            item.style.color = 'blue';
        }
    });


}

document.querySelector('button').onclick = run;

// Note : Please click on run button everytime to see the change  
// Please uncomment the code from run function while checking the code.
// Then click on select arrow in left and click on paragraph you will see toggle the class name of paragraph 
// from card to dark and dark to card (Because of text.classList.toggle('dark'); this code)
// text.classList.toggle('hidden') => this will hidden the paragraph