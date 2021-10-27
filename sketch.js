
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var backImg;
var playerImg;
var player;
var engineImg,batteryImg,oilImg,fuelImg,carImg,metalImg;
var wheelImg,speedImg,ground;
var metal;
var metalGroup;
var wall;
var parts = 8;

function preload()
{
	backImg = loadImage("assets/1.jpg");
	playerImg = loadImage("assets/2.png");
  engineImg = loadImage("assets/5.png");
  batteryImg = loadImage("assets/7.png");
  oilImg = loadImage("assets/8.png");
  fuelImg = loadImage("assets/9.png");
  carImg = loadImage("assets/10.png");
  metalImg = loadImage("assets/3.png");
  wheelImg = loadImage("assets/4.png");
  speedImg = loadImage("assets/6.png");


}

function setup() {
	createCanvas(1200, 550);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
player = createSprite(100,200,50,50);
player.addImage(playerImg);
player.scale = 0.4
player.debug = true
   player.setCollider("rectangle",20,0,180,456)
ground = new Ground(0, height - 2, width * 2, 1);


wall = createSprite(1,5,10,1080);
wall.visible = false;

metalGroup= new Group();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backImg);
  if(keyDown("UP_ARROW")||touches.length>0){
	player.y = player.y-30
  }
  if(keyDown("DOWN_ARROW")||touches.length>0){
   player.y = player.y+30
  }
if(metalGroup.isTouching(player)){
  for(var i=0;i<metalGroup.length;i++){     
       
    if(metalGroup[i].isTouching(player)){
         metalGroup[i].destroy()}}  
}
//
if(metalGroup.isTouching(wall)){
  for(var i=0;i<metalGroup.length;i++){     
       
    if(metalGroup[i].isTouching(wall)){
         metalGroup[i].destroy()}}  
}

  ground.display();
  Metall();
  drawSprites();
 
}
function Metall(){
  if(frameCount%100===0){

    //giving random x and y positions for zombie to appear
    metal = createSprite(random(500,1100),random(100,500),40,40)

    metal.addImage(metalImg)
    metal.scale = 0.3
    metal.velocityX = -3
    metal.debug = true
   metal.setCollider("rectangle",0,0,300,300)
   
    metal.lifetime = 400
   metalGroup.add(metal)
  }




}


