'use strict';

let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highestScore = 0;

const displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
}

const displayScore = function(score) {
    document.querySelector(".score").textContent = score;
}

const displayNumber = function(number) {
    document.querySelector(".number").textContent = number;
}

const bodyBackColor = function(color) {
    document.querySelector("body").style.background = color;
}


document.querySelector(".again").addEventListener("click", () => {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20 + 1);
    displayScore(score);
    displayMessage("Start guessing...");
    //document.querySelector(".number").textContent = "?";
    displayNumber("?");
    document.querySelector(".guess").value = " ";
    //document.querySelector("body").style.background = "#222";
    bodyBackColor("#222");
})


document.querySelector(".check").addEventListener("click", () => {
    let number = Number(document.querySelector(".guess").value);
    if (!number || number > 20 || number < 1) {
        displayMessage("💥 Invalid number");
    } else if (number === secretNumber) {
        if (score > highestScore) {
            highestScore = score;
        }
        document.querySelector(".highscore").textContent = highestScore;
        //document.querySelector("body").style.background = "#60b347";
        bodyBackColor("#60b347");
        //document.querySelector(".score").textContent = score;
        displayScore(score);
        displayNumber(secretNumber);
        displayMessage("🎉 correct number");
        secretNumber = Math.floor(Math.random() * 20 + 1);
        //document.querySelector(".number").textContent = secretNumber;
    } else if (number !== secretNumber) {
        if (score > 1) {
            score--;
            displayMessage(number > secretNumber ? "📈 Too high" : "📉 Too low");
            //document.querySelector(".score").textContent = score;
            displayScore(score);
        } else {
            displayMessage("💥 You lost game");
            //document.querySelector(".score").textContent = 0;
            displayScore(0);

        }
        //document.querySelector("body").style.background = "#222";
        bodyBackColor("#222");
        displayNumber("?");
    }
})

document.addEventListener("keypress", (e) => {
    console.log(e.key)
})