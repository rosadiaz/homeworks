
class Turtle {
  constructor (x,y) {
    this.x = x;
    this.y = y;
    this.position = [x,y]
  }
  
  forward(steps) {
    this.position = [(this.x + steps), this.y];
    return this.position
  }
}

console.log('🐢 🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾')
const tommy = new Turtle(3,3);
console.log(`Tommy the turtle is at ${tommy.position}`);
tommy.forward(3);
console.log(`He is now at ${tommy.position}`);
