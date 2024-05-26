 let  name =["vishal","Raj","Rajpal","Jitu"]
let age=[20,21,35,14]


function info(name,age){
    // console.log(name[0]);
    // console.log(age[0]);
    for (let  i= 0;  i<name.length;i++) {
        console.log(name[i]);
        
    }
    age.forEach(element => {
        console.log(element);
    });
}
const res= info(name,age)
