// document.querySelectorAll()

const listItems = document.querySelectorAll('.item');

console.log(listItems[1].innerText);

// change the color of one item
// listItems[1].style.color = 'red';

// change the color of all items

// listItems.forEach((item, index) => {
//   item.style.color = 'red';

//   if (index === 1) {
//     item.remove();
//   }

//   if (index === 0) {
//     item.innerHTML = `Oranges
//         <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//         </button>`;
//   }
// });

const listItems2 = document.getElementsByClassName('item');

console.log(listItems2[2].innerText);


console.log("============Using forEach==============");
const listItemsArray = Array.from(listItems2);

listItemsArray.forEach((item) => {
    console.log(item.innerText);
})


const listItems3 = document.getElementsByTagName('li');

console.log(listItems3[0]);