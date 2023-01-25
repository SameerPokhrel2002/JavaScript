let alien={
    name:"sameer",
    age:20,
    tech:"JS",
    laptop:{                 //object inside an object
        brand:"acer",
        cpu:"i5",
        ram:16,
    }
}
console.log(alien.laptop.cpu.length); // . operator is used to access the porperty of an object inside another object too

//what if we print the length of an property of an object that does not exist
console.log(alien.laptop.cpuu?.length); //we use question mark to check whether that property even exisits or not

//we can also delete some properties of an object with the help of delete keyword
delete alien.laptop;  // deletes the property called laptop from the properties list
console.log(alien);