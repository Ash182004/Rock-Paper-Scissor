let userscore=0;
let compscore=0;

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const choices=document.querySelectorAll(".choice");
const mssg=document.querySelector("#mssg");

const genCompChoice=()=>{
    const options=["rock","paper","Scissor"];
    const randIndx=Math.floor(Math.random()*3);
    return options[randIndx];
}

const drawGame=()=>{
    mssg.innerText="The game was draw!";
    mssg.style.backgroundColor="blue";

}
const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userscore++;
        userScorePara.innerText=userscore;
        mssg.innerText=`you win! your ${userChoice} beats ${compChoice}`;
        mssg.style.backgroundColor="green";
    }
    else{
        compscore++
        compScorePara.innerText=compscore;
        mssg.innerText=`you lose. your ${userChoice} lost from ${compChoice}`;
        mssg.style.backgroundColor="red";
    }

}

const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==='rock'){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="Scissor"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin, userChoice, compChoice);;
    }
}



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);

    })
})



