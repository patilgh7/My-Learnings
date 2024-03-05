const post = {
    id : 1,
    title : 'Post One',
    body : 'This is the body'
};

console.log(post);

// convert to JSON String

const str = JSON.stringify(post);

console.log(str);

// Parse JSON
const obj = JSON.parse(str);

console.log(obj);

// when you need specific property like id you have to parse first
console.log(obj.id);


const posts = [
    {
        id : 1,
        title : 'Post One',
        body : 'This is the body'
    },
    {
        id : 2,
        title : 'Post two',
        body : 'This is the body'
    }
];

const str2 = JSON.stringify(posts);

console.log(str2);


//*********************** 

console.log('*********************');
const myData = {
    id : 101,
    name : 'John',
    city : 'Mumbai',
};

console.log(myData);

// Note : first convert to JSON String then Parse the JSON String

// convert to JSON String
const str3 = JSON.stringify(myData);

console.log(str3);

// Parse JSON

const obj3 = JSON.parse(str3);

console.log(obj3);

