const inventory = require('./inventory.json');
const Store = require('./Store');

const skiShop = new Store('Steep and Deep', inventory);
var searchItems = 'ski hats';

const result = skiShop.find(searchItems);

console.log('result is', result);


const skiBootsFound = skiShop.find('ski poles');

console.log(skiBootsFound);