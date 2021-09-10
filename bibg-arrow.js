//simple arrow function
const add=(num1,num2)=>num1+num2;
const sum=add(9,8);
console.log(sum)
const multiply=(num1,num2,num3)=>num1*num2*num3;
const product=multiply(9,8,10);
console.log(product)


const fiveTimes=(num)=>num*5;
const res=fiveTimes(90);
console.log(res);
//for one parameter no bracket in necessary
const tenTimes=num=>num*10;
const result=tenTimes(9);
console.log(result);


const getName=()=>'Rahul';
const name=getName();
console.log(name);

//complex case for arrow function with {} and return
const doMath=(x,y)=>{
 const sum=x+y;
 const diff=x-y;
 const pd=sum*diff;
 const res=pd*5;
 return res;
}
const final=doMath(10,5);
console.log(final)


