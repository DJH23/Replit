//OOP
//Inheritance

class Vehicle {
  constructor(yearOfFabrication, colour, maxSpeed) {
    this.yearOfFabrication = yearOfFabrication;
    this.colour = colour;
    this.maxSpeed = maxSpeed;
  }

  tune() {
    this.maxSpeed *= 1.1;
  }
}

class Car extends Vehicle {
  constructor(yearOfFabrication, colour, maxSpeed, engine, transmission) {
    super(yearOfFabrication, colour, maxSpeed);
    this.engine = engine;
    this.transmission = transmission;
  }
}

class ElectricCar extends Car {
  constructor(yearOfFabrication, colour, maxSpeed, engine, transmission, batteryPower) {
    super(yearOfFabrication, colour, maxSpeed, engine, transmission);
    this.batteryPower = batteryPower;
  }

  // Overridding
  tune() {
    this.maxSpeed *= 1.05;
  }

}



var v1 = new Vehicle(1998, "red", 150);
var v2 = new Vehicle(1999, "blue", 180);

var v3 = new Vehicle(2008, "blue", 20);

// v2.tune()
// console.log(v2.maxSpeed);

var c1 = new Car(1999, "black", 185, "petrol", "M")
c1.tune()
console.log(c1.maxSpeed)


var ec1 = new ElectricCar(1999, "black", 185, "petrol", "M", 20000)
ec1.tune()
console.log(ec1.maxSpeed)