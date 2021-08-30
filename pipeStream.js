const { createWriteStream } = require("fs");

const writeStream = createWriteStream('./a.txt');

process.stdin.pipe(writeStream);