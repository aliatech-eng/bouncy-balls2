
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constaint;



function setup() {
	createCanvas(800, 700);

	roof = new Roof(200,700,200,20)

	bobObject1= new Bob(350,500,20,20)
	bobObject2= new Bob(475,200,20,20)
	bobObject3= new Bob(400,100,20,20)
	bobObject4= new Bob(100,200,20,20)
	bobObject5= new Bob(200,300,20,20)

	engine = Engine.create();
	world = engine.world;

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
roof.display();
bobObject1.display();
bobObject2.display();
bobObject3.display();
bobObject4.display();
bobObject5.display();
  drawSprites();
}



