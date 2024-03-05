let d;

d = new Date();

// Sat Jul 10 2021 12:30:00 GMT+0530 (India Standard Time)
d = new Date(`2021-07-10T12:30:00`);

// Mon Dec 06 2021 12:00:00 GMT+0530 (India Standard Time)
d = new Date(`12/06/2021 12:00:00`);  


d = Math.floor(Date.now() / 1000);
console.log(d);
