const {Duplex} = require('stream');

class Throttle extends Duplex{
  constructor(ms){
    super();
    this.delay = ms;
  }
  _read(){}
  _write(chunk, endcoding, callback){
    this.push(chunk);
    setTimeout(callback, this.delay);
  }

  _finally(){
    this.push(null);
  }
}

module.exports = Throttle;