//an array in JS can contain various types of data like string, number, object, fucntion

let arr=["sameer",20,{tech:"JavaScript"}, function(){console.log("Hello!")}];
console.log(typeof arr); // array is an object as we had discussed earlier
console.log(arr); //prints all types of data in our array
console.log(arr[3]);// our 3rd indexed data is function but this code does not really print "hello"

//in order to print hello, we gotta invoke the function with paranthesis
arr[3](); //this prints hello because our 3rd indexed data is function and function is invoked with the help of parenthesis