
let level="";
let m=0;
let n=0;
let tr=0;

const easy = document.querySelector("#easy");
const medium = document.querySelector("#medium");
const hard = document.querySelector("#hard");
const msg = document.querySelector("#msg");

easy.addEventListener("click",()=>{level="easy";reload();});
medium.addEventListener("click",()=>{level="medium";reload();});
hard.addEventListener("click",()=>{level="hard";reload();});

function reload(){
    if (level=="hard"){
        m=200;
        tr=1;
        msg.innerHTML="you have one try to guess number between zero and 200";
   }else if (level=="medium"){
        m=50;
        tr=3;
        msg.innerHTML="you have 3 tries to guess number between zero and 50";
   }else{
        m=10;
        tr=6;
        msg.innerHTML="you have 6 tries to guess number between zero and 10";
   }
    
   //GENERATE RANDOM NUMBER TO BE GUESSED BASED ON LEVEL
    randomNumber = Math.floor(Math.random()*(m-n+1))+n;

   setTimeout(() => {
    do {
        let text = prompt("Enter a number here");

        if (text == randomNumber) {
            msg.innerHTML="well donneeee!!!";
            break;}

        else if (text == null) {
            break;}
         
        else {
            tr--;
            if(tr==0){msg.innerHTML="womp womp womp"}
            else{alert("Number of attempts left: " + tr);}}
        
    } while (tr != 0);
}, 100);

}