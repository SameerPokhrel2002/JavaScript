// arrays are also treated as objects in JS
//it's a common practise to create an array with const keyword
const num=[1,2,3]; //this is an array of numbers
const numbs=new Array(1,2,3,4,5,6); // this is also another way to create an array
console.log(numbs);
num.push(4); // it adds 4 at the last position in our array
console.log(num);
num.pop(); // pops out last element from our array
console.log(num);