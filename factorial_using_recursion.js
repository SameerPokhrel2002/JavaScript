let num=5;

function fact(n){
    if (n===0 || n===1)
    return n;
    else
    return n*fact(n-1);
}
let result=fact(num);
console.log(`The factorial of ${num} is ${result}.`);