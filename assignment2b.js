//assignment 2b

function setup (){
  createCanvas (340, 340);
}

var x1 = 170
    
var line2 = 0;
while (line2 < 10) {
  stroke(x1+x1)
  line(random(width), random(height), random(x1, x1+x1), random(0, x1));
  line2 = line2 + 1;
}
