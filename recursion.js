let num=1;

function myfun(){
    console.log("Hello!", num);
    num++;
    myfun(); //recursion
}
myfun(); //calling a fucntion