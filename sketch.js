
var block;
var block2;


function setup() {
  createCanvas(800,400);
  block = createSprite(400, 200, 50, 50);
  block2 = createSprite(200,100,5,50);
  
}

function draw() {
  background(255,255,255);  
block2.y = mouseY;
block2.x = mouseX; 
  drawSprites();

if(block.x-block2.x < block.width/2 + block2.width/2){
&& (block.y-block2.y < block.height/2 + block2.height/2);
&& (block2.y-block.y < block2.height/2 + block.height/2)
&& (block2.x-block.x < block2.width/2 + block.width/2);
  block.shapeColor = "red";
  block2.shapeColor = "yellow";
}




}