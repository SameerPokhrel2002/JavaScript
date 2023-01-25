//set is a collection of unique elements
//sets don't have index so we cant access elements of set via an index number
let nums=new Set();
nums.add(1);
nums.add(11);
nums.add("Sameer");
console.log(nums);

let user=new Set("sameer");
console.log(user);

console.log(nums.has(1)); //has is a method to check whether our set contains a particular element or not

//displaying each element in our set using forEach method
nums.forEach(myfun);
function myfun(values){
    console.log(values);
}