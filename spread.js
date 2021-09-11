const numbers=[11,22,33,44,55,66];
const newNumbers=[...numbers];
// console.log(...numbers)

//find max element of an array with spread
const max=Math.max(11,23,2,56,4);
const maxInArray=Math.max(...numbers);
// console.log(maxInArray)
const numbers2=[...numbers,88]
numbers.push(89);
console.log(numbers,numbers2)