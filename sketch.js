var fixedRect,movingRect, gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
 // fixedRect.color = "red";
  movingRect = createSprite(0,200,50,50);

  gameObject1 = createSprite(100,50,40,40);
  gameObject2 = createSprite(300,50,40,40);
  gameObject3 = createSprite(500,50,40,40);
  gameObject4 = createSprite(700,50,40,40)
}

function draw() {
  background(255,255,255);  

movingRect.x = mouseX;
movingRect.y = mouseY;

IsTouching(movingRect,gameObject4);

  drawSprites();
}

function IsTouching(object1,object2){
  if(object1.x - object2.x < object1.width/2 +  object2.width/2  &&
    object2.x - object1.x < object2.width/2 + object1.width/2 && 
   object2.y - object1.y < object2.height/2 + object1.height/2 &&
    object1.y - object2.y <  object1.height/2 + object2.height/2 ){
 
     object1.shapeColor = "blue";
     object2.shapeColor = "blue";
    }
 
    else{
    object1.shapeColor  = "red";
    object2.shapeColor = "red";
    }
}