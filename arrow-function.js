//declare function with a variable name
const add=function add(num1,num2){
 return num1+num2;
}
const sum=add(12,13);
// console.log(sum);
//declare function with no variable name or anonymous function 

const add2=function (num1,num2){
 return num1+num2;
}
const sum2=add2(12,13);
console.log(sum2);
//arrow function
const add4=(num1,num2)=>num1+num2;
const sum3=add4(90,89);
console.log(sum3)