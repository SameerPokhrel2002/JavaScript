//functions are treated as objects by JS because whatever is not of primitive type is an object. We can assign an anonymous function to a variable and call that function with the help of that name. Anonymous function is such function which does not have function name in function definition.

let add=function(n1,n2){
        return n1+n2;
                       }
let result=add(1,2); // we can call our anonymous function with the help of "add"
console.log(result);
let combine=add; //we can give another name to our function like this also
console.log(combine(2,3)); 