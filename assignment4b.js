//assignment 4b

function setup() {
  createCanvas (340, 340);
  background (255);
}
 
setup();

strokeWeight(5);
stroke = 50;



background(255);
colorMode(HSB);
strokeWeight(5);
stroke = 50;

var lines = 0
while (lines < 15) {
  line (340, random(height), 0, random(height));
  line (random(width), 340, random(width), 0);
  line (340, random(height), random(width), 0);
  line (0, random(height), random(width), 340);
  lines = lines + 1;
  background(0, 0, 255, 0);
  fill(random(80), 50, 50);
    ellipse(random(width), random(height), random(width), random(height));
}

//frame
strokeWeight(20);
stroke = 50;
line (340, 340, 340, 0);
line (0, 340, 340, 340);
line (0, 0, 0, 340);
line (340, 0, 0, 0);
