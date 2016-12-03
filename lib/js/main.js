var x; //Must declare global variables outside of functions if they are to be shared between functions
setup = function(){
	createCanvas(400,400);
	//Sets dead center
	x=200;
}

draw = function(){
	background(100);

	///////////////////
	//START OF SMILEY//
	///////////////////
	
	//face
	fill(200,200,0);
	ellipse(x,200,200);

	//eyes
	fill(0);
	ellipse(x+35,180, 25,50);
	ellipse(x-35,180, 25,50);

	//smile
	noFill();
	strokeWeight(5);
	arc(x,200,150,150,0, PI);
	
	/////////////////
	//END OF SMILEY//
	/////////////////
	
}
