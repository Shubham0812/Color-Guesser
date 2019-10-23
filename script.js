boxes = document.querySelectorAll(".boxes")
guess = document.querySelector(".color-guess")
winnerScore = document.querySelector(".processing-overlay")
scoreMessage = document.querySelector(".processing")
gameOver = document.querySelector(".game-over")
boxesContainer = document.querySelector(".container")
retryButton = document.querySelector(".retry")
message = document.querySelector(".message")
guessNumber = document.querySelector(".guess-number")
remainingGuess = document.querySelector(".remaining-guess")

gameSizes = {
    "easy": {
        "tries": 1,
        "tiles": 3
    },
    "hard": {
        "tries": 3,
        "tiles": 6
    }
}

mode = "hard"

life = 0


correctColor = ""
var colors = [];


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

            if (life === 0) {
                console.log("Game over")
                gameOver.classList.add("show")
                boxesContainer.classList.add("hide")
            }

            if (this.style.background === correctColor) {
                winnerScore.style.background = correctColor
                var color = correctColor.replace("rgb(", "").replace(")", "").split(',')
                scoreMessage.style.backgroundColor = `rgba(${color[0] + 10}, ${color[1] + 10}, ${color[2] + 10}, 0.2)`
                winnerScore.classList.add("show-message")
                setTimeout(function () {
                    winnerScore.classList.remove("show-message")
                    gameOver.classList.add("show")
                    message.innerHTML = "You Won!"
                    boxesContainer.classList.add("hide")
                    remainingGuess.classList.add("hide")

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
                    console.log("Game over")
                    gameOver.classList.add("show")
                    boxesContainer.classList.add("hide")
                    remainingGuess.classList.add("hide")
                }
            }
        })
    }
}


function contrastCheck() {
    var color = correctColor.replace("rgb(", "").replace(")", "").split(',')
    if ((color[0] * 0.299 + color[1] * 0.587 + color[2] * 0.114) < 0.1) {
        return true
    }
    else {
        return false
    }
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

generateRandomColors();
colorizeBoxes();


function reset() {
    colors = [];
    life = 0;
    gameOver.classList.remove("show")
    boxesContainer.classList.remove("hide")
    remainingGuess.classList.remove("hide")

    message.innerHTML = "Game Over!"
    var remainingBoxes = document.querySelectorAll(".boxes")
    for (let i = 0; i < remainingBoxes.length; i++) {
        var box = document.querySelector(".boxes")
        boxesContainer.removeChild(box)
    }

    generateRandomColors();
    colorizeBoxes();


}