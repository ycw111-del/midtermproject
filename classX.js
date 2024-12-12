// Shape class
class Shape {
    constructor(x, y, size, dx, dy, type, col) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.dx = dx;
      this.dy = dy;
      this.type = type;
      this.col = col;
    }
  
    move() {
      this.x += this.dx;
      this.y += this.dy;
  
      // Bounce off the walls
      if (this.x < 0 || this.x > width) this.dx *= -1;
      if (this.y < 0 || this.y > height) this.dy *= -1;
    }
  
    draw() {
      fill(this.col);
      noStroke();
      if (this.type === 'ball') {
        ellipse(this.x, this.y, this.size);
      } else if (this.type === 'rectangle') {
        rect(this.x, this.y, this.size, this.size);
      }
    }
  }
  
  
