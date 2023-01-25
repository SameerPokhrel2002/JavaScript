let num=5;
console.log(num, typeof num);
let num2=String(5); //explicit type conversion
console.log(num2,typeof num2);

//number+ string=string
let num3=5;
let user="sameer";
console.log(num3+user, typeof (num3+user)); //when used + operator with number and string, engine automatically converts to string

let num4=5;
let u="sameer";
console.log(num4-u, typeof (num4-u)); //NaN means not a number

let darr=parseInt("123sa5meer");
console.log(darr);
