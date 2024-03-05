
/* IMP Note : To run javascript file second_code.js in VS Code. You have to run second_code.html file.
So Right click on second_code.html file and select Open with Live Server option.It will open browser page.
Right click in browser select Inspect option.And You will see console tab on browser here we show our output of javascript
code.(Make sure you have installed Live Server plugin in vscode)  

JavaScript code alone cannot be executed without an HTML document because HTML provides the structure 
and context for the JavaScript code to run within a web browser.
The two languages work together to create dynamic and interactive web pages. 

*/


/* Note : any object in javascript store value in the form of key-value pair 
So after declaring the object as const you can change the values of object data.
Like In our case we change the value of age by accessing student object because object data 
stores in the form of key-value pair.Here age=> key and 24 => value. So we changed the value not key. */

// Declared student object
const student = {
    fullName : "Rahul Kumar",
    age : 24,
    cgpa : 8.9,
    isPass : true
};


console.log(student);

// To retrieve values of student object by two ways

console.log(student["fullName"]);
console.log(student.fullName);

// How to change the values inside the object. Let's change the value of age from student object

student["age"] = student["age"] + 2;

console.log(student["age"]);

