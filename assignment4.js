//assignment 4a
function setup() {
  createCanvas (340, 340);
  background (255);
}
 
setup();

strokeWeight(5);
stroke = 50;

line (120, 0, 120, 340);
line (280, 0, 280, 340);
fill(255, 0, 0); //red
rect (50, 50, random(width), random(height));
line (0, 30, 340, 30);
line (0, 280, 340, 280);
rect (120, 160, random(width), random(height));
rect (160, 330, random(width), random(height));
line (0, 120, 340, 120);
line (160, 0, 160, 340);
line (240, 0, 240, 340);

fill(255, 204, 0); //yellow
rect (30, 330, random(width), random(height));
rect (240, 120, random(width), random(height));
line (50, 0, 50, 340);
line (330, 0, 330, 340);
rect (330, 30, random(width), random(height));

line (0, 300, 340, 300);
line (0, 330, 340, 330);
line (20, 0, 20, 340);

fill(0, 80, 220); //blue
rect (random(width), random(height), random(width), random(height));
rect (random(width), random(height), random(width), random(height));
rect (random(width), random(height), random(width), random(height));

//frame
strokeWeight(20);
stroke = 50;
line (340, 340, 340, 0);
line (0, 340, 340, 340);
line (0, 0, 0, 340);
line (340, 0, 0, 0);


//assignment 4b

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
  background(0, 0, 255, 0.3);
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