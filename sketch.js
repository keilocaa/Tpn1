
let angle = 0;
const squareSize = 100;

function setup() {
  createCanvas(600, 600);
  var keila = 100
  let angle = 0;
}

function draw() {
  background(250);

  line(50, 50, 550, 550);
  line(50, 550, 50, 550);
  rect(300, 300, 100, 100);
  strokeWeight(15)
  strokeJoin( ROUND)

rect(200, 200, 100,100, 360)
ellipse(1, 1, 300, 300);
  ellipse(600, 600, 300, 300);
  triangle (300,300, 350, 350, 450,450);
  push ()
translate (100,100)
  rotate (frameCount/50)
    rect(-250, -250, 100,100)
  pop()
  if (mouseIsPressed) {
    push();
    translate(100, 100);
      rotate (frameCount/50)
    rect(-300, -300, 100, 100); 
    pop();
  }
  



}