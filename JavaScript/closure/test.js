let sum = function(a){
console.log("Hello User "+a);
let c=5
return function demo(b){
    return a+b+c
}
}
let store= sum(2)(2)
console.log(store);