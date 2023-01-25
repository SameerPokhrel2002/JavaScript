let arr1=[5,6,3,1,8];
console.log(arr1);
arr1.push(7); //adds element 7 at the last
arr1.pop(); //pops out last element from the array
arr1.shift(); //pops out first element from the array
console.log(arr1);
arr1.unshift(10); //adds element 10 at the beginning of the array
console.log(arr1);
arr1.splice(2,2,11,15); //first argument is index number, second is, no of elements to remove, and last two arguments are the elements to add in an array
// that means the above code removes two elements starting from index 2 and adds 11 and 15 in the removed place
console.log(arr);