var rect1, rect2, rect3

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 100, 50, 50);
  rect2 = createSprite(400, 300, 30, 30);
  rect3 = createSprite(700, 100, 30, 30);
  rect1.velocityY = 2;
  rect2.velocityY = -2;
  rect3.velocityX = -2;
  rect1.debug = true;
  rect2.debug = true;
  rect3.debug = true;
}

function draw() {
  background(255,255,255); 
  
  // bounceOff(rect1, rect3);

  if (isTouching(rect1, rect2)){

      rect1.shapeColor = "red";
      rect2.shapeColor = "blue";

  }

  else {

    rect1.shapeColor = "green";
    rect2.shapeColor = "green";

  }
  drawSprites();
}

