
//multiply every element of an array by 10
//map method calls a function for each element in an array
const arr=[2,4,5,8];
const new_arr=arr.map(myfunction); //passes each element to a function called myfunction

function myfunction(num){
    return num*10;
}
console.log(new_arr);