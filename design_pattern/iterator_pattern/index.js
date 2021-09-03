const readline = require('readline');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);


process.stdin.on('keypress', (string, key) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  if(key.name == 'c' && key.ctrl){
    process.exit();
  }else{
    process.stdout.write(key.name);
  }

})