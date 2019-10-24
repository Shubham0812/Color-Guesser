
# Color-Guesser 

Color guessing game where you are given random colors and you have to guess it correctly to win.

You can find the game [here.](https://shubham0812.github.io/Color-Guesser/)



## Technologies Used
- HTML5
- CSS3
- Javascript


## Code Example

    function generateRandomColors() {
	    for (let i =  0; i < gameSize; i++) {
		    let r = Math.floor(Math.random() *  256)
		    let g = Math.floor(Math.random() *  256)
		    let b = Math.floor(Math.random() *  256)
		    var color =  `rgb(${r}, ${g}, ${b})`
		    colors.push(color)
	    }
	    correctColor = [...colors].sort(function () {
		    return Math.random() -  0.5;
	    })[0]
	    guess.innerHTML = correctColor
    }
    
    
## Contributors / Thanks

 - Gerson Garrido (https://github.com/gersongams)

## Having trouble?
If you are having trouble using this project, please open a new issue and describe your problem.

## Spread the word!
Liked the project? Just give it a star ⭐️ and spread the word!


