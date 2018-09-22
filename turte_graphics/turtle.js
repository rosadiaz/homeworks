class Turtle {
  constructor (x,y) {
    this.x = x;
    this.y = y;
    this.position = [x,y];
    this.path = [[x,y]];
    this.direction = "x";
  }
  
  forward(steps) {
    if (this.direction === "x") {
      this.x += steps;
      this.position = [this.x, this.y];
      this.path.push(this.position);
    } else if (this.direction === "-y") {
      this.y -= steps;
      this.position = [this.x, this.y];
      this.path.push(this.position);
    } else if (this.direction === "-x") {
      this.x -= steps;
      this.position = [this.x, this.y];
      this.path.push(this.position);
    } else if (this.direction === "y") {
      this.y += steps;
      this.position = [this.x, this.y];
      this.path.push(this.position);
    }
    return this.position
  }

  right() {
    if (this.direction === "x" ){
      this.direction = "-y";
    } else if (this.direction === "-y") {
      this.direction = "-x";
    } else if (this.direction === "-x") {
      this.direction = "y";
    }
    return this.direction;
  }
}

console.log('🐢 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾 🐾')
const tommy = new Turtle(0,0);
console.log(`Tommy the turtle started at ${tommy.position}`);
console.log(`Tommy move forward 3`)
tommy.forward(3);
console.log(`He is now at ${tommy.position}`);
console.log(`Tommy turn right!`);
tommy.right();
console.log(`He will now advance in ${tommy.direction}`);
console.log(`Tommy move forward 2`)
tommy.forward(2);
console.log(`He is now at ${tommy.position}`);
console.log(`Tommy turn right!`);
tommy.right();
console.log(`He will now advance in ${tommy.direction}`);
console.log(`Tommy move forward 3`)
tommy.forward(3);
console.log(`He is now at ${tommy.position}`);
console.log(`Tommy turn right!`);
tommy.right();
console.log(`He will now advance in ${tommy.direction}`);
console.log(`Tommy move forward 2`)
tommy.forward(2);
console.log(`He is now at ${tommy.position}`);
console.log(tommy.path);
