let id=Symbol("this is my id");
//here id is our variable of symbol type and inside parenthesis we can add description of our symbol variable
console.log(id, typeof id);

let id1=Symbol("sameer");
let id2=Symbol("sameer");
console.log(id1===id2); //gives false because symbols are unique

let id3=Symbol("this is a description of symbol id3");
console.log(id3.description);