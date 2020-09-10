const { Animal } = require("./Animal");

class Fish extends Animal {
  swim() {
    console.log(this.name + " swimming");
  }
}
exports.Fish = Fish;
