const {writeFile, unlink, existsSync, readFileSync} = require('fs');

class LocalStorage{
  constructor(){
    if(existsSync('localstorage.json')){
      var text = readFileSync('localstorage.json');
      this.items = JSON.parse(text);
    }else{
      this.items = {};
    }

  }

  getItem(key){
    return this.items[key];
  }

  setItem(key, value){
    this.items[key] = value;
    writeFile('localstorage.json', JSON.stringify(this.items), error=> {
      if(error){
        console.log(error);
      }
    });
  }

  clear(){
    this.items = {};
    unlink('localstorage.json', ()=> {
      console.log('local storage file removed')
    })
  }

}

module.exports = new LocalStorage();