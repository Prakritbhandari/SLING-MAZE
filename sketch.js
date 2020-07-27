const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var gamestate = 'loaded'

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(1600,800);
  
  mainPlatform = new Platform(800,700,1600,200)
  subPlatform1 = new Platform(1200,500,400,50)
  subPlatform2 = new Platform(800,250,400,50)

  sling = new Sling(200,400,50,50);
  ball = new Ball(200,200,35,35)

  box1 = new Box(625,200,50,50);
  box2 = new Box(675,200,50,50);
  box3 = new Box(725,200,50,50);
  box4 = new Box(775,200,50,50);
  box5 = new Box(825,200,50,50);
  box6 = new Box(875,200,50,50);
  box7 = new Box(925,200,50,50);
  box8 = new Box(975,200,50,50);
  box9 = new Box(1025,450,50,50);
  box10 = new Box(1075,450,50,50);
  box11 = new Box(1125,450,50,50);
  box12 = new Box(1175,450,50,50);
  box13 = new Box(1225,450,50,50);
  box14 = new Box(1275,450,50,50);
  box15 = new Box(1325,450,50,50);
  box16 = new Box(1375,450,50,50);


  slingshot = new SlingShot(ball.body,{x:200, y:400});

}

function draw() {
  background(0);  
  Engine.update(engine);

  mainPlatform.display();
  subPlatform1.display();
  subPlatform2.display();
  sling.display();
  ball.display();
  slingshot.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();

  if(gamestate === 'loaded'){
  }


  if(keyCode === 32){
    Matter.Body.setPosition(ball.body,{x:200,y:400});
    slingshot.load(ball.body);
    gamestate === 'loaded'
  }

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.shoot();
  gamestate = 'shot'
}