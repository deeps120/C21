function setup() {
  createCanvas(400,400);
 fixrect= createSprite(200, 200, 50, 50);
 movingrect=createSprite(200,200,60,70);
 rect1=createSprite(50,300,50,50);
 rect2=createSprite(350,300,50,50);
 rect1.shapeColor="blue";
 rect2.shapeColor="pink";
 rect1.velocityX=4;
 rect2.velocityX=-4;
}

function draw() {
  background(0);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  bounceOff(rect1,rect2);
  if(isTouching(fixrect,movingrect)){
    movingrect.shapeColor="red";
    fixrect.shapeColor="red";
  
  }
  else{
    movingrect.shapeColor="green";
    fixrect.shapeColor="green";
  }

  drawSprites();
}
