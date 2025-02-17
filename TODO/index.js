
const nameee=document.querySelectorAll("input");
const trash = document.querySelectorAll("img");


const content=nameee[1];
const submit=nameee[2];
const namee=nameee[0];

const list = document.querySelector(".list");

submit.addEventListener("click",function(){
console.log("ssss");
list.innerHTML += `<p class="btn btn-light"> ${namee.value} : ${content.value} <img src="trash-can.png"></p>`;});





list.addEventListener("click",function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
    }
});




trash.forEach(function(i){
    i.addEventListener("click",function(){
        i.remove();
    })
});
