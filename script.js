console.log('Connected')

boxes = document.querySelectorAll(".boxes")

console.log(boxes)


var colors = [];


function colorizeBoxes() {
    
}



function generateRandomColors() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    var color = `rgb(${r}, ${g}, ${b})`
    boxes[0].style.background = color

    console.log(color)
}


generateRandomColors();
