var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(800,400);
  wall= createSprite(700, 200, 20, 120)
  wall.shapeColor= "white";

  speed= random(223, 321);
  weight= random(30, 52);
  thickness= random(22, 83);


  bullet= createSprite(100, 200, 30, 10)
  bullet.velocityX= speed/3;
  bullet.shapeColor= "white";
}
 

function draw() {
  background(0);  
  drawSprites();

  if(bullet.collide(wall)){

  if(((0.5* weight* speed* speed)/ (thickness* thickness* thickness))< 10){

    bullet.shapeColor= "green"

  }

  if (((0.5* weight* speed* speed)/ (thickness* thickness* thickness))>10){

    bullet.shapeColor= "red"

}
}
}