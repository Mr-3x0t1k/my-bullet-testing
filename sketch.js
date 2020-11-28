var bullet, wall;
var speed, weight,thickness;

function setup() {
  createCanvas(1600,800);
  //the speed, thickness and weight
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  //the car
  bullet = createSprite(50,200,50,3);
  bullet.velocityX = speed;
  bullet.shapeColor = ("white");


  //the wall
  wall = createSprite(1500,200,thickness,200);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background("black");
         if (wall.x-bullet.x < (bullet.width + wall.width)/2){
         bullet.velocityX=0;
         }
         var damage = (0.5 * weight* speed* speed)/(thickness* thickness* thickness);
         if(damage>10){
          wall.shapeColor = color(255,0,0);
         }
         if(damage<10){
          wall.shapeColor = color(0,255,0);
         }

  drawSprites();
}