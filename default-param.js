function add(num1,num2=0){
 //option 1
 // console.log(num1,num2);
 // if(num2==undefined){
 //  num2=0
 // }
 //option 2
 // num2=num2||0;
 const total=num1+num2;
 return total;
}
const result=add(15,54);
console.log(result);


function fullName(first,last='madari'){
  const name=first +' '+last;
  return name;
}
const names=fullName('saqib');
console.log(names);