const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function makeUnique(arr) {
  const set = [...new Set(arr)];

  return set;
}

const uniqueValues = makeUnique(values);
console.log(uniqueValues);
