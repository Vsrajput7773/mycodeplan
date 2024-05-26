// solve with collback

const datas =[
    {
        name:"vishal",
        profression:"Sofwere Engineer"
    },
    {
        name:"Yuvi",
        profression:"Sofwere Engineer"
    }
]

function getData(){

    setTimeout(()=>{
        let output="";
        datas.forEach((data,index)=>{
            output+=`<li>${data.name}</li>`
        })
    document.body.innerHTML=output
    },1000)
}

function createData(newData,collback){
    setTimeout(()=>{
    datas.push(newData)
    collback()
    },2000)
}
// getData()
createData({name:"Jitu",profression:"civil Engineer"},getData)

// solution 2

// const datas = [
//   {
//     name: "vishal",
//     profression: "Sofwere Engineer",
//   },
//   {
//     name: "Yuvi",
//     profression: "Sofwere Engineer",
//   },
// ];
// function getData() {
//   setTimeout(() => {
//     let output = "";
//     datas.forEach((data, index) => {
//       output += `<li>${data.name}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// function createData(newData) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             datas.push(newData);
//           let error =false
//           if(!error){
//               resolve()
//           } else{
//             reject("Kuch to glt hai...")
//           }
//           }, 2000);
//     })
// }
  
// getData()
// createData({ name: "Jitu", profression: "civil Engineer" })
// .then(getData)
// .catch((error)=> console.log(error))

// using async await  

// async function start(){
// await createData({ name: "Jitu", profression: "civil Engineer" })
// getData()
// }

// start()