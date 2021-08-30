/*
range request is require if we are running video streaming on safari especially
safari generally return accepted bytes limitation with req
*/

const { createServer } = require("http");
const { stat, createReadStream } = require("fs");
const { promisify } = require("util");
const fileName = <FILE_PATH>;
const fileInfo = promisify(stat);

createServer(async (req, res) => {
  const { size } = await fileInfo(fileName);
  const range = req.headers.range;
  if(range){
    let [start, end] = range.replace(/bytes=/, '').split('-');
    start = parseInt(start);
    end = end ? parseInt(end): size-1;
    res.writeHead(206, {
        "Content-Range": `bytes ${start}-${end}/${size}`,
        "Accept-Range": 'bytes',
        "Content-Type": "video/mp4",
        "Content-Length": (end - start)+1
      });
    createReadStream(fileName, {start, end}).pipe(res);

  }
  else{
    res.writeHead(200, { "Content-Type": "video/mp4", "Content-Length": size });
    createReadStream(fileName).pipe(res);
  }

}).listen(3000, () => console.log("server is running on port 3000"));

