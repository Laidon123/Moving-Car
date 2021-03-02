var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
 // createSprite(400, 200, 50, 50);
  speed=random(100,180)
  weight=random(400,1500)
  car=createSprite(100,200,30,20)
 wall= createSprite(1200,300,30,400)
car.velocityX=speed;



 
}


function draw() {
  background(255,255,255); 
  car.shapeColor="blue" 

  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0
   var deformation=0.5 * weight * speed* speed/22509;
   if(deformation>180){
     car.shapeColor="red"
   }

   if(deformation<100){
    car.shapeColor="green"
  }
  
  if(deformation>100 && deformation<180){
    car.shapeColor="green"
  }

  }


  drawSprites();
}