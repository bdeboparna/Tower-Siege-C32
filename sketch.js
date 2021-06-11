const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var polygon, ground;
var stand1, stand2;
var slingshot;
var polygonImg;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;
var block11, block12, block13, block14, block15, block16, block17, block18, block19, block20;
var block21, block22;

function preload(){
  polygonImg = loadImage("polygon.png");
}

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(1500,600);
  ground = new Ground(400, 580, 1000, 20);
  stand1 = new Ground(900,195,200,10);
  stand2 = new Ground(750, 600, 1500, 10);
      
  //level one
  block1 = new Block(600,260,30,40);
  block2 = new Block(570,260,30,40);
  block3 = new Block(640,260,30,40);
  block4 = new Block(630,260,30,40);
  block5 = new Block(660,260,30,40);
  block6 = new Block(585,220,30,40);
  block7 = new Block(555,220,30,40);
  //level two
  block8 = new Block(615,220,30,40);
  block9 = new Block(645,220,30,40);
  block10 = new Block(600,170,30,40);
  block11 = new Block(570,180,30,40);
  block12 = new Block(630,180,30,40);
  block13 = new Block(600,140,30,40);
  //level three
  block14 = new Block(900,170,30,40);
  block15 = new Block(930,170,30,40);
  block16 = new Block(870,170,30,40);
  block17 = new Block(840,170,30,40);
  //top
  block18 = new Block(960,170,30,40);
  block19 = new Block(900,140,30,40);
  block20 = new Block(930,140,30,40);
  block21 = new Block(870,140,30,40);
  block22 = new Block(900,110,30,40);
    
  polygon = Bodies.circle(50,200,20);
  World.add(world, polygon);
    
  slingshot = new SlingShot (this.polygon,{x:100, y:200});

  text ("Drag the Hexagonal Stone and Release it to Launch it Towards the Blocks", 750, 40);
}

function draw() {
  createCanvas(800,600);
  background("gray");

  Engine.update(engine);

  ground.display();
  stand1.display();
  stand2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  
  fill("lightBlue");
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  
  fill("pink");
  block10.display();
  block11.display();
  block12.display();

  fill(rgb(47, 48, 48));
  block13.display();
  
  fill(rgb(135, 205, 236));
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  fill("lightGreen");
  block19.display();
  block20.display();
  block21.display();

  fill("orange");
  block22.display();
  
  slingshot.display();

  //block1.score();
  //block2.score();
  //block3.score();
  //block4.score();
  //block5.score();
  //block6.score();
  //block7.score();
  //bloock8.score();
  //block9.score();
  //block10.score();
  //block11.score();
  //block12.score();
  //block13.score();
  //block14.score();
  //block15.score();
  //block16.score();
  //block17.score();
  //block18.score();
  //block19.score();
  //block20.score();
  //block21.score();
  //block22.score();

  imageMode(CENTER);
  image(polygon_img, polygon.position.x, polygon.position.y,40,40);

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}
  
function mouseReleased(){
  slingshot.fly();
}