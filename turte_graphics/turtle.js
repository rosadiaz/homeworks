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
    for (let position of path) {

    }
  }
}

console.log('🐢 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾')
// const tommy = new Turtle(0,0);
// console.log(`Tommy the turtle started at ${tommy.position}`);
// console.log(`Tommy move forward 3`)
// tommy.forward(3);
// console.log(`He is now at ${tommy.position}`);
// console.log(`Tommy turn right!`);
// tommy.right();
// console.log(`He will now advance in ${tommy.direction}`);
// console.log(`Tommy move forward 2`)
// tommy.forward(2);
// console.log(`He is now at ${tommy.position}`);
// console.log(`Tommy turn LEFT!`);
// tommy.left();
// console.log(`He will now advance in ${tommy.direction}`);
// console.log(`Tommy move forward 3`)
// tommy.forward(3);
// console.log(`He is now at ${tommy.position}`);
// console.log(`Tommy turn right!`);
// tommy.right();
// console.log(`He will now advance in ${tommy.direction}`);
// console.log(`Tommy move forward 2`)
// tommy.forward(2);
// console.log(`He is now at ${tommy.position}`);
// console.log(tommy.path);

const tommy = new Turtle(0, 0).forward(3).right().forward(2).left().forward(3).right().forward(2);
// console.log(`[ [ 0, 0 ], [ 3, 0 ], [ 3, -2 ], [ 6, -2 ], [ 6, -4 ] ]`);
console.log('Tommy starts at (0,0), moves forward 3, turns right, moves forward 2, turns lef, moves forward 3, turns right, moves forward 2. He should finish at (6,-4)')
console.log(tommy);

// //This turtle begins at position (0, 4), then moves forward 3 steps to (3, 4)
// //then turns right (facing north), then moves 3 steps to (3, 1).
// console.log('Start at -> 0,4, move forward 3 -> (3,4) turn right, move 3 -> (3,1)')
// console.log(new Turtle(0, 4).forward(3).right().forward(3));

