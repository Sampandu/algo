/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
  this.set = [];
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
  const hashcode = this.hashing(key);
  this.set[hashcode] = key;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
  const hashcode = this.hashing(key);
  delete this.set[hashcode];
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
  const hashcode = this.hashing(key);
  return this.set[hashcode] >= 0 ? true : false;
};

MyHashSet.prototype.hashing = function(key) {
  key = key.toString();
  let hash = 0,
    x = 53;
  for (let i = 0; i < key.length; i++) {
    hash = hash * x + key.charCodeAt(i);
  }
  return hash;
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
