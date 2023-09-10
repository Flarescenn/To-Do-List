const inputBox=document.getElementById("input");
const list=document.getElementById("todos");

function addTask(){
    if (inputBox.value!=='') {
        let li=document.createElement("li");
        li.innerHTML=inputBox.value ;
        list.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML='\u2716';
        li.appendChild(span);
    }
    inputBox.value="";
    updateLocalStorage();
}
list.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        updateLocalStorage();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        updateLocalStorage();
    }
}, false);

inputBox.addEventListener("keydown", function(e){
    if (e.key === 'Enter') { 
      addTask();
    }})

function updateLocalStorage() {
    localStorage.setItem("data", list.innerHTML);}
function showTask(){
    list.innerHTML=localStorage.getItem("data")
}
showTask();