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
  constructor(insideColour, outsideColour) {
    this.insideColour = insideColour;
    this.outsideColour = outsideColour;
  }
}

class Window extends Structure {
  constructor(opacity, isOpen) {
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
    this.type = type;
  }
  // getters and setters
  getType() {
    return this.type;
  }

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

var f1 = new Furniture(1, 2, "red", "chair");

result = f1.setHeight(2)
console.log(result)
console.log(f1.getHeight())










