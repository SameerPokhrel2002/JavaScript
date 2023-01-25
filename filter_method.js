//filter method is a method associated with array that returns an array after passing the function test

const age=[1,2,3,4,5]; //array of age

//now we wanna filter out the ages that are less than 18 and store in another array

const filtered_age=age.filter(myfunction); //each individual elements in an array age is passed to myfunction and myfunction returns those elements to our new array which pass the function test
function myfunction(age){
    return age>=18;

}
console.log(filtered_age);

//reduce method in an array
//reduce method does not return an array but a single value
let result=age.reduce(my_function);

function my_function(total,value){
    return total+value;
}
console.log(result);