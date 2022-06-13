'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// in f1 the value of val changes to 10 however, x remains the same as it is an example of pass by value of primitive values
// in f2 the reference value which is y.x changes to 10, and is an example of pass by value of reference values
