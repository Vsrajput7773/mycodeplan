// Rest Oprator
// function sum(a,b,...other){
// console.log(other);
//     return a+b;
// }
// console.log(sum(4,5,4,6));

// const arr=["vishal","Rajpal","Krishnpal"]
// spred oprator
// function sum1(name1,name2,name3){
    //console.log(name1,name2,name3);
// }
// console.log(sum1(...arr));
// console.log(sum1(arr));
    
// object

const user ={
    name:"Vishal",
    age:22,
    Role:"User"
}
// Rest
// const {age,...ages}=user
// console.log(age,ages);

// spared
console.log(user);
const user2 ={
...user,
age:24
}

console.log(user2);
