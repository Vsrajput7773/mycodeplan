
// object prototype

const obj ={
    name:"Vishal",
    getname:function(){
        return this.name
    }
}

// console.log(obj);

const obj2={
    roll:"user",
    // name:"Rajpal",
    __proto__:obj
}

// console.log(obj2.getname());

const obj3={
    sub:"B.sc",
     __proto__:obj2,
}
// console.log(obj3.getname()) ;


// Array

const array1 =["name"]
// console.log(array1);

const object =new Object()
console.log(object);

const  array =[]
console.log(array);

Array.prototype.show=function(){
    return this
}
const city=["Ujjain"]

console.log(city.show());

Array.prototype.conrvtedToObject=function(){
    const newObj={}
    this.forEach(element=>{
        newObj[element]=element

    })
    return newObj
}
// console.log(city.conrvtedToObject());

function Myprototype(name){
    this.name=name  
} 
Myprototype.prototype=obj3

const myproto = new Myprototype("Priyanka")

console.log(myproto);



