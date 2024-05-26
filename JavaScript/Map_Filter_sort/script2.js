const users = [
  {
    id: 1,
    name: "vishal",
    isActive: true,
    age: 25,
  },
  {
    id: 2,
    name: "vishnu",
    isActive: true,
    age: 30,
  },
  {
    id: 3,
    name: "Yuvraj",
    isActive: true,
    age: 23,
  },
  {
    id: 4,
    name: "Raj",
    isActive: false,
    age: 45,
  },
];

// 1. check If User with such name Exists

// const isExist =(name,users)=>{
//     let exist =false
//     for(let i=0;i<users.lenght;i++){
//         if(users[i].name === name)
//         {
//             exist=true
//         }
//     }
//     return exist
// }

// soultion with useing find=()
// const isNameExist =(name,users)=>{
//     const  user = users.find((user)=> user.name === name)
//     return Boolean(user)
// }

//   findIndec() = solution
// const isNameExist =(name,users)=>{
//     const  user = users.findIndex((user)=> user.name === name)
//     // return user    //0 1 for true / -1 for false
//     return user >=0  //true of false
// }

// some()

// const isNameExist=(name,users)=>{
// const user =users.some((user)=> user.name === name)
// return user
// }

// 2. Adding element to the array

// let arr =[1,2,3]
// let arr2=[4,5,6]

// const append=(arr ,ele)=>{
//     // arr.push(ele)
//     // return arr

//    return [...arr,ele]

// }

// console.log(append(arr,4));
// console.log(arr);

// 3.Remove Duplicate Array

// const arr = [1, 2, 3, 2, 4, 5, 3, 2, 4];

// function uniqueArray() {
//   const newArray = [];
//   arr.forEach((ele) => {
    //     if (!newArray.includes(ele)) {
        //       newArray.push(ele);
        //     }
        //   });
        //   return newArray;
        // }
        
// const arr = [1, 2, 3, 2, 4, 5, 3, 2, 4];
// function uniqueArray(arr) {
// return [...new Set(arr)]
// }
// console.log(uniqueArray(arr));
// console.log(arr);


// // marg of two array
// const arr=[1]
// const arr2 =[2,3,4]
// const msrgArray=(arr,arr1)=>{
//     // return [...arr,...arr2]

//     return arr.concat(arr1)
// }

// console.log(msrgArray(arr,arr2))
// console.log((arr))
// console.log((arr2))