/*

The Game Project

Week 3

Game interaction

*/

/*
	- Write a conditional statement within `draw` to detect when the character is over the canyon. 
		- HINT: use gameChar_x and the > and < operators
	- When the condition is met, set `isPlummeting` to `true`.
	- Write another conditional statement within `draw` which detects when `isPlummeting` is `true`
	- When this condition is met, increment `gameChar_y` so that the game character falls more quickly
	*/
var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var isFalling;
var isPlummeting;
var collectable;
var canyon;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;

	collectable = {
		x_pos: 100,
		y_pos: floorPos_y,
		size: 40,
		isFound: false
	};

	canyon = {
		x_pos: 0,
		width: 100
	};
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground


	// Draw collectable item
	if(dist(gameChar_x, gameChar_y, collectable.x_pos, collectable.y_pos) < 20)
	{
		collectable.isFound = true;
	}
	if(collectable.isFound == false)
	{
	noFill();
	stroke(255, 0, 0);
	strokeWeight(3);
	ellipse(collectable.x_pos, collectable.y_pos-20, collectable.size, collectable.size);
	stroke(255, 255, 0);
	strokeWeight(3);
	line(collectable.x_pos-10, collectable.y_pos-20, collectable.x_pos+10, collectable.y_pos-20);
	line(collectable.x_pos, collectable.y_pos-30, collectable.x_pos, collectable.y_pos-10);

}


	//draw the canyon
	stroke(102, 51, 0);
	fill(102, 51, 0);
	rect(canyon.x_pos, floorPos_y, canyon.width, height - floorPos_y);



	stroke(0);
	//the game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code

		fill(255);
		rect(gameChar_x - 15, gameChar_y - 55, 30, 50);
		fill(0)
		ellipse(gameChar_x, gameChar_y - 55, 40, 40);
		fill(0)
		rect(gameChar_x - 16, gameChar_y - 10, 10, 10);
		rect(gameChar_x + 6, gameChar_y - 10, 10, 10);
		fill(255)
		ellipse(gameChar_x - 10, gameChar_y - 55, 10, 10);
		ellipse(gameChar_x + 10, gameChar_y - 55, 10, 10);
		fill(255)
		rect(gameChar_x - 15, gameChar_y - 5, 30, 5);
		fill(255, 200, 0); // Yellow color for the hand
		rect(gameChar_x -20, gameChar_y - 39, 10, 20)


	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code

		fill(255);
		rect(gameChar_x - 15, gameChar_y - 55, 30, 50); 
		fill(0)
		ellipse(gameChar_x, gameChar_y - 55, 40, 40);
		fill(0)
		rect(gameChar_x - 16, gameChar_y - 10, 10, 10);
		rect(gameChar_x + 6, gameChar_y - 10, 10, 10);
		fill(255)
		ellipse(gameChar_x - 10, gameChar_y - 55, 10, 10);
		ellipse(gameChar_x + 10, gameChar_y - 55, 10, 10);
		fill(255)
		rect(gameChar_x - 15, gameChar_y - 5, 30, 5);
		fill(255, 200, 0); // Yellow color for the hand
		rect(gameChar_x +12, gameChar_y - 39, 10, 20)

	}
	else if(isLeft)
	{
		// add your walking left code
		fill(255);
		rect(gameChar_x - 15, gameChar_y - 55, 30, 50);
		fill(0)
		ellipse(gameChar_x, gameChar_y - 55, 40, 40);
		fill(0)
		rect(gameChar_x - 16, gameChar_y - 10, 10, 10);
		rect(gameChar_x + 6, gameChar_y - 10, 10, 10);
		fill(255)
		ellipse(gameChar_x - 10, gameChar_y - 55, 10, 10);
		ellipse(gameChar_x + 10, gameChar_y - 55, 10, 10);
		fill(255)
		rect(gameChar_x - 15, gameChar_y - 5, 30, 5);
		fill(255, 200, 0); // Yellow color for the hand
		rect(gameChar_x -20, gameChar_y - 39, 10, 20)

	}
	else if(isRight)
	{
		// add your walking right code

		fill(255);
		rect(gameChar_x - 15, gameChar_y - 55, 30, 50); 
		fill(0)
		ellipse(gameChar_x, gameChar_y - 55, 40, 40);
		fill(0)
		rect(gameChar_x - 16, gameChar_y - 10, 10, 10);
		rect(gameChar_x + 6, gameChar_y - 10, 10, 10);
		fill(255)
		ellipse(gameChar_x - 10, gameChar_y - 55, 10, 10);
		ellipse(gameChar_x + 10, gameChar_y - 55, 10, 10);
		fill(255)
		rect(gameChar_x - 15, gameChar_y - 5, 30, 5);
		fill(255, 200, 0); // Yellow color for the hand
		rect(gameChar_x +12, gameChar_y - 39, 10, 20)

	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code

	}
	else
	{
		// add your standing front facing code

		fill(255);
	rect(gameChar_x - 15, gameChar_y - 55, 30, 50); 
	fill(0)
	ellipse(gameChar_x, gameChar_y - 55, 40, 40);
	fill(0)
	rect(gameChar_x - 16, gameChar_y - 10, 10, 10);
	rect(gameChar_x + 6, gameChar_y - 10, 10, 10);
	fill(255)
	ellipse(gameChar_x - 10, gameChar_y - 55, 10, 10);
	ellipse(gameChar_x + 10, gameChar_y - 55, 10, 10);
	fill(255)
	rect(gameChar_x - 15, gameChar_y - 5, 30, 5);

	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here

	if(isLeft)
	{
		gameChar_x -= 5;
	}
	if(isRight)
	{
		gameChar_x += 5;
	}

	//gravity
	if(gameChar_y < floorPos_y)
	{
		gameChar_y += 2;
		isFalling = true;	
}else{
	isFalling = false;

}
}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	if(keyCode == 37)
	{
		isLeft = true;
	} else if(keyCode == 39)
	{
		isRight = true;
	} else if (keyCode == 87){
		gameChar_y -= 100;
	}

	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

	if(keyCode == 37)
	{
		isLeft = false;
	}else if(keyCode == 39)
	{
		isRight = false;
	}
	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
}
