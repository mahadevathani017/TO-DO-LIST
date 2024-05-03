const inputBox = document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");

function addTask()
{
    if(inputBox.value==''){
        console.log("You must write something for doing list");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
    }
},false);
function saveData(){
    localStorage.setItem("Data",listcontainer.innerHTML);

}
function showData(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showData();
