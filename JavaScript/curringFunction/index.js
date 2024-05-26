// function Addition(a,b,c){
//     return a+b+c;
// }
// let res =Addition(1,2,3)
// console.log(res);

// curring function

// function Addition(a){
//     return function(b){
//        return function(c){
//         return a+b+c;
//        }
//     }
// }

//     let res =Addition(2)
//     let data=res(2)
//     let data2=data(2)
// console.log(data2);

// let res =Addition(2)(5)(2)
// console.log(res);

// real use case

const User = {
    name:"vishal",
    age:20
}

function userIn(obj){
return function(userInfo){
return obj[userInfo]
}
}

let res =userIn(User)
let userin=res("name")
console.log(userin);

// infinite curring

// function add(a) {
//   return function (b) {
//     if (b) return add(a + b);
//     return a;
//   };
// }

// console.log(add(2)(4)(4)(5)(5)());
