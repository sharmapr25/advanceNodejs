/*
import { createWriteStream } from 'stream';
import { createReadStream } from 'stream';
Duplex stream implements read and write stream both. They allow data to pass through.
Here's an example of PassThrough duplex stream that we are using for getting total byte report
Another duplex stream throttle that we are going to use for delay passing through data for 100ms
*/

const { PassThrough } = require('stream');
const {createWriteStream, createReadStream} = require('fs');
const Throttle = require('./throttle');

//I have used mp4 file as they are big files
const inputFilePath = <INPUT_FILE_PATH>;
const outFilePath = <OUTPUT_FILE_PATH>;

const readStream = createReadStream(inputFilePath);
const writeStream = createWriteStream(outFilePath);

const report = new PassThrough();
const throttle = new Throttle(100);

report.on("data", (chunk) => {
  console.log(`bytes: ${chunk.length}`);
})

readStream.pipe(throttle).pipe(report).pipe(writeStream);


