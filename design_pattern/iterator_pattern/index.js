const readline = require('readline');
const InventoryItem = require('./InventoryItem');
const Iterator = require('./Iterator');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

var inventory = [
  new InventoryItem('Poles', 9.99),
  new InventoryItem('Skis', 799.99),
  new InventoryItem('Boots', 799.99),
  new InventoryItem('Burgers', 5.99),
  new InventoryItem('Fries', 2.99),
  new InventoryItem('Shake', 4.99),
]

const iterator = new Iterator(inventory);


process.stdin.on('keypress', (string, key) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  switch (key.name) {
    case "left":
      iterator.prev().writeLn();
      break;
    case "right":
      iterator.next().writeLn();
      break;
    case "up":
      iterator.first().writeLn();
      break;
    case "down":
      iterator.last().writeLn();
      break;
    case 'c':
      if(key.ctrl){
        process.exit()
      }
  }
})