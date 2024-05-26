const users =[
    {
        id:1,
        name:"vishal",
        isActive:true,
        age:25
    },
    {
        id:2,
        name:"vishnu",
        isActive:true,
        age:30
    },
    {
        id:3,
        name:"Yuvraj",
        isActive:true,
        age:23
    },
    {
        id:4,
        name:"Raj",
        isActive:false,
        age:45
    },
]


// 1.write code to get array of names from given array of user
// 2.Get back only active users
// 3.sort users by age descending order

// const name= []
// solution  1 level 1
// for(let i=0;i<users.length;i++){
//     name.push(users[i].name)
// }
// console.log(name);

// solution 2 level 2
// users.forEach((user)=>{
//     name.push(user.name)
// })
// console.log(name);

// solution 3 
 
// const Name= users.filter((user)=>{
//      name.push(user.name)
// })
// console.log(name);

// solution 4 
// users.map((user)=>{
//     name.push(user.name)
// })
// console.log(name);

// solution 5

const sortListUser = users.filter((user)=> user.isActive)
.sort((user1,user2)=>user1.age< user2.age ? -1 : 1)
.map((user)=>user.name)
console.log(sortListUser);

// const New = users.sort((user1,user2)=>user1.age< user2.age ? 1 : -1)
// console.log(New);