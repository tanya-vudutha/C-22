const Engine= Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
var engine, world, box, ball; 

function setup() 
{ 
  createCanvas(400,400); 
  engine= Engine.create(); 
  world= engine.world; 
  var a= 
  { 
    isStatic:true 
  } 
  var b=
  {
    restitution: 1.0
  }

  box= Bodies.rectangle(200,390,350,20,a); 
  World.add(world,box); 

  ball= Bodies.circle(200,100,20,b);
  World.add(world,ball);

  // console.log(box);
 } 
 
 function draw() 
 { 
  background("black"); 

  Engine.update(engine);

  rectMode(CENTER); 
  //rect(200,200,50,50); 
  rect(box.position.x,box.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
 }
