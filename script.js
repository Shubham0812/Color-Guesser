console.log('Connected')

boxes = document.querySelectorAll(".boxes")
guess = document.querySelector(".colorGuess")
winnerScore = document.querySelector(".processing-overlay")
scoreMessage = document.querySelector(".processing")

gameSize = 6
// console.log(boxes)

correctColor = ""
var colors = [];


function colorizeBoxes() {
    for (let i = 0; i < boxes.length; i++) {
        this.boxes[i].style.background = colors.pop();
        this.boxes[i].addEventListener("click", function () {
            console.log("inside event", this.style.background)
            if (this.style.background === correctColor) {
                winnerScore.style.background = correctColor
                var color = correctColor.replace("rgb(", "").replace(")", "").split(',')
                scoreMessage.style.background = `rgba(${color[0] + 10}, ${color[1] + 10}, ${color[2] + 10}, 0.4)`
                console.log("checking", color)
                winnerScore.style.display = "flex"
                winnerScore.classList.add("fade-up")
                setTimeout(function () {
                    console.log("Time to remove")
                    winnerScore.classList.remove("fade-up")
                    winnerScore.style.display = "none"
                }, 1800)

            } else {
                this.classList.add("fade-down");
            }
        })
    }
}


function colorPicked(box) {
    console.log(box.srcElement.style.background)
    if (box.srcElement.style.background === correctColor) {
    } else {
    }
}


function generateRandomColors() {
    for (let i = 0; i < gameSize; i++) {
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

    console.log("Color to guess", correctColor)
}

generateRandomColors();
colorizeBoxes();
