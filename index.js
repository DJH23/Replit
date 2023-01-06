class Member {
  constructor(name, age, gender, membershipTier) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.membershipTier = membershipTier;
  }

}
//jsfiddle.net

class Club {
  constructor(name, typeOfMusic, capacity, openingTime, closingTime, entranceFee, ageLimit) {
    this.name = name;
    this.ageLimit = ageLimit;
    this.typeOfMusic = typeOfMusic;
    this.capacity = capacity;
    this.openingTime = openingTime;
    this.closingTime = closingTime;
    this.entranceFee = entranceFee;
    // Array of member objects
    this.members = [];
  }

  addMember(member) {
    if (this.ageLimit > member.age) {
      // throw new Error('Can\'t add member to club(Age limit)');
      return false;
    } else {
      this.members.push(member)
      return true;
    }

  }

  removeMember(member) {
    const index = this.members.indexOf(member);
    if (index > -1) { // only splice array when item is found
      this.members.splice(index, 1); // 2nd parameter means remove one item only
    }
  }

}



var c1 = new Club("Apolo", "House", 2000, "11pm", "5am", 20, 25);
var c2 = new Club("Boogy", "Disco", 3000, "10pm", "6am", 10, 21);

var m1 = new Member("Joe", 26, "M", "Gold")
var m2 = new Member("Jane", 22, "F", "Silver")

c1.addMember(m1)
c1.addMember(m2)



console.log(c1.members)