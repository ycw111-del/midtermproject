let shapes = [];
let letterOffset = 0;

function setup() {
  createCanvas(800, 600);

  // Initialize shapes
  for (let i = 0; i < 10; i++) {
    let shape = {
      x: random(width),
      y: random(height),
      size: random(20, 50),
      dx: random(-3, 3),
      dy: random(-3, 3),
      type: random(['ball', 'rectangle']),
      col: color(random(255), random(255), random(255))
    };
    shapes.push(shape);
  }
}

function draw() {
  background(30); // Dark background

  // Draw and move shapes
  for (let shape of shapes) {
    moveShape(shape);
    drawShape(shape);
  }

  // Draw moving letters
  drawLetters();
}

function moveShape(shape) {
  shape.x += shape.dx;
  shape.y += shape.dy;

  // Bounce off the walls
  if (shape.x < 0 || shape.x > width) shape.dx *= -1;
  if (shape.y < 0 || shape.y > height) shape.dy *= -1;
}

function drawShape(shape) {
  fill(shape.col);
  noStroke();
  if (shape.type === 'ball') {
    ellipse(shape.x, shape.y, shape.size);
  } else if (shape.type === 'rectangle') {
    rect(shape.x, shape.y, shape.size, shape.size);
  }
}

function drawLetters() {
  textSize(50);
  textAlign(CENTER, CENTER);
  fill(255);
  noStroke();
  let textStr = "Yuecheng Wei";
  let xStart = width / 2 - (textStr.length * 25); // Center alignment for text
  for (let i = 0; i < textStr.length; i++) {
    let x = xStart + i * 50;
    let y = height / 2 + sin((frameCount + i * 10) * 0.1) * 30; // Wave motion
    text(textStr[i], x, y);
  }
}

// Add a new shape when the mouse is clicked
function mousePressed() {
  let newShape = {
    x: mouseX,
    y: mouseY,
    size: random(20, 50),
    dx: random(-3, 3),
    dy: random(-3, 3),
    type: random(['ball', 'rectangle']),
    col: color(random(255), random(255), random(255))
  };
  shapes.push(newShape);
}
