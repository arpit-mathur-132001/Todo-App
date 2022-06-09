// get elements input, button and list
const input=document.querySelector("#todo");

// On Enter in input field, trigger add button 
input.addEventListener("keypress",(e)=>{
  if(e.key==="Enter"){
    document.getElementById("addTodo").click();
  }
})

// On click on any li, add a checked mark and line-through the todo
var check = document.querySelector('ul');
check.addEventListener('click', function(ev) {
  // if click is on any li, then add checked class to that li only
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
  if (ev.target.tagName === 'TABLE') {
    ev.target.classList.toggle('checked');
  }
});