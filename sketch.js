
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var b1
var b2 

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500,425,1000,10);
	b1 = new Ground(750,400,10,35);
	b2 = new Ground(875,400,10,35);


	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(50,400,20,ball_options)
	World.add(world,ball);

	Engine.run(engine);
  
	rectMode(CENTER)
	ellipseMode(RADIUS);
	
	
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,20)

  ground.show();
  b1.show();
  b2.show();
  Engine.update(engine);

  //keyPressed()

 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0}, {x:2,y:-1})
	}
  }
   


