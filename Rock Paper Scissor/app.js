let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userPoint = document.querySelector("#user-score");
let CompPoint = document.querySelector("#comp-score");


const genCompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game was draw, Play again ";
    msg.style.backgroundColor = "#19183B"
};

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        console.log("you win !");
        msg.innerText = `YOU WIN!🥇 Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
        userScore++;
        userPoint.innerText = userScore;
    } else {
        console.log("you lose");
        msg.innerText = `YOU LOSE!☹️ Your ${compChoice} beats ${userChoice}.`
        msg.style.backgroundColor = "red";
        compScore++;
        CompPoint.innerText = compScore;
    }
}



const playGame = (userChoice) => {
    console.log(`user choice = ${userChoice}`);
    const compChoice = genCompchoice();
    console.log(`comp choice = ${compChoice}`);

    if (userChoice === compChoice) {
        drawGame(); //draw game
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // scissors , paper 
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // scissor, rock 
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // paper, rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    };
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});