const inventory = require('./inventory.json');
const Store = require('./Store');

const skiShop = new Store('Steep and Deep', inventory.floor);
var searchItems = 'ski hats';

const result = skiShop.find(searchItems);

console.log(result);