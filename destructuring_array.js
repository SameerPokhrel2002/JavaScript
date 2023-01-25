//lets learn destructuring an array by an example

let arr=[1,2,3,4,5];
[a,b,c,d,e]=arr; //a is assigned 1, b is assigned 2 and so on
console.log(a,b,c,d,e);

let arr1=[3,7,8,1,10];
[a,,,,e]=arr1;
console.log(a,e); //rest of the elements in arr1 are skipped

//swapping two numbers with the help of array destructuring

let x=1,y=2;
console.log(`Before swapping: x=${x} and y=${y}`);
[x,y]=[y,x];
console.log(`After swapping: x=${x} and y=${y}`);


//interesting case in array
let words="My name is Sameer Pokhrel";
console.log(words);
//what can we do if we wanna treat above statement as an array
//if we print words then whole sentence gets printed at once but if we wanna print those words as an array, we use split() method at the end of the above sentence!

words="My name is Sameer Pokhrel".split(' '); //parameter is space because we wanna split on the basis of space
//now our words becomes an array
console.log(words);

//since words has become an array, we can assign it like:
[aa,bb,cc,dd,ee]=words;
console.log(dd,ee); //prints "Sameer Pokhrel"

//suppose we want bb to contain rest of the words after  "My" then we write

[aa,...bb]=words;
console.log(bb); // this means now "bb" has become an array