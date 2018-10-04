class Turtle {
  constructor(initialX, initialY) {
    this.x = initialX;
    this.y = initialY;
    this.path = [[this.x, this.y]];
    this.direction = 0;
    this.maxY = -Infinity;
    this.minY = Infinity;
    this.maxX = -Infinity;
    this.minX = Infinity;
  }

  forward(steps) {
    for (let i = 0; i < steps; i++) {
      if (this.direction == 0) {
        this.x++;
      } else if (this.direction == 90) {
          this.y++;
      } else if (this.direction == 180) {
        this.x--;
      } else {
        this.y--;
      }
      this.path.push([this.x, this.y]);
    }
    return this;
  }

  right() {
    this.direction -= 90;
    if (this.direction < 0) {
      this.direction = 270;
    }
    return this;
  }

  left() {
    this.direction += 90;
    if (this.direction == 360) {
      this.direction = 0;
    }
    return this;
  }

  canvasSize() {
    for (let position of this.path) {
      if (position[1] > this.maxY) {
        this.maxY = position[1];
      }
    }
    for (let position of this.path) {
      if (position[1] < this.minY) {
        this.minY = position[1];
      }
    }
    for (let position of this.path) {
      if (position[0] > this.maxX) {
        this.maxX = position[0];
      }
    }
    for (let position of this.path) {
      if (position[0] < this.minX) {
        this.minX = position[0];
      }
    }
    return (this);
  }
  print() {
    const full = "\u2588";
    const empty = " ";
    this.canvasSize();

    for (let y = this.maxY; y >= this.minY; y--) {
      let row = "";
      for (let x = this.minX; x <= this.maxX; x++) {
        const match = this.path.find(point => {
          return point[0] == x && point[1] == y;
        });
        if (match) { 
          row += full;
        } else {
          row += empty;
        }
      }
      console.log(row);
    }
  }
}

console.log("\n 🐢 🐾 🐾 🐾 🐾  ... Tommy goes for a walk ...🐾 🐾 🐾 🐾 🐾 🐾\n")

new Turtle(0, 4).
forward(3).
left().
forward(3).
right().
forward(5).
right().
forward(8).
right().
forward(5).
right().
forward(3).
left().
forward(3).
print();
