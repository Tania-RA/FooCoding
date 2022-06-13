'use strict';

function Dog() {
  this.name = 'Dido';
  this.color = 'blue';
  this.numLegs = 4;
}

const hound = new Dog();
hound.name = 'brownie';
hound.color = 'black';
console.log(hound);

// Do not change or remove anything below this line
module.exports = hound;
