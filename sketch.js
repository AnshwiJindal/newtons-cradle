const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1300, 570);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof = new Roof(650, 150, 400 , 30)
bob1 = new Bob(340, 500 , 40)
bob2 = new Bob(420, 500 , 40)
bob3 = new Bob(500, 500 , 40)
bob4 = new Bob(580, 500 , 40)
bob5 = new Bob(660, 500 , 40)
rope1 = new Rope(roof.body, bob1.body, -160, 0)
rope2 = new Rope(roof.body, bob2.body, -80,0)
rope3 = new Rope(roof.body, bob3.body,0,0)
rope4 = new Rope(roof.body, bob4.body,80,0)
rope5 = new Rope(roof.body, bob5.body,160,0)
	Engine.run(engine);
  

}


function draw() {
background("yellow");
  
textSize(60)
fill("Blue")
textFont("algerian")
text("NEWTON'S CRADLE" , 410,60)

 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 roof.display();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();

}
function keyPressed (){
if (keyCode===UP_ARROW){
Body.applyForce(bob1.body,bob1.body.position, {x:-150 , y: -150} )

}


if (keyCode ===DOWN_ARROW){
	Body.applyForce(bob5.body,bob5.body.position, {x:150 , y: -150} )
}
}


