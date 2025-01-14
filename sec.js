// let newBtn=document.createElement("button");
// newBtn.innerText="Click Me!!";
// newBtn.style.color="black";
// newBtn.style.backgroundColor="green";
// document.querySelector("body").prepend(newBtn);
// let para=document.querySelector("p");

// let modeBtn=document.querySelector("#mode");
// let curmode="light";
// modeBtn.addEventListener("click",function(){
//     if(curmode==="light"){
//         curmode="dark";
//         document.querySelector("body").style.backgroundColor="black";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }
//     else{
//         curmode="light";
//         document.querySelector("body").style.backgroundColor="white";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(curmode);
// });

let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#computer-score");
const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was Draw");
    msg.textContent = "It's a Draw! play again";
    msg.style.backgroundColor="black";
};

const showWinner = (userwin,userchoice,compchoice) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText=userscore;
        console.log("You win!");
        msg.innerText=`You Win! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
       
    } else {
        compscore++;
        compscorepara.innerText=compscore;
        console.log("You lose!");
        msg.innerText=`You Lose! ${compchoice} beats your ${userchoice}`;

        msg.style.backgroundColor="red";
        
    }
    
}

const playGame = (userchoice) => {
    console.log("User choice =", userchoice);
    const compchoice = gencompchoice();
    console.log("Computer choice =", compchoice);

    if (userchoice === compchoice) {
        drawGame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin,userchoice,compchoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("Choice was clicked", userchoice);
        playGame(userchoice);
    });
});

