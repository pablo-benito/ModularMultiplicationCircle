var N = 200;
var center_x ;
var center_y ;
var radius ;
var doLoop = true;
var times;

function setup() {
  // put setup code here

  var canvas = createCanvas(windowWidth,500);
  
  center_x = width/2;
  center_y = height/2;
  radius = min(width,height) / 2;  
  canvas.parent("p5jsContainer");
  
  frameRate(15);
  
  
}

function keyPressed() {

 if (key == 'P') {
 	if (doLoop == true) {
 		noLoop();
 		doLoop = false;
 	} else {
 		loop();
 		doLoop = true;
 	}
 	
 }
 
 if (key == 'N') {

 	redraw();
 }

 return true;
 
}


function drawLineToNextPoint(i) {

	push();
	colorMode(HSB);
    strokeWeight(1);
    
  	stroke(frameCount % 360,100, 100,0.4);
  	drawingContext.shadowColor = color(frameCount % 360,100, 100,0.5);
	translate(center_x,center_y);
	var initialPoint = p5.Vector.mult( p5.Vector.fromAngle(2*PI*i/N), radius);
	var finalPoint =  p5.Vector.mult( p5.Vector.fromAngle(2*PI* ((i*times)%N) / N), radius );

	line(initialPoint.x,initialPoint.y,finalPoint.x,finalPoint.y);
	pop();
	

}

function draw() {


  //frameCount = 4;
  //clear();
  background(0);
  push();
  fill(0);
  stroke(255);
  translate(center_x,center_y);
	
  ellipse(0,0,2*radius);
  pop();
  	
  //stroke(10*frame % 255,255, 255);
  times = (0.1*frameCount) % N ;
  for (var i = 0 ; i < N ; i++)  {
  	//var nextPoint = (i*times) % N;
  	
  	//line(points[i][0],points[i][1],points[nextPoint][0],points[nextPoint][1]);
  	drawLineToNextPoint(i);
  }	
  if (times % 1 == 0) {
  	frameRate(1);
  } else {
  	frameRate(12);
  }

  push();
  textSize(20);
  fill(255);
  
  text("Frame: " + str(frameCount), 2,20);
  pop();
}
