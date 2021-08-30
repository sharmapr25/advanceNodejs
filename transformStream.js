/*
transform stream convert data that passed from readstream to writestream
In given example replaceText is a transformstream that is going to replace all typed character to XX
*/

const {Transform} = require('stream');

class ReplaceText extends Transform{
  constructor(char){
    super()
    this.replaceChar = char;
  }

  _transform(chunk, encoding, callback){
    const transformChunk = chunk.toString().replace(/[a-z]|[A-Z]|[0-9]/g, this.replaceChar);
    this.push(transformChunk);
    callback();
  }

  //flush won't get called as it will get called when remaining data has been flushed
  _flush(callback){
    this.push('more stuff is being passed....');
    callback();
  }
}
const xStream = new ReplaceText('XX');
process.stdin.pipe(xStream).pipe(process.stdout);


