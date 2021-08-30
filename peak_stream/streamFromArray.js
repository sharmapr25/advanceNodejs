const {Readable} = require('stream');

class StreamFromArray extends Readable{
  constructor(array){
    super({objectMode: true})
    this.array = array;
    this.index = 0;
  }

  _read(){
    if(this.index <= this.array.length){
      const chunk = this.array[this.index];
      this.push({data:chunk, index: this.index});
      this.index += 1;
    }
    else{
      this.push(null);
    }
  }
}

module.exports = StreamFromArray;