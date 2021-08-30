const {createReadStream, createWriteStream} = require('fs');

const readStream = createReadStream('<filepath>');
const writeStream = createWriteStream("<filepath>", { highWaterMark: 310725 });

readStream.on('data', (chunk) => {
  const result = writeStream.write(chunk);
  if(!result){
    console.log('breakpressure');
    readStream.pause();
  }

})

readStream.on('end', ()=>{
  writeStream.end();
})

writeStream.on('drain', () => {
  console.log('drained');
  readStream.resume()
})
writeStream.on('close', () => {
  process.stdout.write('file copied!');
})
