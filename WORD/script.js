
const params= document.querySelectorAll("input");
color=params[0];
size=params[1];
font=document.querySelector("select");
const text=document.querySelector("#typing_zone");
const button=document.querySelector("#button");

button.addEventListener("click",function(){
    text.style.color=color.value;
    text.style.fontSize=size.value+"pt";
    text.style.fontFamily=font.value;
});