//for of loop is mainly used for arrays in JavaScript

let nums=[1,4,9,3,0];

for (let i of nums){
    console.log(i);
}

//it's not that we can't use for in, we can but it's mainly for objects

for (let key in nums){ //in for of, i is assigned value but here, key is assigned the key of our data that is index number

    console.log(nums[key]);
}