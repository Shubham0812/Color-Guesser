boxes = document.querySelectorAll(".boxes")
guess = document.querySelector(".color-guess")
winnerScore = document.querySelector(".processing-overlay")
scoreMessage = document.querySelector(".processing")
gameOver = document.querySelector(".game-over")
boxesContainer = document.querySelector(".container")
retryButton = document.querySelector(".retry")
message = document.querySelector(".message")
messageScore = document.querySelector(".message-score")
guessNumber = document.querySelector(".guess-number")
remainingGuess = document.querySelector(".remaining-guess")
startup = document.querySelector(".startup")
easyBox = document.querySelector(".easy-box")
hardBox = document.querySelector(".hard-box")


gameSizes = {
    "easy": {
        "tries": 2,
        "tiles": 3,
        "score": 1
    },
    "hard": {
        "tries": 3,
        "tiles": 6,
        "score": 2
    }
}

var mode;
var life;
var correctColor;
var colors = [];
var scores = 0;


retryButton.addEventListener("click", reset)

function colorizeBoxes() {
    for (let i = 0; i < gameSizes[mode].tiles; i++) {
        var colorButton = document.createElement("DIV")
        colorButton.classList.add("boxes")
        boxesContainer.appendChild(colorButton)
    }
    boxes = document.querySelectorAll(".boxes")
    for (let i = 0; i < boxes.length; i++) {
        this.boxes[i].style.background = colors.pop();
        this.boxes[i].addEventListener("click", function () {
            console.log('Boxes clicked')
            if (life === 0) {
                gameOver.classList.add("show")
                boxesContainer.classList.add("hide")
            }

            if (this.style.background === correctColor) {
                scores += gameSizes[mode].score
                console.log(scores)
                winnerScore.style.background = correctColor
                var color = correctColor.replace("rgb(", "").replace(")", "").split(',')
                scoreMessage.style.backgroundColor = `rgba(${color[0] + 10}, ${color[1] + 10}, ${color[2] + 10}, 0.2)`
                winnerScore.classList.add("show-message")
                setTimeout(function () {
                    winnerScore.classList.remove("show-message")
                    messageScore.classList.add("hide")
                    boxesContainer.classList.add("hide")
                    remainingGuess.classList.add("hide")
                    
                    initializeGame(mode)
                }, 950)
            }
            else {
                this.classList.add("fade-down");
                var box = this
                setTimeout(function () {
                    box.parentNode.removeChild(box)
                }, 500)
                life -= 1
                guessNumber.innerHTML = life

                if (life === 0) {
                    message.innerHTML = "Game Over!"
                    messageScore.innerHTML = "Your Score: "+ scores;
                    gameOver.classList.add("show")
                    messageScore.classList.add("show")
                    boxesContainer.classList.add("hide")
                    remainingGuess.classList.add("hide")
                }
            }
        })
    }
}

function countScores() {

}

function generateRandomColors() {
    for (let i = 0; i < gameSizes[mode].tiles; i++) {
        let r = Math.floor(Math.random() * 256)
        let g = Math.floor(Math.random() * 256)
        let b = Math.floor(Math.random() * 256)
        var color = `rgb(${r}, ${g}, ${b})`
        colors.push(color)
    }
    correctColor = [...colors].sort(function () {
        return Math.random() - 0.5;
    })[0]
    guess.innerHTML = correctColor
    life = gameSizes[mode].tries
    guessNumber.innerHTML = life
}



function setup() {
    guess.innerHTML = "RGB value will be displayed and you have to guess it to win"
    easyBox.addEventListener("click", function () {
        initializeGame(easyBox.innerHTML)
    })
    hardBox.addEventListener("click", function () {
        initializeGame(hardBox.innerHTML)
    })
}


function initializeGame(modes) {
    var remainingBoxes = document.querySelectorAll(".boxes")
    for (let i = 0; i < remainingBoxes.length; i++) {
        var box = document.querySelector(".boxes")
        boxesContainer.removeChild(box)
    }
    colors = [];
    startup.classList.add("hide")
    boxesContainer.classList.remove("hide")
    remainingGuess.classList.remove("hide")
    mode = modes.toLowerCase()
    console.log(mode)
    generateRandomColors();
    colorizeBoxes();
}


function reset() {
    if (life === 0) {
        scores = 0;   
    }
    colors = [];
    life = 0;
    gameOver.classList.remove("show")
    boxesContainer.classList.remove("hide")
    remainingGuess.classList.remove("hide")
    guess.innerHTML = "RGB value will be displayed and you have to guess it to win"


    message.innerHTML = "Game Over!"
    var remainingBoxes = document.querySelectorAll(".boxes")
    for (let i = 0; i < remainingBoxes.length; i++) {
        var box = document.querySelector(".boxes")
        boxesContainer.removeChild(box)
    }
    startup.classList.remove("hide")
    boxesContainer.classList.add("hide")
    remainingGuess.classList.add("hide")
}


setup()
