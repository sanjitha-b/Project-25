
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObject
var groundObject
var paperObject
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);
rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
dustbinObject = new dustbin(600,360)
groundObject = new Ground(width/2,375,width,20)
paperObject = new Paper(100,350,24)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  
groundObject.display()
paperObject.display()
dustbinObject.display() 

}


function keyPressed(){
	if( keyDown(UP_ARROW)) {
Body.applyForce(paperObject.body,paperObject.body.position,{x:65,y:-70})

	}
}
