/*

The Game Project

Week 3

Game interaction

*/

var cameraPosX = 0;
var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var isFalling;
var isPlummeting;
var collectable;
var canyon;
var trees_x;
var clouds;
var mountains;

function setup() {
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;

	collectable = {
		x_pos: 70,
		y_pos: floorPos_y,
		size: 40,
		isFound: false
	};

	trees_x =[ 150, 350, 550, 750, 950];

	clouds = [
		{x_pos: 100, y_pos: 100},
		{x_pos: 300, y_pos: 100},
		{x_pos: 500, y_pos: 100}
	];

	mountains = [
		{x_pos: 100, y_pos: 100},
		{x_pos: 300, y_pos: 100},
		{x_pos: 500, y_pos: 100}
	];

	canyon = {
		x_pos: 0,
		width: 100
	};
}

function draw() {
	///////////DRAWING CODE//////////

	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	// Move the camera
	push();
	translate(-cameraPosX, 0);

	// Draw collectable item
	if (dist(gameChar_x, gameChar_y, collectable.x_pos, collectable.y_pos) < 20) {
		collectable.isFound = true;
	}

	if (collectable.isFound == false) {

		fill(255, 0, 0);
		ellipse(collectable.x_pos, collectable.y_pos-20, collectable.size, collectable.size);
		fill(255, 255, 0);
		ellipse(collectable.x_pos, collectable.y_pos-20, collectable.size - 10, collectable.size - 10);
		fill(255, 0, 0);
		ellipse(collectable.x_pos, collectable.y_pos-20, collectable.size - 20, collectable.size - 20);
		fill(255, 255, 0);
		ellipse(collectable.x_pos, collectable.y_pos-20, collectable.size - 30, collectable.size - 30);
		fill(255, 0, 0);
		ellipse(collectable.x_pos, collectable.y_pos-20, collectable.size - 40, collectable.size - 40);
		
	}

	// Draw clouds
	for (var i = 0; i < clouds.length; i++) {
		stroke(255);
		fill(255);
		ellipse(clouds[i].x_pos, clouds[i].y_pos, 100, 100);
		ellipse(clouds[i].x_pos + 50, clouds[i].y_pos, 100, 100);
		ellipse(clouds[i].x_pos + 25, clouds[i].y_pos - 25, 100, 100);
		ellipse(clouds[i].x_pos + 25, clouds[i].y_pos + 25, 100, 100);
		ellipse(clouds[i].x_pos - 25, clouds[i].y_pos + 25, 100, 100);
		ellipse(clouds[i].x_pos - 25, clouds[i].y_pos - 25, 100, 100);
	}

	// Draw mountains
	for (var i = 0; i < mountains.length; i++) {
		stroke(196, 164, 132);
		fill(196, 164, 132);
		triangle(mountains[i].x_pos, floorPos_y, mountains[i].x_pos + 100, floorPos_y - 200, mountains[i].x_pos + 200, floorPos_y);
		triangle(mountains[i].x_pos + 200, floorPos_y, mountains[i].x_pos + 300, floorPos_y - 200, mountains[i].x_pos + 400, floorPos_y);
	}

	//Draw the canyon
	stroke(102, 51, 0);
	fill(102, 51, 0);
	rect(canyon.x_pos + 200, floorPos_y, canyon.width, height - floorPos_y);

	if (gameChar_x > canyon.x_pos + 200 && gameChar_x < canyon.x_pos + 200 + canyon.width && gameChar_y >= floorPos_y) {
		isPlummeting = true;
	}

	if (isPlummeting == true) {
		gameChar_y += 5;
	}

	//Draw the trees
	for (var i = 0; i < trees_x.length; i++) {
		fill(0, 155, 0);
		ellipse(trees_x[i], floorPos_y - 50, 50, 100);
		fill(255, 0, 0);
		ellipse(trees_x[i], floorPos_y - 100, 100, 100);
	}

	stroke(0);
	//the game character
	if (isLeft && isFalling) {
		// add your jumping-left code
		fill(255);
		rect(gameChar_x - 15, gameChar_y - 55, 30, 50);
		fill(0);
		ellipse(gameChar_x, gameChar_y - 55, 40, 40);
		fill(0);
		rect(gameChar_x - 16, gameChar_y - 10, 10, 10);
		rect(gameChar_x + 6, gameChar_y - 10, 10, 10);
		fill(255);
		ellipse(gameChar_x - 10, gameChar_y - 55, 10, 10);
		ellipse(gameChar_x + 10, gameChar_y - 55, 10, 10);
		fill(255);
		rect(gameChar_x - 15, gameChar_y - 5, 30, 5);
		fill(255, 200, 0); 
		rect(gameChar_x - 20, gameChar_y - 39, 10, 20);
	} else if (isRight && isFalling) {
		// add your jumping-right code
		fill(255);
		rect(gameChar_x - 15, gameChar_y - 55, 30, 50);
		fill(0);
		ellipse(gameChar_x, gameChar_y - 55, 40, 40);
		fill(0);
		rect(gameChar_x - 16, gameChar_y - 10, 10, 10);
		rect(gameChar_x + 6, gameChar_y - 10, 10, 10);
		fill(255);
		ellipse(gameChar_x - 10, gameChar_y - 55, 10, 10);
		ellipse(gameChar_x + 10, gameChar_y - 55, 10, 10);
		fill(255);
		rect(gameChar_x - 15, gameChar_y - 5, 30, 5);
		fill(255, 200, 0);
		rect(gameChar_x + 12, gameChar_y - 39, 10, 20);
	} else if (isLeft) {
		// add your walking left code
		fill(255);
		rect(gameChar_x - 15, gameChar_y - 55, 30, 50);
		fill(0);
		ellipse(gameChar_x, gameChar_y - 55, 40, 40);
		fill(0);
		rect(gameChar_x - 16, gameChar_y - 10, 10, 10);
		rect(gameChar_x + 6, gameChar_y - 10, 10, 10);
		fill(255);
		ellipse(gameChar_x - 10, gameChar_y - 55, 10, 10);
		ellipse(gameChar_x + 10, gameChar_y - 55, 10, 10);
		fill(255);
		rect(gameChar_x - 15, gameChar_y - 5, 30, 5);
		fill(255, 200, 0);
		rect(gameChar_x - 20, gameChar_y - 39, 10, 20);
	} else if (isRight) {
		// add your walking right code
		fill(255);
		rect(gameChar_x - 15, gameChar_y - 55, 30, 50);
		fill(0);
		ellipse(gameChar_x, gameChar_y - 55, 40, 40);
		fill(0);
		rect(gameChar_x - 16, gameChar_y - 10, 10, 10);
		rect(gameChar_x + 6, gameChar_y - 10, 10, 10);
		fill(255);
		ellipse(gameChar_x - 10, gameChar_y - 55, 10, 10);
		ellipse(gameChar_x + 10, gameChar_y - 55, 10, 10);
		fill(255);
		rect(gameChar_x - 15, gameChar_y - 5, 30, 5);
		fill(255, 200, 0); 
		rect(gameChar_x + 12, gameChar_y - 39, 10, 20);
	} else if (isFalling || isPlummeting) {
		// add your jumping facing forwards code
		fill(255);
		rect(gameChar_x - 15, gameChar_y - 55, 30, 50);
		fill(0);
		ellipse(gameChar_x, gameChar_y - 55, 40, 40);
		fill(0);
		rect(gameChar_x - 16, gameChar_y - 10, 10, 10);

		rect(gameChar_x + 6, gameChar_y - 10, 10, 10);
		fill(255);
		ellipse(gameChar_x - 10, gameChar_y - 55, 10, 10);
		ellipse(gameChar_x + 10, gameChar_y - 55, 10, 10);
		fill(255);
		rect(gameChar_x - 15, gameChar_y - 5, 30, 5);
		fill(255, 200, 0);
		rect(gameChar_x - 20, gameChar_y - 39, 10, 20);
		rect(gameChar_x + 12, gameChar_y - 39, 10, 20);

	} else {
		// add your standing front facing code
		fill(255);
		rect(gameChar_x - 15, gameChar_y - 55, 30, 50);
		fill(0);
		ellipse(gameChar_x, gameChar_y - 55, 40, 40);
		fill(0);
		rect(gameChar_x - 16, gameChar_y - 10, 10, 10);
		rect(gameChar_x + 6, gameChar_y - 10, 10, 10);
		fill(255);
		ellipse(gameChar_x - 10, gameChar_y - 55, 10, 10);
		ellipse(gameChar_x + 10, gameChar_y - 55, 10, 10);
		fill(255);
		rect(gameChar_x - 15, gameChar_y - 5, 30, 5);
	}

	pop(); 

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here

	if (isLeft) {
		gameChar_x -= 5;
	}
	if (isRight) {
		gameChar_x += 5;
	}

	cameraPosX = gameChar_x - width / 2;

	//gravity
	if (gameChar_y < floorPos_y) {
		gameChar_y += 2;
		isFalling = true;
	} else {
		isFalling = false;
	}
}

function keyPressed() {
	// if statements to control the animation of the character when
	// keys are pressed.

	if (keyCode == 65) {
		isLeft = true;
	} else if (keyCode == 68) {
		isRight = true;
	} else if (keyCode == 87) {
		gameChar_y -= 100;
	}

	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
}

function keyReleased() {
	// if statements to control the animation of the character when
	// keys are released.

	if (keyCode == 65) {
		isLeft = false;
	} else if (keyCode == 68) {
		isRight = false;
	}
	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
}
