
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
var game_score = 0;
var flagpole = {
	x_pos: 900,
	isReached: false
};
var lives;



// Initialize the game
function setup() {
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	lives = 3; // Reset the lives
	startGame(); 
	
}


// Initialize the collectable
function initCollectable() {
	collectable = [
		{x_pos: 100, y_pos: floorPos_y, size: 40, isFound: false},
		{x_pos: 700, y_pos: floorPos_y, size: 40, isFound: false}
	];
	
}

// Initialize the environment
function initEnvironment() {
	trees_x =[ 150, 350, 550, 750, 950];
	clouds = [
		{x_pos: 300, y_pos: 100},
		{x_pos: 500, y_pos: 100},
		{x_pos: 700, y_pos: 100}
	];
	mountains = [
		{x_pos: 100, y_pos: 100},
		{x_pos: 300, y_pos: 100},
		{x_pos: 500, y_pos: 100}
	];
	canyon = 
	[
		{x_pos: 200, width: 100},
		{x_pos: 700, width: 100},
		

	];
	
}

// Draw the game background
function drawBackground() {
	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height - floorPos_y);
}
function draw() {
	checkPlayerDie()
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	// Move the camera
	push();
	translate(-cameraPosX, 0);

//draw life tokens
	for (var i = 0; i < lives; i++) {
        fill(255, 0, 0);
        ellipse(30 + i * 30, 40, 20, 20); // Adjust the positions and sizes as needed
   
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

	for(var i = 0; i < canyon.length; i++){
		fill(102, 51, 0);
		rect(canyon[i].x_pos, floorPos_y, canyon[i].width, height - floorPos_y);

		if(gameChar_x > canyon[i].x_pos && gameChar_x < canyon[i].x_pos + canyon[i].width && gameChar_y >= floorPos_y){
			isPlummeting = true;
		}

		if(isPlummeting == true){
			gameChar_y += 5;
		}

	}

		// Draw collectable item
for(var i = 0; i < collectable.length; i++){

	if (!collectable[i].isFound && dist(gameChar_x, gameChar_y, collectable[i].x_pos, collectable[i].y_pos) < 20) {
		collectable[i].isFound = true;
		game_score += 1;
	}
	
	if(collectable[i].isFound == false){
		fill(255, 0, 0);
			ellipse(collectable[i].x_pos, collectable[i].y_pos-20, collectable[i].size, collectable[i].size);
			fill(255, 255, 0);
			ellipse(collectable[i].x_pos, collectable[i].y_pos-20, collectable[i].size - 10, collectable[i].size - 10);
			fill(255, 0, 0);
			ellipse(collectable[i].x_pos, collectable[i].y_pos-20, collectable[i].size - 20, collectable[i].size - 20);
			fill(255, 255, 0);
			ellipse(collectable[i].x_pos, collectable[i].y_pos-20, collectable[i].size - 30, collectable[i].size - 30);
			fill(255, 0, 0);
			ellipse(collectable[i].x_pos, collectable[i].y_pos-20, collectable[i].size - 40, collectable[i].size - 40);
	}
}


	checkFlagpole();

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


	if (lives < 1) {
        fill(255);
        textSize(20);
        text("Game over. Press space to continue.", width / 2, height / 2);
        return; 
    }

    // Check for level complete
    if (flagpole.isReached) {
        fill(255);
        textSize(20);
        text("Level complete. Press space to continue.", width / 2, height / 2);
        return; 
    }

	renderFlagpole();
	pop(); 

	fill(255);
	noStroke();
	text("Score: " + game_score, 20, 20);
	//Put conditional statements to move the game character below here

	if (isLeft) {
		gameChar_x -= 5;
	}
	if (isRight) {
		gameChar_x += 5;
	}

	cameraPosX = gameChar_x - width / 2;

	//gravityasaaa
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
}

function keyReleased() {
	// if statements to control the animation of the character when
	// keys are released.

	if (keyCode == 65) {
		isLeft = false;
	} else if (keyCode == 68) {
		isRight = false;
	}
}


function renderFlagpole() {
	push();
	strokeWeight(5);
	stroke(180);
    line(flagpole.x_pos, floorPos_y, flagpole.x_pos, floorPos_y - 250)
	fill(255, 0, 255);
	noStroke();


    if (flagpole.isReached) {
        // Draw flagpole when it's reached
		rect(flagpole.x_pos, floorPos_y - 250, 50, 50);
    } else {
        // Draw flagpole when it's not reached
        rect(flagpole.x_pos, floorPos_y - 50, 50, 50);
    }
}

function checkFlagpole() {

	var d = abs(gameChar_x - flagpole.x_pos);

	console.log(d);

   if(d < 15) {
	   flagpole.isReached = true;
   }
}



function checkPlayerDie() {



	if(gameChar_y > height){
		lives -= 1;

		if(lives > 0){
			startGame();
		}
	}



}

// Start the game
function startGame() {
	gameChar_x = width / 2;
	gameChar_y = floorPos_y;
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;
	initCollectable();
	initEnvironment();
	
}

