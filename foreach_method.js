//foreach() is a method of an array that returns each individial element of the array
//foreach calls a function for each element in an array
// syntax: array.forEach(my_function);
let nums=[33,1,6,9,10];
nums.forEach((n)=>  //first 33 is passed inside arrow function and it is printed and so on
{
    console.log(n);
});

let arr1=[1,2,3,4,5,6,7,8,9,10];
arr1.forEach(myfunction); //for each element in the array, myfunction is called
//2 arguments can be passed inside foreach method, they are function and this value while 3 arguments can be passed inside the function and they are value of an array, index, and array itself

function myfunction(n,i,arr){
    if (n%2==0)
    console.log(n);

}

