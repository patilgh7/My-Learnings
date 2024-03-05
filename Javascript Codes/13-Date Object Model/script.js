let x;

let d = new Date();

x = d.getDate();
console.log(x);

x = d.getTime();
console.log(x);

x = d.valueOf();
console.log(x);

x =d.getFullYear();
console.log(x);

x =d.getMonth()+1;
console.log(x);

x =d.getDay();
console.log(x);

x =d.getHours();
console.log(x);

x =d.getMinutes();
console.log(x);

x =d.getSeconds();
console.log(x);

// Using Date Methods
console.log('Using Date Methods');
x = `${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}`;
console.log(x);


// Using DateTime API
console.log('Using Date Time API');
let a = new Date();
let y = Intl.DateTimeFormat('en-US').format(a);
console.log(y);

y = Intl.DateTimeFormat('en-GB').format(a);   // GB used for UK
console.log(y);

y = Intl.DateTimeFormat('default').format(a);   
console.log(y);


y = a.toLocaleString('hi-IN',{month: 'long'});
console.log(y);

// full date in marathi
let m = new Date();

let options = { weekday: 'long', day: 'numeric', month: 'long', year:'numeric' };
let output = m.toLocaleDateString('mr-IN', options);
console.log(output);

// full date in hindi

options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();
console.log(today.toLocaleDateString("hi-IN", options));

// Another way using toLocaleString method

let n;

today = new Date();

n = today.toLocaleString('default',{

    weekday:'long',
    year:'numeric',
    month:'long',
    day:'numeric',
    hour:'numeric',
    minute:'numeric',
    second:'numeric',
    timeZone:'Asia/Kolkata',
});

console.log(n);
