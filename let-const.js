//const variables cannot be reassigned.
const numbers=[11,22,33,44,55];
//numbers=[12,22,33,44];//re-assign not possible
numbers.push(56);//possible
numbers[1]=90;//possible

const student={roll:101,name:'mofij',job:'intern'};
student.name='rohim';//possible
student={roll:90,name:'shakil'}//not possible

for(let i=0;i<numbers.length;i++){
 const number=numbers[i];
 console.log(number);
}
