// let value=0;

// function sum(n){
//     for (let i = 0; i<=n; i++) {
//         value+=i
//     }
//     return value
// }

// const memo =(fun)=>{
//     let cache={}
//     return function(...arg){
//     let n=arg[0];

//     if(n in cache){
//     console.log("chach");
//     console.log(cache);
//     return cache[n];
// }
// else{
//     console.log("calculating first time");
//     let result =fun(n);
//     cache[n]=result
//     return result
// }
// }}

// console.time()
// const res =memo(sum)
// console.log(res(5));
// console.timeEnd()

// console.time()
// // const res =memo(sum)
// console.log(res(6));
// console.timeEnd()
// console.time()
// let res =sum(5)
// console.log(res);
// console.timeEnd()



// chat gpt
let value = 0; // Declares a variable 'value' initialized to 0.
function sum(n) { // Defines a function 'sum' that takes a parameter 'n'.
  for (let i = 0; i < n; i++) { // Initializes a loop that runs from 0 to 'n-1'.
    value += i; // Adds 'i' to 'value' in each iteration of the loop.
  }
  return value; // Returns the final value of 'value' after the loop.
}

const memo = (fun) => { // Defines a higher-order function 'memo' that takes a function 'fun' as input.
  let cache = {}; // Initializes an empty object 'cache' to store memoized results.
  return function (...arg) { // Returns an anonymous function that takes any number of arguments.
    let n = arg[0]; // Retrieves the first argument passed to the anonymous function.

    if (n in cache) { // Checks if the value of 'n' is already stored in the cache.
      return cache[n]; // If found in cache, returns the memoized result directly.
    } else {
      console.log("calculating first time"); // Prints a message indicating that the result is being calculated for the first time.
      let result = fun(n); // Calls the original function 'fun' with argument 'n' and stores the result.
      cache[n] = result; // Stores the result in the cache for future use.
      return result; // Returns the computed result.
    }
  };
};

console.time(); // Starts a timer to measure the execution time.
const res = memo(sum)(5); // Calls the memoized version of 'sum' function with argument 5 and stores the result.
console.timeEnd(); // Ends the timer and prints the elapsed time.


