const Storage = require("./Storage");

class Store{
  constructor(name, inventory=[]) {
    this.name = name;
    this.inventory = inventory;
    // const floor = new Storage('store floor', inventory.floor);
    // this.current = floor;
  }

  find(itemName){
    return this.inventory.find(item => itemName == item.name) ;
  }

}

module.exports = Store;