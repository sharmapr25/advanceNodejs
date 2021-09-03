const CatalogGroup = require("./CatalogGroup");
const CatalogItem = require("./CatalogItem");

const boots = new CatalogItem("Leather Boots", 79.99);
const sneakers = new CatalogItem("Kicks", 39.99);
const flipFlops = new CatalogItem("California wook boots", 19.99);


const groupShoes = new CatalogGroup('shoes', [boots, sneakers, flipFlops]);


console.log(`shoes total: ${groupShoes.total}`);
console.log(`boots total: ${boots.total}`);
boots.print();
sneakers.print();
groupShoes.print();

