class Turtle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.position = [x, y];
    this.path = [[x, y]];
    this.direction = "x";
  }

  forward(steps) {
    if (this.direction === "x") {
      this.x += steps;
    } else if (this.direction === "-y") {
      this.y -= steps;
    } else if (this.direction === "-x") {
      this.x -= steps;
    } else if (this.direction === "y") {
      this.y += steps;
    }
    this.position = [this.x, this.y];
    this.path.push(this.position);
    return this;
  }

  right() {
    if (this.direction === "x") {
      this.direction = "-y";
    } else if (this.direction === "-y") {
      this.direction = "-x";
    } else if (this.direction === "-x") {
      this.direction = "y";
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
    }
    return this;
  }

  print(path) {
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

    //draw each line
    // let drawing = "";
    // for (let x = minX; x <= maxX; x++) {
    //   for (let y = minY; y <= maxY; y++) {
    //     console.log(x,y);
    //     function exists (coordinate, x, y) {
    //       return coordinate === [x,y];
    //     }

    //     if (this.path.each(exists)) {
    //       drawing += `${full}`;
    //     } else {
    //       drawing += `${empty}`;
    //     }
    //   }
    //   console.log(drawing);
    // }
  }
}

console.log(' ')
console.log('🐢 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾')

const tommy = new Turtle(0, 0).forward(3).right().forward(2).left().forward(3).right().forward(2);
console.log('Tommy starts at (0,0), moves forward 3, turns right, moves forward 2, turns lef, moves forward 3, turns right, moves forward 2. He should finish at (6,-4)')
console.log(tommy.path);
console.log(tommy.print(tommy.path));
