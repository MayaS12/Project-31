const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var division1;

function preload()
{
	
}

function setup() {
	createCanvas(480, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(240,height,480,20);

	division1 = new Divisions(5,800,20,200);


	Engine.run(engine);
  
}


function draw() {
  background(0);
  
  ground.display();
 
  division1.display();
}



