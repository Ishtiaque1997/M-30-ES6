const priyoPerson='Shabnur';
// priyoPerson='Shabana'//not possible because of const;
//default parameter
function getName(x,y='chowdhury'){
  const name=x+' '+ y;
  return name;
}
//template string
const friend=getName('sakib','bro')
console.log(friend)
const name='Sakib'
const myPeople=`mY NAME IS ${name} `;
console.log(myPeople)
//arrow function
const getName2=(first,last)=>first+ ' '+ last;
const fiveTimes=x=>x*10;
const guy=getName2('sakib','hasan');
// console.log(guy)
const bigArrow=(x,y,z)=>{
 const first=x+y;
 const second=x-y;
 const third=first*second;
 return third;
}
const res=bigArrow(1,2,3);
console.log(res);
//spread operator
const numbers=[2,3,4,5,6];
const newNumbers=[...numbers,908];
console.log(newNumbers)