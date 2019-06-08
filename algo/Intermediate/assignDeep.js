// assignDeep - Like Object.assign, but merges objects deeply. For the sake of simplicity, you can assume that objects can contain only numbers and other objects (and not arrays, functions, etc.).

// assignDeep({ a: 1 }, {})              // { a: 1 }
// assignDeep({ a: 1 }, { a: 2 })        // { a: 2 }
// assignDeep({ a: 1 }, { a: { b: 2 } }) // { a: { b: 2 } }
// assignDeep({ a: { b: { c: 1 }}}, { a: { b: { d: 2 }}, e: 3 })
// // { a: { b: { c: 1, d: 2 }}, e: 3 }

const assignDeep = (obj1, ...sources) => {
  for (let source of sources) {
    for (let key in source) {
      if (isObject(source[key])) {
        if (!isObject(obj1[key])) {
          obj1[key] = {};
        }
        assignDeep(obj1[key], source[key]);
      } else {
        obj1[key] = source[key];
      }
    }
  }
  return obj1;
};

function isObject(obj) {
  return typeof obj === 'object' && obj !== null && !Array.isArray(obj);
}
