class Animal {
  name;
  constructor(name) {
    this.name = name;
  }
  eat() {
      console.log(this.name+ " eating")
  }
}

exports.Animal = Animal;
