let img;

function preload() {
  img = loadImage('5.1-Camille_Pissarro Cropped.jpg');
}

function setup() {
  createCanvas(800, 533);
  img.loadPixels();
  noLoop();
}

function draw() {
  background(255);

  let shapeSize = 10;
  let imgHeight = img.height;
  let imgWidth = img.width;

  for (let y = 0; y < imgHeight; y += shapeSize) {
    for (let x = 0; x < imgWidth; x += shapeSize) {
      let index = (y * imgWidth + x) * 4;
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      let a = img.pixels[index + 3];

      fill(r, g, b, a);
      noStroke();

      if (random(1) < 0.5) {
        ellipse(x, y, shapeSize, shapeSize);
      } else {
        rect(x, y, shapeSize, shapeSize);
      }
    }
  }
}
