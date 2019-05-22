function setup() {
	createCanvas(1000, 500);
}

function draw() {
	// x is a variable that holds the value 250
	let x = 250;
	let y = 200;
	let radius = 250;

	ellipse(x, y, radius, radius);


	// Fill lets us add a color in the RGB format
	// fill(0, 255, 100);
	// ellipse(x, y, radius, radius);


	// We can also use variables for the values
	// let red = 0;
	// let green = 255;
	// let blue = 100;

	// fill(red, blue, green);
	// ellipse(x, y, radius, radius);
}