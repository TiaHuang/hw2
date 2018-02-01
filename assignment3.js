//assignment 3

background(60);
colorMode(HSB);
noStroke();

while(true) {
  background(0, 0, 60, 0.1);
  fill(random(60), 255, 255);
    beginShape(TRIANGLES)
  vertex(random(width), random(height));
  vertex(random(width), random(height));
  vertex(random(width), random(height));
  vertex(random(width), random(height));
  vertex(random(width), random(height));
  vertex(random(width), random(height));
  vertex(random(width), random(height));
    endShape();
}
