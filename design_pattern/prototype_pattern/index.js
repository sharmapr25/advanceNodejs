const scout_prototype = require("./scout_prototype");

/*
Replaced
alex.addItemToList('camping knife');
alex.addItemToList("tent");
alex.addItemToList("backpack");

and

eve.addItemToList("camping knife");
eve.addItemToList("tent");
eve.addItemToList("backpack");

with prototype pattern
*/
const alex = scout_prototype.clone();
alex.addItemToList("slingshot");

const eve = scout_prototype.clone();
eve.addItemToList("reading light");

console.log(`${alex.name}: ${alex.shoppingList}`)
console.log(`${eve.name}: ${eve.shoppingList}`);
