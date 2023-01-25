let user="sameer";
let len=user.length;

function reverse(user_name,len){

    for (let i=len;i>=0;i--)
    console.log(user_name[i]);
}
reverse(user,len);