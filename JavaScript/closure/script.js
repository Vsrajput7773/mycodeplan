// let sum =function(a){
// console.log("Hello User "+a);
// let c=5
// return function demo(b){
//     return a+b+c
// }
// }
// const store=sum(2)
// console.log(store(2));

// 2 example new way

const sum = function (a, b, c) {
  return {
    getSumTwoValue: function () {
      return a + b;
    },
    getSumThreeValue: function () {
      return a + b + c;
    },
  };
};

const store = sum(1, 2, 3);
console.log(store.getSumTwoValue());
console.log(store.getSumThreeValue());

const store1 = sum(4, 5, 6);
console.log(store1.getSumTwoValue());
console.log(store1.getSumThreeValue());
