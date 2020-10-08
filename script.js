var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomize");

window.onload = setGradient(); 

function setGradient() {
	body.style.background = "linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";

		css.textContent = body.style.background + ";";
}

function getRandomRGB() {
	var number1 = Math.floor(Math.random() * 255);
	var number2 = Math.floor(Math.random() * 255);
	var number3 = Math.floor(Math.random() * 255);

	return "rgb(" + number1 + ", " + number2 + ", " + number3 + ")";
}

function setRandomGradient() {
	var rgb1 = getRandomRGB();
	var rgb2 = getRandomRGB();

	body.style.background = "linear-gradient(to right, " 
		+ rgb1 
		+ ", " 
		+ rgb2 
		+ ")";

		css.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setRandomGradient);