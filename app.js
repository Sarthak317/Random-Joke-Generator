let base_url ="https://official-joke-api.appspot.com/random_joke";
let btn;
let msg;
let punch;
const button = document.querySelector(".btn");
let cont = document.querySelector(".joke-container");
let cont2 = document.querySelector(".punch-container");
button.addEventListener("click",async ()=>{
    let response = await fetch(base_url);
    let data = await response.json();
    if (punch) {
        punch.remove();
        punch = null;
    }
   if(msg){
      msg.innerText=data.setup;
   }
   else{
   msg = document.createElement("p");
   msg.innerText=data.setup;
   cont.prepend(msg);
    btn = document.createElement("button");
   btn.setAttribute("class","btn2")
   btn.innerText = " Puchline ! ";
   cont.after(btn);
   }
   btn.addEventListener("click",()=>{
      if(punch){
         punch.innerText = data.punchline;
      }
      else{
      punch = document.createElement("p");
      punch.setAttribute("class","punch-container");
      punch.innerText = data.punchline;
      btn.after(punch);
      }
   })
})