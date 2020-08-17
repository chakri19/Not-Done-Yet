
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var roof;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(360,50,600,50);

	//creating the 5 bobs
	bob1 = new Bob(150,400,100);
	bob2 = new Bob(250,400,100);
	bob3 = new Bob(350,400,100);
	bob4 = new Bob(450,400,100);
	bob5 = new Bob(550,400,100);

	//creating the 5 ropes
	rope1 = new Rope(bob1.body,roof.body,bob1.radius*4,0);
	rope2 = new Rope(bob2.body,roof.body,bob2.radius*4,0);
	rope3 = new Rope(bob3.body,roof.body,bob3.radius*4,0); 
	rope4 = new Rope(bob4.body,roof.body,bob4.radius*4,0); 
	rope5 = new Rope(bob5.body,roof.body,bob5.radius*4,0); 

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(255);

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  line(bob1.position.x, bob1.position.y, roof.position.x,roof.position.y);

}