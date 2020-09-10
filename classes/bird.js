const { Animal } = require("./Animal");

class Bird extends Animal {
  fly() {
    console.log(this.name + " flying");
  }
  Eat(meals) {
    console.log(this.name + " eating " + meals + " meals");
  }
}
exports.Bird = Bird;
