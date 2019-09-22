//solution1: using map and array instead of map and double link list
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.cache = {};
  this.usage = []; //least used elements are on the left side, most used elements are on the right side
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!(key in this.cache)) {
    return -1;
  }

  const value = this.cache[key];
  const idx = this.usage.indexOf(key);
  this.usage.splice(idx, 1);
  this.usage.push(key);
  return value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  //if the key exits, update the cache and the usage only
  if (key in this.cache) {
    this.cache[key] = value;
    const idx = this.usage.indexOf(key);
    this.usage.splice(idx, 1);
    this.usage.push(key);
    return;
  }

  if (this.usage.length >= this.capacity) {
    const idx = this.usage.shift();
    delete this.cache[idx];
  }
  this.cache[key] = value;
  this.usage.push(key);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
