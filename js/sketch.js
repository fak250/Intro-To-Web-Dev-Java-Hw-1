var pX= 0;
var pY=0;
var vX=1;
var vY=3;

function setup(){
	createCanvas(500,500);
}




function draw(){
	background(100,105,150)
	fill(124,255,242)
	pX = pX + vX;
	pY = pY + vY;
	
	if (pX > width-25 || pX<0){
		vX = vX*-1;
		
	}
	
	else if(pY > height-25 || pY<0){
		vY = vY*-1;
	}
	
	ellipse(pX, pY, 50, 50);
	
}