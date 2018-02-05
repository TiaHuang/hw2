//assignment 2a

function setup (){
  createCanvas (340, 340);
}

var x1 = 170

var line1 = 0;
while (line1 < 10) {
  stroke(x1)
  line(x1, x1, random(width), random(height));
  line1 = line1 + 1;
}

