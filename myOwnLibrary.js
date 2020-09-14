// the function will make the two sprites bounce off each other
function bounceOff (object1, object2){

    if (object1.x - object2.x < (object1.width + object2.width)/2 &&
        object2.x - object1.x < (object1.width + object2.width)/2){
        
          object1.velocityX = object1.velocityX * (-1)
          object2.velocityX = object2.velocityX * (-1)
  
    }
    
  
    if (object1.y - object2.y < (object1.height + object2.height)/2 &&
        object2.y - object1.y < (object1.height + object2.height)/2){
  
          object1.velocityY = object1.velocityY * (-1)
          object2.velocityY = object2.velocityY * (-1)
  
    }
  
  }

  // this checks if the two sprites are touching or not, and giving a reply
  function isTouching(sprite1, sprite2){

    if (sprite1.x - sprite2.x < (sprite1.width + sprite2.width)/2 &&
    sprite2.x - sprite1.x < (sprite2.width + sprite1.width)/2 &&
    sprite1.y - sprite2.y < (sprite1.height + sprite2.height)/2 &&
    sprite2.y - sprite1.y < (sprite2.height + sprite1.height)/2){
  
      return true;
  
  }
  
  else {
  
  return false;
  
  }
  
  }