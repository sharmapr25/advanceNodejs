const Shopper = require('./shopper');

const scout_prototype = new Shopper();
scout_prototype.addItemToList("camping knife");
scout_prototype.addItemToList("tent");
scout_prototype.addItemToList("backpack");

module.exports = scout_prototype;
