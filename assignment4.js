//assignment 4a
function setup() {
  createCanvas (340, 340);
  background (255);
}
 
setup();

strokeWeight(5);
stroke = 50;

var a = random(width)
var b = random(height)
var c = 340 - a - b


fill(255, 0, 0); //red
rect (0, a, b, c);
rect (b, a, b, c);
fill (255); //white
fill(255, 204, 0); //yellow
rect (c, c, a, b);
fill(0, 80, 220); //blue
rect (c, c, b, a);
fill(255, 204, 0); //yellow
rect (a, a, b, c);
fill(255, 0, 0); //red
rect (a, b, b, c);
rect (b, b, a, c);
fill (255); //white
rect (b, b, c, a);
fill(0, 80, 220); //blue
rect (a, b, b, b);
rect (a, c, b, c);
fill(255, 0, 0); //red
rect (c, b, a, c);
fill (255); //white
rect (b, b, a, b);
rect (a, c, c, c);
fill(0, 80, 220); //blue
rect (c, b, b, c);
fill(255, 204, 0); //yellow
rect (c, b, a, b);
fill (255); //white
rect (a, c, b, c);
fill(255, 0, 0); //red
rect (c, b, a, c);

//frame
strokeWeight(15);
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
