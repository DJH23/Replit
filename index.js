class Mobile {
  constructor(accType, device, number) {
    this._accType = accType;
    this._device = device;
    this._number = number;
    this._balance = 0.0;
    this.CALL_COST = 0.245;
    this.TEXT_COST = 0.078;
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
    if (this._balance < this.CALL_COST * minutes) {
      console.log("Insufficient credit to make call. Please add more credit.");
    } else {
      this._balance -= this.CALL_COST * minutes;
      console.log("Call made. New balance: €" + this._balance.toFixed(2));
    }
  }

  // Send text function
   sendText() {
    if (this._balance < this.TEXT_COST) {
      console.log("Insufficient credit to send text. Please add more credit.");
    } else {
      this._balance -= this.TEXT_COST;
      console.log("Text sent. New balance: €" + this._balance.toFixed(2));
    }
  }
}

let jimMobile = new Mobile("Monthly", "Samsung Galaxy S6", "0771222334")
console.log("Account Type: " + jimMobile.accType + "\nMobile Number: " + jimMobile.number + "\nDevice: " + jimMobile.device + "\nBalance: €" + jimMobile.balance);

jimMobile.accType = "PAYG";
jimMobile.device = "iPhone 6S";
jimMobile.number = "07713334466";
jimMobile.balance = 15.50;

console.log("Account Type: " + jimMobile.accType + "\nMobile Number: " + jimMobile.number + "\nDevice: " + jimMobile.device + "\nBalance: €" + jimMobile.balance);

console.log(jimMobile.addCredit(10.0));
console.log(jimMobile.makeCall(5));
console.log(jimMobile.sendText(2));
