class Iterator {
  constructor(items) {
    this.items = items;
    this.index = 0;
  }

  first() {
    const [item, ...restItems] = this.items;
    return item;
  }

  last() {
    const [item, ...restItems] = [...this.items].reverse();
    return item;
  }

  hasNext() {
    return this.index < this.items.length - 1;
  }

  current() {
    return this.items[this.index];
  }

  next() {
    if(this.hasNext()){
      this.index += 1;
    }
    return this.current();
  }

  prev() {
     if (this.index !== 0) {
       this.index -= 1;
     }
     return this.current();
  }
}

module.exports = Iterator;