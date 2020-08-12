var car,wall;




function setup() {
  createCanvas(800,400);
 wall= createSprite(400, 200, 50, 50);
 car = createSprite(100,200,5,50);
 car.velocityX=2;

}

function draw() {
  background(255,255,255);  
if (wall.x-car.x<car.width/2+wall.width/2+0){
  car.velocityX=0;
  car.shapeColor="red"
}
  drawSprites();
}