// library is array of objects

const library = [
    {
        title : 'The Road Ahead',
        author : 'Bill Gates',
        status : {
            own : true,
            reading : false,
            read : false
        }
    },
    {
        title : 'Steve Jobs',
        author : 'Walter Isaacson',
        status : {
            own : true,
            reading : false,
            read : false
        }
    },
    {
        title : 'Mockingjay',
        author : 'Suzanne Collins',
        status : {
            own : true,
            reading : false,
            read : false
        }
    }
];

// set all library read status true
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;


console.log(library);


// destructure the title from first book and rename the the variable to firstBook

const { title:firstBook } = library[0];

console.log(firstBook);


// Turn the library object into JSON string

const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);