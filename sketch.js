var greenbox, redbox
var purplebox, yellowbox


function setup() {
 createCanvas(800,400);
 greenbox= createSprite(400, 200, 100, 50);
 greenbox.shapeColor="green"

 redbox= createSprite(400, 200, 100, 50);
 redbox.shapeColor="red"

 purplebox= createSprite(0, 350, 100, 50);
 purplebox.shapeColor="purple"
 purplebox.velocityX=2

 yellowbox= createSprite(800, 350, 100, 50);
 yellowbox.shapeColor="yellow"
 yellowbox.velocityX=-2
}

function draw() {
  background(0);  

  greenbox.x = mouseX;
  greenbox.y = mouseY;

  if (isTouching(purplebox, yellowbox)){

    purplebox.shapeColor="maroon"
    yellowbox.shapeColor="pink"
  }

  else { 
  purplebox.shapeColor="purple"
  yellowbox.shapeColor="yellow"
}

  if (isTouching(greenbox, redbox)){

    greenbox.shapeColor="blue"
    redbox.shapeColor="orange"
  }
  else{
    greenbox.shapeColor="green"
    redbox.shapeColor="red"
  }
  
  bounceoff(purplebox, yellowbox);

  drawSprites();
}
function isTouching(object1, object2){

  if(object1.x-object2.x<object1.width/2+object2.width/2 &&
    object2.x-object1.x<object1.width/2+object2.width/2 &&
    object1.y-object2.y<object1.height/2+object2.height/2 &&
    object2.y-object1.y<object1.height/2+object2.height/2 )
    {

      return true;
    }
      else{ return false}
    
}

function bounceoff(object1, object2){

  if(object1.x-object2.x<object1.width/2+object2.width/2 &&
    object2.x-object1.x<object1.width/2+object2.width/2 &&
    object1.y-object2.y<object1.height/2+object2.height/2 &&
    object2.y-object1.y<object1.height/2+object2.height/2 ){

      object1.velocityX=object1.velocityX*(-1)
      object1.velocityY=object1.velocityY*(-1)
      object2.velocityX=object1.velocityX*(-1)
      object2.velocityY=object1.velocityY*(-1)
    }
}