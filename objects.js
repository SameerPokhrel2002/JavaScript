let obj={
    name:"sameer",
    age:20,
    tech:'Javascript',
    'work exp':4,
};
console.log(typeof obj);
console.log(obj.name); //here, obj is an object, that's accessing its property called name
//objects in javascript are also called dictionaries in Python

//there's another way to access object's property
console.log(obj['age']); //this is the way

//if we have an property comprising of two words, then we can't use . operator so we gotta use square brackets
console.log(obj['work exp']);
let input='tech';
console.log(obj[input]); // if the property is given to by user we gotta use [] brackets also