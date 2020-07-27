let log = console.log


// classes are NOT hoisted to the top of scope like javascript variables and 
// function are, therefore you need to declare them before they are used. 
let mixin = {
  madeIn() {
    log('this car was made in year 2019!')
  }
}

let carMixin = {
  __proto__: mixin,
  madeIn() {
    super.madeIn();
  }
}
// Classes are automatically in STRICT mode
class Car {
  // constructor builds the object for us. 
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }

  carStats() {
    return `This car has ${this.doors} doors, a ${this.engine} engine and a beautiful ${this.color} color!`;
  }

  // STATIC METHODS are used for the class itself, but not for instances of the class created. 
  static totalDoors(car1, car2) {
    const doors1 = car1.doors;
    const doors2 = car2.doors;

    return doors1 + doors2
  }
}



class SUV extends Car {
  constructor(doors, engine, color, brand, carStats) {
    // SUPER allows us to bring everything in we need from parent class. 
    super(doors, engine, color, carStats);
    // Everything not brought in will have to be initialized with "this."
    this.brand = brand;
    this.wheels = 4
    this.ac = true;
    // Assign mixin from above
    Object.assign(this, carMixin)
  }

  myBrand() {
    return console.log(`this SUV is a ${this.brand}`)
  }
}



const cx5 = new SUV(4, 'V6', 'grey', 'mazda');
const civic = new Car(3, 'v4', 'blue');

console.log(cx5);
console.log(cx5.myBrand())
console.log(cx5.carStats());
// How to fire off a STATIC METHOD
console.log(Car.totalDoors(cx5, civic))

log(cx5.madeIn())


