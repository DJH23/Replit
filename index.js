class Mobile {
  static CALL_COST = 0.245;
  static TEXT_COST = 0.078;


  constructor(accType, device, number) {
    this._accType = accType;
    this._device = device;
    this._number = number;
    this._balance = 0.0;

  }

  // Getter for account type
  get accType() {
    return this._accType;
  }
  // Setter for account type
  set accType(accType) {
    this._accType = accType;
  }
  // Getter for device
  get device() {
    return this._device;
  }
  // Setter for device
  set device(device) {
    this._device = device;
  }
  // Getter for number
  get number() {
    return this._number;
  }
  // Setter for number
  set number(number) {
    this._number = number;
  }
  // Getter for balance
  get balance() {
    return this._balance.toFixed(2);
  }
  // Setter for balance
  set balance(balance) {
    this._balance = balance;
  }

  //Methods

  // Add credit function
  addCredit(amount) {
    this._balance += amount;
    console.log("€" + amount + " added successfully. New balance: €" + this._balance.toFixed(2));
  }

  // Make call function
  makeCall(minutes) {
    if (this._balance < Mobile.CALL_COST * minutes) {
      console.log("Insufficient credit to make call. Please add more credit.");
    } else {
      this._balance -= Mobile.CALL_COST * minutes;
      console.log("Call made. New balance: €" + this._balance.toFixed(2));
    }
  }

  // Send text function
  sendText() {
    if (this._balance < Mobile.TEXT_COST) {
      console.log("Insufficient credit to send text. Please add more credit.");
    } else {
      this._balance -= Mobile.TEXT_COST;
      console.log("Text sent. New balance: €" + this._balance.toFixed(2));
    }
  }

  showInfo() {
    console.log("Account Type: " + this.accType + "\nMobile Number: " + this.number + "\nDevice: " + this.device + "\nBalance: €" + this.balance);
  }

}

let jimMobile = new Mobile("Monthly", "Samsung Galaxy S6", "0771222334")
let JoesMobile = new Mobile("Monthly", "iPhone", "0221264234")
JoesMobile.CALL_COST;

jimMobile.showInfo();

jimMobile.accType = "PAYG";
jimMobile.device = "iPhone 6S";
jimMobile.number = "07713334466";
jimMobile.balance = 15.50;

jimMobile.showInfo();

jimMobile.addCredit(10.0);
jimMobile.makeCall(5)
jimMobile.sendText(2);

/* class Employee {
  constructor(employeeName, currentSalary) {
    this.name = employeeName;
    this.salary = currentSalary;
  }
  getName() {
    return this.name;
  }
  getSalary() {
    return this.salary.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }
  raiseSalary(percent) {
    this.salary += this.salary * percent / 100;
  }
  tax() {
    let tax = 0;
    if (this.salary <= 18200) {
      tax = 0;
    } else if (this.salary <= 37000) {
      tax = (this.salary - 18200) * 0.19;
    } else if (this.salary <= 90000) {
      tax = 3572 + (this.salary - 37000) * 0.325;
    } else if (this.salary <= 180000) {
      tax = 20797 + (this.salary - 90000) * 0.37;
    } else {
      tax = 54096 + (this.salary - 180000) * 0.45;
    }
    return tax.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }
}

const employee = new Employee("Darren Heath", 9000);
console.log(`Name: ${employee.getName()}`);
console.log(`Salary: ${employee.getSalary()}`);
employee.raiseSalary(10);
console.log(`Salary after raise: ${employee.getSalary()}`);
console.log(`Tax: ${employee.tax()}`);

const employee2 = new Employee("Pouya The Greatest", 125000);
console.log(`Name: ${employee2.getName()}`);
console.log(`Salary: ${employee2.getSalary()}`);
employee2.raiseSalary(20);
console.log(`Salary after raise: ${employee2.getSalary()}`);
console.log(`Tax: ${employee2.tax()}`); */

/*
class Car {
  constructor(fuelEfficiency) {
    this.fuelEfficiency = fuelEfficiency;
    this.fuelAmount = 0;
    this.totalMiles = 0;
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

  printFuelCost() {
    return FUEL_COST.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) + ` per gallon`;
  }

  getFuelEfficiency(){
    return this.fuelEfficiency
  }

  addFuel(gallons) {
    this.fuelAmount += this.convertToLitres(gallons);
    return this.calcCost(this.fuelAmount);
  }

  calcCost(fuelAmount) {
    return (fuelAmount * FUEL_COST).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

  convertToLitres(gallons) {
    return gallons * 4.546;
  }

  drive(miles) {
    const gallons = miles / this.fuelEfficiency;
    this.fuelAmount -= this.convertToLitres(gallons);
    this.totalMiles += miles;
    return {cost: this.calcCost(this.convertToLitres(gallons)), newTotalMiles: this.totalMiles};
  }

  setFuelAmount(amount){
    this.fuelAmount = amount
    return this.fuelAmount
  }
}

const FUEL_COST = 1.385;

const car = new Car(30);
console.group("Car_1\n");
console.log(`Starting Fuel in tank: ${car.getFuelAmount()} litres`);
console.log(`Starting Miles driven: ${car.getTotalMiles()} miles`);
console.log(`Fuel cost: ${car.printFuelCost()}`);
console.log(`Fuel efficiency: ${car.getFuelEfficiency()} miles per gallon`);
console.log(`Adding 10 gallons of fuel: ${car.addFuel(10)}`);
console.log(`New fuel in tank: ${car.getFuelAmount()} litres`);
console.log(`Driving 100 miles cost: ${car.drive(100).cost}`);
console.log(`New fuel in tank: ${car.getFuelAmount()} litres`);
console.log(`New total Miles driven: ${car.getTotalMiles()} miles`);
console.groupEnd();
console.log();

const car2 = new Car(78);
console.group("Car_2\n");
console.log(`Starting Fuel in tank: ${car2.setFuelAmount(55)} litres`);
console.log(`Starting Miles driven: ${car2.setTotalMiles(14653)} miles`);
console.log(`Fuel cost: ${car2.printFuelCost()}`);
console.log(`Fuel efficiency: ${car2.getFuelEfficiency()} miles per gallon`);
console.log(`Adding 14 gallons of fuel: ${car2.addFuel(14)}`);
console.log(`New fuel in tank: ${car2.getFuelAmount()} litres`);
console.log(`Driving 236 miles cost: ${car2.drive(236).cost}`);
console.log(`New fuel in tank: ${car2.getFuelAmount()} litres`);
console.log(`New total Miles driven: ${car2.getTotalMiles()} miles`);
console.groupEnd(); */