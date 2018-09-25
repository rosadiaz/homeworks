class Turtle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.position = [x, y];
    this.path = [[x, y]];
    this.direction = "x";
  }

  forward(steps) {
    for (let i = 0; i < steps; i++) {
      if (this.direction === "x") {
        this.x++;
      } else if (this.direction === "-y") {
          this.y--;
      } else if (this.direction === "-x") {
        this.x--;
      } else {
          this.y++;
      }
      this.position = [this.x, this.y];
      this.path.push(this.position);
    }
    return this;
  }

  right() {
    if (this.direction === "x") {
      this.direction = "-y";
    } else if (this.direction === "-y") {
      this.direction = "-x";
    } else if (this.direction === "-x") {
      this.direction = "y";
    } else {
      this.direction = "x";
    }
    return this;
  }

  left() {
    if (this.direction === "x") {
      this.direction = "y";
    } else if (this.direction === "-y") {
      this.direction = "x";
    } else if (this.direction === "-x") {
      this.direction = "-y";
    } else {
      this.direction = "-x";
    }
    return this;
  }

  print() {
    const full = '\u2588';
    const empty = " ";
    let maxY = -Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let minX = Infinity;
  
    // find the highest coordinate on Y axis to begin drawing
    for (let position of this.path) {
      if (position[1] > maxY) {
        maxY = position[1];
      }
    }
    //find the lowest coordinate on Y axis to end drawing
    for (let position of this.path) {
      if (position[1] < minY) {
        minY = position[1];
      }
    }
    //find the width of the drawing with maxX and minX
    for (let position of this.path) {
      if (position[0] > maxX) {
        maxX = position[0];
      }
    }
    for (let position of this.path) {
      if (position[0] < minX) {
        minX = position[0];
      }
    }

    console.log(`Drawing top-left: (${maxY}, ${minX}), bottom-right: (${maxX}, ${minY})`)

    // draw each line
    let drawing = "";
    for (let y = maxY; y >= minY; y--) { // 0 --> -4
      let row = "";
      for (let x = minX; x <= maxX; x++) { // 0 --> 6
        const match = this.path.find(points => {
          return points[0] == x && points[1] == y;
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

console.log(' ')
console.log('🐢 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 Tommy goes for a walk ...')

const tommy = new Turtle(0, 4).forward(3).left().forward(3).right().forward(5).right().forward(8).right().forward(5).right().forward(3).left().forward(3).print();
// console.log(tommy.path);
// console.log(tommy.print());