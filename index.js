class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    });
    this.length += 1;
  }

  get(pos) {
    if (pos >= this.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
       return Math.max(...this.items);
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
       return Math.min(...this.items);
    }
  }

  sum() {
    let result = 0;
      for (let i = 0; i < this.items.length; i++) {
        result += this.items[i];
      }
      return result;
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
    let result = 0;
      for (let i = 0; i < this.items.length; i++) {
        result += this.items[i] / this.items.length;
      }
      return result;
  }
  }

}

module.exports = SortedList;
