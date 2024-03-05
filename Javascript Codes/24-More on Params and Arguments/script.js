// setting default value (user = 'Bot') in parameter

function registerUser(user = 'Bot'){

    // if(!user){
    //     user = 'Bot'
    // }

    return user + ' is registered';
}

console.log(registerUser());

// Rest Params
// using rest operator ...numbers it makes array of that parameters
// ...numbers = numbers[]
function sum(...numbers){
    
    let total = 0;

    for(const num of numbers){
        total += num;
    }

    return total;
}


console.log(sum(1, 2, 3, 4, 5,6));


// Object as params
function loginUser(user){
    return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
    id:1,
    name:'John',
};

console.log(loginUser(user));

// You can pass directly
console.log(loginUser({id:2, name:'Sara'}));


// Arrays as params

//This function gives random number
function getRandom(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    console.log(item);
}

// This function gives random number between 1 to 10
// To see random number refresh the page multiple times.
getRandom([1,2,3,4,5,6,7,8,9,10]);