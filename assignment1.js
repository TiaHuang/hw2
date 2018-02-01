//assignment 1

function setup (){
  createCanvas (340, 340);
}
    
var lines = 0;
while (lines < 10) {
  line(random(width), random(height), random(width), random(height));
  lines = lines + 1;
}
