console.log("Hello");

console.table({name:"Brad",email:"brad@gmail.com"});

console.group('simple');
console.log(10);
console.error('alert');
console.warn('Warning');
console.groupEnd();

const styles = 'padding:10px; background-color:white; color:green;'

console.log('%cHello World!',styles);