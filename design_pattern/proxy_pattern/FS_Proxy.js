class FS_Proxy{
  constructor(fs_subject){
    this.fs = fs_subject;
  }

  readFile(filePath, encoding, callback){
      if(!filePath.match(/.md$|.MD$/)){
        callback(new Error(`Can only read markdown files..`))
      }else{
        this.fs.readFile(filePath, encoding, callback);
      }
  }

}

module.exports = FS_Proxy