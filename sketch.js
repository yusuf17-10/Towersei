const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

var slingShot,p1;
var score=0;
var block1,block2,block3,block4,block5;
var block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15,block16;


function preload(){
  p1=loadImage("poly.png");
}
function setup() {
  var canvas =  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,500,400,10);

  
  

 
 block8=new Box(330,480,30,40);
 block9=new Box(360,480,30,40);
 block10=new Box(390,480,30,40);
 block11=new Box(420,480,30,40);
 block12=new Box(450,480,30,40);
 block13=new Box(360,440,30,40);
 block14=new Box(390,440,30,40);
 block15=new Box(420,440,30,40);
 block16=new Box(390,400,30,40);
 
 poly=Bodies.circle(50,200,20);
 World.add(world,poly);

 slingShot= new SlingShot(poly,{x:100,y:200});

 

}



function mouseDragged(){
  Matter.Body.setPosition(poly,{x:mouseX,y:mouseY});
}


function mouseReleased(){
   slingShot.fly();
}

function draw() {
  background(255);  
  text("score :"+score,550,40);
  text("Press Space for second chance",200,200);
  fill("black");
  Engine.update(engine);
  image(p1,poly.position.x,poly.position.y,30,30);
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  slingShot.display();

  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  ground.display();
  
}

function keyPressed(){
  if (keyCode===32){
    slingShot.attach(poly);
  }
}
