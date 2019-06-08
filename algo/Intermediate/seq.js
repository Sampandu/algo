// Implement seq in terms of reduceAsync. seq takes an array of functions that return promises, and resolves them one after the other.

// let a = () => Promise.resolve('a')
// let b = () => Promise.resolve('b')
// let c = () => Promise.resolve('c')
// await seq([a, b, c])                  // ['a', 'b', 'c']
// await seq([a, c, b])                  // ['a', 'c', 'b']

const seq = async (...array) => {
  const result = [];
  const promiseArray = array.map(fn => fn());

  Promise.all(promiseArray)
    .then(datas => datas.forEach(e => result.push(e)))
    .catch(err => console.log(err));
  return result;
};

// solution2 that is terms of reduceAsync
let reduceAsync = async (array, fn, value) => {
  for (let a of array) {
    value = fn(value, await a());
  }
  return value;
};

let seq = array => reduceAsync(array, (acc, value) => [...acc, value], []);
