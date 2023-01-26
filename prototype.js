//we can't put new property to an object constructor
function Student(firstName,lastName,age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
};

let stu1=new Student("Sameer","Pokhrel",20);
let stu2=new Student("John","Trevor",22);
// console.log(stu1);

// stu1.eyeColor="black"; //this is allowed
Student.eyeColor="black";
console.log(stu1);

//to add a new property to a constructor, we must add it to th constructor function 

//if we wanna add property to our object constructor function, we do so using prototype property 

Student.prototype.nationality="Nepali";
console.log(stu1.nationality);

//we can also add methods
Student.prototype.greet=function(){
    console.log(`Hello! My name is ${stu1.firstName}!`);
}
console.log(stu1.greet());

//another example
const myObj={
    city:"Kathmandu",
    greet(){
        console.log(`Greetings from ${this.city}!`)
    }
};
myObj.greet();

//every object in JS has built-in property which is called prototype
// console.log(Object.getPrototypeOf(stu1));