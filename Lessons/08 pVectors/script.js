function setup() {
	createCanvas(1000, 500);
}

let x = 0;
let y = 255;
let radius = 250;

function draw() {
	ellipse(x, y, radius, radius);
	x = x + 2;


	// Background allows us to set a background color
	// background(255);
	// ellipse(x, y, radius, radius);
	// x = x + 2;


	// We can also change colors using variables
	// background(255);
	// fill(x, y - x, 0);
	// ellipse(x, y, radius, radius);
	// x = x + 1;
}
