function setup() {
    createCanvas(942, 638);
}

function draw() {
  background("#ffffff");
  fill("#e61874");
  noStroke();
  rect(0, 35, 290, 374);
  ellipse(145, 542, 290, 190);

  fill("#bf1360");
  quad(278, 40, 460, 0, 491, 368, 308, 408);
  push();
  translate(390, 518);
  rotate(0.7);
  ellipse(0, 0, 250, 180);
  pop();

  fill("#900b46");
  quad(474, 32, 680, 0, 701, 374, 495, 404);
  push();
  translate(590, 511);
  rotate(0.8);
  ellipse(0, 0, 200, 180);
  pop();

  fill("#610127");
  quad(700, 25, 938, 25, 938, 408, 700, 408);
  push();
  translate(812, 524);
  rotate(0.1);
  ellipse(0, 0, 254, 190);
  pop();

}
