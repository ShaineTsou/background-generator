var bodyBg = document.getElementById("bodyBg");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var h3 = document.querySelector("h3");

bodyBg.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
h3.textContent = bodyBg.style.background + ";";

function setGradient(){
    bodyBg.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    h3.textContent = bodyBg.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


// MDN Introduction to events - RANDOM COLOR PICKER //

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events//

var rndPickerBtn = document.getElementById("rndPicker");

function random(number) {
	return Math.floor(Math.random()*(number));
}

function pickRandomColor() {
	var rndCol1 = "rgb(" + random(255) + ", " + random(255) + ", " + random(255) + ")";
	var rndCol2 = "rgb(" + random(255) + ", " + random(255) + ", " + random(255) + ")";

	bodyBg.style.background = "linear-gradient(to right, " + rndCol1 + ", " + rndCol2 + ")";
    h3.textContent = bodyBg.style.background + ";";
}


rndPickerBtn.addEventListener("click", pickRandomColor);



// I also want to make the color input 1 and color input 2 to change to the corresponding colors when I press the rndPickerBtn.

// How to solve this problem?
	
	// What I have tried

		// 1. Within the curly brackets of the pickRandomColor function, I typed 
		
		//		color1.value = rndCol1;
		//		color2.value = rndCol2;

		// it turned out that when I clicked the rndPickerBtn, both the value of the color input 1 and color input 2 became #000000.

		// So it seemed that I need to turn the rndCol1 and rndCol2 which are RGB into Hex.

			// RGB to hex and hex to RGB - StackOverflow
			// https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
