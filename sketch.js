
var car , wall;
 
var speed,weight;

function setup() {
  createCanvas(800,400);
 
car = createSprite(50,200,50,50);

wall = createSprite(700,200,60,height/2);
  
car.velocityX = speed;

}

function draw() {
  background(255,255,255);  

  speed = random(55,90);
  weight = random(400,1500);

if((wall.x-car.x)<(car.width/2+wall.width/2)){

car.velocityX = 0;

var deformation = 0.5 * speed * speed/22509;

if(deformation>180){

car.shapeColor = (255,0,0);

}

if(deformation>100 && deformation<180){

  car.shapeColor = (230,230,0);

}

if(deformation<100){

  car.shapeColor = (0,255,0);

}

}

  drawSprites();
}