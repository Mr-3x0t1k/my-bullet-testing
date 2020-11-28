var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(600,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.setVelocity(0,2);
}

function draw() {
  background(0,0,0);
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  bounceOff(fixedRect, movingRect);


  drawSprites();
}
function bounceOff(gameObject1, gameObject2){
//when it touches
 if (gameObject1.x - gameObject2.x < gameObject2.width/2 + gameObject1.width/2
      && gameObject2.x - gameObject1.x < gameObject2.width/2 + gameObject1.width/2) {

     // making it bounce
    gameObject1.velocityX = -(gameObject1.velocityX)
    gameObject1.velocityY = -(gameObject1.velocityY)

  }if ( gameObject1.y - gameObject2.y < gameObject2.height/2 + gameObject1.height/2
       && gameObject2.y - gameObject1.y < gameObject2.height/2 + gameObject1.height/2){
       gameObject2.velocityX = -(gameObject2.velocityX)
       gameObject2.velocityY = -(gameObject2.velocityY)

  }


}