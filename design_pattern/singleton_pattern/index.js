const logger = require("./logger");
const Shopper = require("./shopper");
const Store = require("./store");

logger.log('starting app...');

const shopper = new Shopper('alex', 500);
const store = new Store('Steep and deep supplies', [
  {item: 'Downhill skills', 'price': 20, 'quantity': 2},
  {item: 'hat', 'price': 50, 'quantity': 3}
])

logger.log('finished config...')
console.log(`${logger.count} logs counts`)
logger.logs.map(log => console.log(log.message));