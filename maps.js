//maps are key value pair like objects but they are not exactly objects
//key and value can be of any data type

let map=new Map();
map.set("Sameer","JavaScript");
map.set("Rohan","C++");
map.set("Chirag","Blockchain");
console.log(map);

//displaying map's key value pair with forEach method
let result=map.forEach(myfun);
function myfun(p,k){ //syntax of foreach is array.forEach(value,index)
    console.log(k,":",p);
}