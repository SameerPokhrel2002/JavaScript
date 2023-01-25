let alien={
    name:"sameer",
    age:20,
    tech:"JS",
    laptop:{
        cpu:"i7",
        ram:16,
        brand:"acer",
    }
}
for (let key in alien){  //key goes through objects in alien one by one..in first interation, key is name and in second iteration, key is age and so on
    if (key=="laptop")
    break;
    console.log(key,":",alien[key]);
}
for (let k in alien.laptop){
    console.log(`${k} : ${alien.laptop[k]}`);
}