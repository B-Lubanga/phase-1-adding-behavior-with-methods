class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound.`;
  }
}

class Cat extends Animal {
  speak() {
    return `${this.name} says meow!`;
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name} says woof!`;
  }
}

class Bird extends Animal {
  constructor(name, isParrot = false) {
    super(name);
    this.isParrot = isParrot;
  }

  speak() {
    if (this.isParrot) {
      return `It's me! ${this.name}, the parrot!`;
    } else {
      return `${this.name} says Squawk!`;
    }
  }
}

// Example Usage:
const bird1 = new Bird("Polly", true);
console.log(bird1.speak()); // "It's me! Polly, the parrot!"

const bird2 = new Bird("Mable");
console.log(bird2.speak()); // "Mable says squawk!"
