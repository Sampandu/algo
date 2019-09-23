//solution1: using factory function
/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
  this.map = [];
};

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
  const hashCode = this.hashing(key);
  this.map[hashCode] = value;
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
  const hashCode = this.hashing(key);
  return this.map[hashCode] >= 0 ? this.map[hashCode] : -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
  const hashCode = this.hashing(key);
  delete this.map[hashCode];
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

//using polynomial to build up hash function
MyHashMap.prototype.hashing = function(key) {
  key = key.toString();
  let hash = 0,
    x = 51;
  for (let i = 0; i < key.length; i++) {
    hash = hash * x + key.charCodeAt(i);
  }
  return hash;
};

// solution2: using class
class MyHashMap {
  constructor() {
    this.map = [];
  }

  put(key, value) {
    const hashcode = this.hashing(key, value);
    this.map[hashcode] = value;
  }

  get(key) {
    const hashcode = this.hashing(key);
    return this.map[hashcode] >= 0 ? this.map[hashcode] : -1;
  }

  remove(key) {
    const hashcode = this.hashing(key);
    delete this.map[hashcode];
  }

  hashing(key) {
    key = key.toString();
    let hash = 0,
      x = 53;
    for (let i = 0; i < key.length; i++) {
      hash = hash * x + key.charCodeAt(i);
    }
    return hash;
  }
}
