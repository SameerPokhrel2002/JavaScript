//methods are nothing but functions inside an object. An object comprises not only of characteristics, but also methods/behaviours/functions

let human={
    name:"sameer",
    age:20,
    tech:"JS",
    greet:function(){   //here, greet is our method and we call this function with the name greet
        console.log(`Hello ${human.name}`);
    }
}
human.greet(); //we have to use paranthesis because greet is a function