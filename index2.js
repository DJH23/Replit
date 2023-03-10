
class Room {
  constructor(x, y, height, width) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width
    this.structures = []
  }
  remove() {

  }
  clone() {

  }
}

class Structure {
  constructor(room) {
    this.room = room
  }
}

class Wall extends Structure {
  constructor(room, insideColour, outsideColour) {
    super(room);
    this.insideColour = insideColour;
    this.outsideColour = outsideColour;
  }
}

class Window extends Structure {
  constructor(room, opacity, isOpen) {
    super(room);
    this.opacity = opacity;
    this.isOpen = isOpen;
  }
  close() {
    this.isOpen = false;
  }
  open() {
    this.isOpen = true;
  }
  // isOpen() {
  //getter
  // }
}

class Furniture {
  #height;

  constructor(height, width, colour, type) {
    this.#height = height;
    this.width = width;
    this.colour = colour;
    this._type = type;
  }

  get height() {
    return this.#height;
  }

  get type() {
    return this._type;
  }



  // set type(value) {
  //   this._type = value;
  // }


  // Encapsulation
  setHeight(newHeight) {
    if (newHeight > 3) {
      return false;
    }
    this.#height = newHeight;
    return true;
  }

  getHeight() {
    return this.#height;
  }

}

class Couch extends Furniture {
  constructor(height, width, colour, type, material, numSeats) {
    super(height, width, colour, type);
    this.material = material;
    this._numSeats = numSeats;
  }
  get numSeats() {
    return this._numSeats;
  }
  set numSeats(numSeats) {
    if (numSeats < 2) {
      throw new Error('numSeats must be greater than one to be a couch');
    }
    this._numSeats = numSeats;
  }
}

var c1 = new Couch(100, 50, "red", "Chaise Lounge", "fabric", 3);
console.log(c1.numSeats);
c1.numSeats = 1;
console.log(c1.numSeats);











