let userscore =0;
let compscore =0;
const  choices = document.querySelectorAll("choice");
const msg = document.querySelector("msg");
const userscorePara =Document.querySelector("#user-score");
const compscorePara =document.querySelector("#comp-score");

const genCompchoice=() =>{
    const options=["rock","paper","seissors"];
    const randIdx =Math.floor(Math.random()*3);
    return options =[randIdx];
}
const drawGame =() =>{
    msg.innerText="Game was Drow, play again";
    msg.style.backgrondcolor ="#081b31";
}
const showWinner =(userWin,userChoice,compChoice)=>{
    if(userWin){
        userscore++;
        userscorePara.innerText=userscore;
        msg.innerText=`you win! your${userChoice} beats${compChoice}`;
        msg.style.backgrondcolor="green"
    }else{
        compscore++;
        compscorePara.innerText=compscore;
        msg.innerText1=`you lost ${compChoice}beats your${userChoice}`;
           msg.style.backgrondcolor="red"
    }

};
const playGame=(userChoice)=>{
    const compChoice=genCompchoice();
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=ture;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
          
                userWin=compChoice=== "seissors"?false:true;
            }else{
                userWin=compChoice==="rock"?false:true;
            }
            showWinner(userWin,userChoice,compChoice)
        }
    };
    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
          const userChoice = choice.getAttribute("id");
          playGame(userChoice);
        });
      });