var garden,rabbit;
var gardenImg,rabbitImg;
var apple;
var appleImg;
var orangeleaf;
var orangeleafImg
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png")
  orangeleafImg=loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);

  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);
  spawnapple()
  spawnleaf()
  edges= createEdgeSprites();
  rabbit.collide(edges);
rabbit.x= World.mouseX
  drawSprites();
}
function spawnapple(){      
if(frameCount%80===0){
  apple = createSprite(100,100,30,30)
apple.x= Math.round(random(40,360))
apple.velocityY=5


apple.addImage(appleImg)
apple.scale=0.1


}
}

function spawnleaf(){
if(frameCount%60===0){
  orangeleaf = createSprite(100,100,30,30)
  orangeleaf.x=Math.round(random(40,360))
  orangeleaf.velocityY=5

  orangeleaf.addImage(orangeleafImg)
  orangeleaf.scale=0.1
}




}