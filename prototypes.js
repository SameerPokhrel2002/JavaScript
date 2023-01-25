//this is the object constructor
//before the concept of class was introduced in javascript, objects were initialized like this 
function Person(first,last,age,eyecolor){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.eyeColor=eyecolor;
};

const myFather=new Person("Hari","Pokhrel",50,"brown");
const myMother=new Person("Sarasawati","Pokhrel",45,"black");
console.log(myFather);
// console.log(myMother);