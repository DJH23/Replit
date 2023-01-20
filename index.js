function convertToLitres(gallons) {
  return gallons * 4.546;
}

class Car {
  static FUEL_COST = 1.385;

  constructor(fuelEfficiency) {
    this.fuelEfficiency = fuelEfficiency;
    this.fuelAmount = 0;
    this.totalMiles = 0;
  }

  static printFuelCost() {
    return Car.FUEL_COST.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) + ` per gallon`;
  }

  static calcCost(fuelAmount) {
    return (fuelAmount * Car.FUEL_COST).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

  getFuelAmount() {
    return Math.round(this.fuelAmount);
  }

  getTotalMiles() {
    return this.totalMiles;
  }

  setTotalMiles(miles) {
    this.totalMiles = miles;
    return this.totalMiles
  }

  getFuelEfficiency() {
    return this.fuelEfficiency
  }

  addFuel(gallons) {
    this.fuelAmount += convertToLitres(gallons);
    return Car.calcCost(this.fuelAmount);
  }

  drive(miles) {
    const gallons = miles / this.fuelEfficiency;
    this.fuelAmount -= convertToLitres(gallons);
    this.totalMiles += miles;
    return { cost: Car.calcCost(convertToLitres(gallons)), newTotalMiles: this.totalMiles };
  }

  setFuelAmount(amount) {
    this.fuelAmount = amount
    return this.fuelAmount
  }
}



const c1 = new Car(30);
console.group("Car_1\n");
console.log(`Starting Fuel in tank: ${c1.getFuelAmount()} litres`);
console.log(`Starting Miles driven: ${c1.getTotalMiles()} miles`);
console.log(`Fuel cost: ${Car.printFuelCost()}`);
console.log(`Fuel efficiency: ${c1.getFuelEfficiency()} miles per gallon`);
console.log(`Adding 10 gallons of fuel: ${c1.addFuel(10)}`);
console.log(`New fuel in tank: ${c1.getFuelAmount()} litres`);
console.log(`Driving 100 miles cost: ${c1.drive(100).cost}`);
console.log(`New fuel in tank: ${c1.getFuelAmount()} litres`);
console.log(`New total Miles driven: ${c1.getTotalMiles()} miles`);
console.groupEnd();
console.log();

const c2 = new Car(78);
console.group("Car_2\n");
console.log(`Starting Fuel in tank: ${c2.setFuelAmount(55)} litres`);
console.log(`Starting Miles driven: ${c2.setTotalMiles(14653)} miles`);
console.log(`Fuel cost: ${Car.printFuelCost()}`);
console.log(`Fuel efficiency: ${c2.getFuelEfficiency()} miles per gallon`);
console.log(`Adding 14 gallons of fuel: ${c2.addFuel(14)}`);
console.log(`New fuel in tank: ${c2.getFuelAmount()} litres`);
console.log(`Driving 236 miles cost: ${c2.drive(236).cost}`);
console.log(`New fuel in tank: ${c2.getFuelAmount()} litres`);
console.log(`New total Miles driven: ${c2.getTotalMiles()} miles`);
console.groupEnd(); 