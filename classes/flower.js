const { Plant } = require("./plant");

class Flower extends Plant {
  color;
  constructor(color, height) {
    super();
    this.color = color;
    this.height = height;
  }
  smells() {
    console.log(this.color+" flower smelles good and the height "+this.height+"m");
  }
}
exports.Flower = Flower
