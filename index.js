class Member {
  constructor(name, age, gender, membershipTier) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.membershipTier = membershipTier;
  }
}

class Club {
  constructor(name, typeOfMusic, capacity, openingTime, closingTime, entranceFee) {
    this.name = name;
    this.typeOfMusic = typeOfMusic;
    this.capacity = capacity;
    this.openingTime = openingTime;
    this.closingTime = closingTime;
    this.entranceFee = entranceFee;
    // Array of member objects
    this.members = [];
  }

}



// var c1 = new Club("Apolo", "House", 2000, "11pm", "5am", 20);
// var c2 = new Club("Boogy", "Disco", 3000, "10pm", "6am", 10);

var m1 = new Member("Joe", 25, "M", "Gold")
var m2 = new Member("Jane", 23, "F", "Silver")

m5 = m1;
m9 = m1;

