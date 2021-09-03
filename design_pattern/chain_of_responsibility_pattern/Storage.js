class Storage{
  constructor(name, inventory){
    this.name = name;
    this.inventory = inventory;
  }

  find(itemName){
    return this.inventory.find((item) => item.name == itemName);
  }
}

module.exports = Storage;