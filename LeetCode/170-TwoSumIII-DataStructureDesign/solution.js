class TwoSum {
  constructor() {
    this.map = {};
  }

  add(number) {
    if (number in this.map) {
      this.map[number]++;
    } else {
      this.map[number] = 1;
    }
  }

  find(value) {
    for (const num in this.map) {
      const diff = value - num;
      if (diff in this.map) {
        if (diff !== num || this.map[diff] > 1) {
          return true;
        }
      }
    }
    return false;
  }
}
