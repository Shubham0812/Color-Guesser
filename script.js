boxes = document.querySelectorAll(".boxes")
guess = document.querySelector(".colorGuess")
winnerScore = document.querySelector(".processing-overlay")
scoreMessage = document.querySelector(".processing")

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


function colorizeBoxes() {
    for (let i = 0; i < boxes.length; i++) {
        this.boxes[i].style.background = colors.pop();
        this.boxes[i].addEventListener("click", function () {

            if (life === 0) {
                console.log("Game over")
            }

            if (this.style.background === correctColor) {
                winnerScore.style.background = correctColor
                var color = correctColor.replace("rgb(", "").replace(")", "").split(',')
                scoreMessage.style.backgroundColor = `rgba(${color[0] + 10}, ${color[1] + 10}, ${color[2] + 10}, 0.5)`
                winnerScore.classList.add("show-message")
                setTimeout(function () {
                    winnerScore.classList.remove("show-message")
                }, 950)

            }
            else {
                this.classList.add("fade-down");
                var box = this
                setTimeout(function () {

                    box.parentNode.removeChild(box)
                }, 600)
                life -= 1
                if (life === 0) {
                    console.log("Game over")

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
}

generateRandomColors();
colorizeBoxes();


function reset() {
    colors = [];
    generateRandomColors();
    colorizeBoxes();
}