document.getElementById('add-border').addEventListener('click',function(){
 const container=document.getElementById('friend-container');
 container.style.border='3px solid red'
})

function addBackgroundColor(){
 const friends=document.getElementsByClassName('friend');
for(const friend of friends){
 friend.style.backgroundColor='gray'
}
}

document.getElementById('add-friend').addEventListener('click',function(){
 const container=document.getElementById('friend-container');
 const friendDiv=document.createElement('div');
 friendDiv.classList.add('friend');
 friendDiv.innerHTML=`
   <h3 class="friend-name">New friend</h3>
   <p>Qui libero perspiciatis ipsum aperiam!</p>`;
   container.appendChild(friendDiv)
})
document.getElementById('add-color-friend').addEventListener('click',function(){
 // const container=document.getElementById('friend-container');
 // console.log('nknk')
 const friendsName=document.getElementByClassName('friend-name');
 // const f=friendsName.innerText;

 console.log(friendsName)
// friendName.style.backgroundColor='gray'
})