var s,s1;
function setup() {
  createCanvas(800,400);
 s = createSprite(400, 200, 80, 80);
  s.shapeColor = "green";
  s.debug = true;
  s1 = createSprite(600, 200, 80, 150);
  s1.shapeColor = "orange";
  s1.debug = true;
}

function draw() {
  background("blue");
  s1.x = mouseX;
  s1.y = mouseY;
  if(s1.x - s.x < s1.width/2 + s.width/2 &&
     s.x - s1.x < s1.width/2 + s.width/2 && 
     s1.y - s.y < s1.height/2 + s.height/2 && 
     s.y - s1.y < s1.height/2 + s.height/2 ){
    s.shapeColor = "red";
    s1.shapeColor = "red";

  }  
  else{
    s.shapeColor = "green";
    s1.shapeColor = "orange";  
  }
  drawSprites();
}