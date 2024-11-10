let choices = document.querySelectorAll(".choice");
let msg=document.querySelector(".play");
let you=document.querySelector(".you");
let comp=document.querySelector(".comp");
let user2=1;
let comp2=1;
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let user = choice.getAttribute("id"); 
const arr=["rock","paper","scissor"];
index=Math.floor(Math.random()*3);
computer=arr[index];
console.log(user);
console.log(computer);
showWinner(computer,user);
    });
});
const withoutDraw=(user1,user,computer)=>{
    if(user1)
    {
        console.log(user);
        msg.innerHTML=`<h3 style="padding-left:40px;padding-bottom:10px">you win! your ${user} beats ${computer}</h3>`;
        let user3=user2++; 
        you.innerHTML=`&nbsp;&nbsp;${user3}`;
        msg.classList.add("win");
        msg.classList.remove("lose", "draw");
    }
    else
    {
        console.log(computer);
        msg.innerHTML=`<h3>computer win! computer ${computer} beats your ${user}</h3>`;
        let comp3=comp2++;

        comp.innerHTML=`&nbsp;&nbsp;&nbsp;&nbsp; ${comp3}`;
        msg.classList.add("lose");
        msg.classList.remove("win", "draw");
    }
}
const showWinner=(computer,user)=>{
if(computer==user)
{
msg.innerHTML=`<h3 style="padding-left:170px;padding-bottom:10px;">Draw</h3>`;
console.log("draw");
msg.classList.add("draw");
msg.classList.remove("win", "lose");
}
else {
  let  user1 =true;
  if(user=="rock")
  {
    user1=computer=="paper"?false:true;

    withoutDraw(user1,user,computer);
  }
  else if(user=="paper")
  {
    user1=computer=="rock"?true:false;
    withoutDraw(user1,user,computer);
  }
  else if(user="scissor"){
    user1=computer=="rock"?true:false;
    withoutDraw(user1,user,computer);
  }
}
}


