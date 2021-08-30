const {createServer} = require('http');
const {stat, createReadStream } = require('fs');
const {promisify} = require('util');
const fileName = <FILE_NAME>;
const fileInfo = promisify(stat);

createServer(async(req, res) => {
  const { size } = await fileInfo(fileName);
  res.writeHead(200, {'Content-Type': 'video/mp4', 'Content-Length': size})
  createReadStream(fileName).pipe(res);
}).listen(3000, () => console.log('server is running on port 3000'));
