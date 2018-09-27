class Turtle {
  constructor(initialX, initialY) {
    this.position = {x: initialX, y: initialY}
    this.path = [];
    this.addPoint();
    this.direction = "x";
    this.maxY = -Infinity;
    this.minY = Infinity;
    this.maxX = -Infinity;
    this.minX = Infinity;
  }

  addPoint() {
    this.path.push(Object.assign({}, this.position))
  }

  forward(steps) {
    for (let i = 0; i < steps; i++) {
      if (this.direction == "x") {
        this.position.x++;
      } else if (this.direction === "-y") {
          this.position.y--;
      } else if (this.direction === "-x") {
        this.position.x--;
      } else {
        this.position.y++;
      }
      this.path.push({x: this.x, y: this.y});
      this.addPoint();
    }
    return this;
  }

  right() {
    switch (this.direction) {
      case "x":
        this.direction = "-y";
        break;
      case "y":
        this.direction = "x";
        break;
      case "-x":
        this.direction = "y";
        break;
      case "-y":
        this.direction = "-x";
        break;
      default:
        return this;
      }
    return this;
  }

  left() {
    switch (this.direction) {
      case "x":
        this.direction = "y";
        break;
      case "-y":
        this.direction = "x";
        break;
      case "-x":
        this.direction = "-y";
        break;
      case "y":
        this.direction = "-x";
        break;
      default:
        return this;
    }
    return this;
  }

  canvasSize() {
    for (let position of this.path) {
      if (position.y > this.maxY) {
        this.maxY = position.y;
      }
    }
    for (let position of this.path) {
      if (position.y < this.minY) {
        this.minY = position.y;
      }
    }
    for (let position of this.path) {
      if (position.x > this.maxX) {
        this.maxX = position.x;
      }
    }
    for (let position of this.path) {
      if (position.x < this.minX) {
        this.minX = position.x;
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
          return point.x == x && point.y == y;
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
