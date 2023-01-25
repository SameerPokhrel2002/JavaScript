let laptop1={
    cpu:"i7",
    ram:16,
    brand:"acer",
    compare: function(laptop2){ //laptop2 is a local variable/object
        if (this.cpu>laptop2.cpu) //since laptop1 called this method, this refers to laptop1, in c++ this is an object pointer
        console.log(this);
        else
        console.log(laptop2);
    }
}
let laptop2={
    cpu:"i9",
    ram:8,
    brand:"asus",
}
//now we wanna compare cpu of laptop1 with laptop2 then we create a method called compare inside laptop1 object and we call that method with laptop1 by passing laptop2 as argument
laptop1.compare(laptop2); 
//in above code, laptop1 calls compare method and passes laptop2 as an argument, then the flow of the program shifts where the compare method is defined