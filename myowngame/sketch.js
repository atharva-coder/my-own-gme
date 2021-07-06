var gameState = 0
var playButton,playButtonImg;
var playButton2,playButton2Img;
var bg1,bg1Img;
var spaceShip,spaceShipImg;
var stone,stoneImg;
var bullet,bulletImg;

function preload(){

  playButtonImg = loadImage("images/playButton.jpeg");
  playButton2Img = loadImage("images/play.buttn.png");
  bg1Img = loadImage("images/bg.jpeg");
  spaceShipImg = loadImage("images/spaceship.png");
  stoneImg = loadImage("images/stone.png");
  bulletImg = loadImage("images/bullet.png");

}
function setup(){
  createCanvas(600,600);

  playButton = createSprite(300,300);
  playButton.addImage(playButtonImg);
  playButton.scale = 0.8
  playButton.visible = true;

  playButton2 = createSprite(200,100);
  playButton2.addImage(playButton2Img);
  playButton2.scale = 0.8
  playButton2.visible = false;

  spaceShip = createSprite(100,250);
  spaceShip.addImage(spaceShipImg);

  
}
function draw(){
background(0);
 spaceShip.visible = false;
 
  pg1();

  stoneGrp = new Group();

if(mousePressedOver(playButton)){
  gameState=1;
}

if(gameState === 1){
playButton.visible = false;
playButton2.visible = true;
  pg2();
}


if(mousePressedOver(playButton2)){
  gameState=2;
}
  if(gameState === 2){
  playButton2.visible = false;
    pg3();

  } 
 

  drawSprites();
  
}




function pg1(){
  background(77,0,88);

textSize(50);
fill("yellow");
text("SPACE-WAR",150,50);

textSize(70);
fill("red");
text("Welcome",150,200);

textSize(30);
fill("black");
text("press next to continue",150,400);

textSize(20);
fill("white");
text("Guys this is the game we make for you to enjoy. this game contains",5,470);
text("intresting actions. this game is free so please play.",30,500);
}




function pg2(){

console.log("gameState=1",gameState);
background(19,218,200);

textSize(23);
fill("white");
text("Guys To play this game follow the below rules.",5,50);

textSize(23);
fill("yellow");
text("rule1: .",5,80);


}
function pg3(){

  createCanvas(1000,500);
  background(253,155,5);
  //backGround = createSprite(500,250);
  //backGround.addImage(253,155,5);
  //backGround.scale = 4;
   
 spaceShip.visible = true;

  if(keyDown(UP_ARROW)){
    spaceShip.y = spaceShip.y-4
  }
  if(keyDown(DOWN_ARROW)){
    spaceShip.y = spaceShip.y+4
  }
 
  spwanStones();
  drawSprites();

}

function spwanStones(){
  if(frameCount%30===0){
    
    
    stone1 = createSprite(900,250);
      stone1.addImage(stoneImg);
      stone1.scale = 0.5;
      stone1.y = Math.round(random(1000,100));
      stone1.x = Math.round(random(1000,100));
    stone1.velocityX = -3;
     stone1.lifetime =170;
      stoneGrp.add(stone1);
     
   
    }


}
function spwanbullet(){
  bullet = createSprite(100,250);
  bullet.addImage(bulletImg);
  
}
function keyPressed(){
  if(keyCode === 32){
    spwanbullet();
  }
}

