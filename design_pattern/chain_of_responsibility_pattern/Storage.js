class Storage{
  constructor(name, inventory, delieveryTime=0){
    this.name = name;
    this.inventory = inventory;
    this.delieveryTime = delieveryTime;
    this.next = null;
  }

  setNext(storage){
    this.next = storage;
  }

  lookInLocalInventory(itemName){
    return this.inventory.find((item) => item.name == itemName);
  }
  find(itemName){
    const found = this.lookInLocalInventory(itemName);
    if(found){
      return {
        name:found.name,
        qty: found.qty,
        location: this.name,
        delieveryTime: (this.delieveryTime == 0) ? 'now': `${this.delieveryTime} day(s)`
      }
    }
    return this.next.find(itemName);
  }
}

module.exports = Storage;