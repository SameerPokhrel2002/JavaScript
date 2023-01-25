//Data types in JS is divided into two categories. They are: Primitive and Object. Primitive data types are: numbers, strings, boolean, null, undefinied, symbol 

//typeof is an operator that gives us the type of data 
let num=2;
let user="sameer";
console.log(typeof num);
console.log(typeof user);

let num1=100_0_00_00; //we can use _ to know how many 0's we have. It's a special feature on JS!
console.log(num1);
console.log(Number.MAX_VALUE); //this gives the maximum value of a number in JS

//infinity is also a type of number in JS
let num2=5/0; let num3=-5/0;
console.log(num2);
console.log(num3);

//if we dont want to lose precision in our number, we use big int
let num4=101010101010101010101010010n
console.log(num4+2n); //if we dont use 2n then interpreter throws an error

//strings
let firstname="\"sameer\""; // escape sequence is used to cancel the special meaning of ""
console.log(firstname);
let lastname="pokhrel";
let username=firstname+" "+lastname;
console.log(username);

//boolean type
//it stores either 1 or 0!
let bool=5==5; //checks is 5==5
console.log(bool);
let a=5>6; //does not necessarily have to be bool
console.log(a);
console.log(typeof a);

