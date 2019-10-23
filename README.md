
# Color-Guesser 

Color guessing game where you are given random colors and you have to guess it correctly to win.

You can find the game [here.](https://shubham0812.github.io/Color-Guesser/)



## Technologies Used
- HTML5
- CSS3
- Javascript

## How to Contribute?

 #### Prerequisites
 - An active internet connection.
 - Visual Studio Code.

#### Steps

1. Fork the repository.
2. Clone the repository
3. cd into the directory.
4. Make changes and open a PR.


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

## Credits

**©** **Shubham Kumar Singh** | *2019*


