//in order to create several objects of the same type, we use constructors
//it's considered good practice to name the constructor with it's first letter in uppercase
//constructor is nothing but a function that initializes the object
//new keyword is used whenever an object uses a constructor function to initialize itself

function Person(name,age){ //definition of constructor function called Person
    this.name=name; //this refers to that object which calls this constructor
    this.age=age;
    this.greet=function(){
        console.log("Hello! I'm "+ this.name);
    }

}
let person1= new Person("Sameer",20); //new keyword is used while initializing the object with a constructor
console.log(person1);
person1.greet();