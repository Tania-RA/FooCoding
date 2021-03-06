'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(arr) {
  const myNewArray3 = [];
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr[i].length; ++j) {
      myNewArray3.push(arr[i][j]);
    }
  }
  const flatArray = [].concat(...myNewArray3);
  return flatArray;
}

function flattenArray3d(arr) {
  const myNewArray3 = [];
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr[i].length; ++j) {
      myNewArray3.push(arr[i][j]);
    }
  }
  const flatArray = [].concat(...myNewArray3);
  return flatArray;
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};
