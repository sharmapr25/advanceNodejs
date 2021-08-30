const { createServer } = require("http");
const { stat, createReadStream, createWriteStream } = require("fs");
const { promisify } = require("util");
const multiparty = require('multiparty');

const fileName =
  <FILE_PATH>;
const fileInfo = promisify(stat);

const respondWithVideo = async (req, res) => {
  const { size } = await fileInfo(fileName);
  res.writeHead(200, { "Content-Type": "video/mp4", "Content-Length": size });
  createReadStream(fileName).pipe(res);
};

createServer(async (req, res) => {
  if (req.method == "POST") {
    const form = new multiparty.Form();
    form.on('part', part => {
      part.pipe(createWriteStream(`${part.filename}`))
      .on('close', () => {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(`<h1> File uploaded: ${part.filename} </h1>`)
      })
    })
    form.parse(req);
  } else if (req.url === "/video") {
    respondWithVideo(req, res);
  } else {
    res.writeHead(200, { "Content-Type": "text/HTML" });
    res.end(`
      <form enctype="multipart/form-data" method="POST" action="/">
        <input type="file" name="upload-file" />
        <button>Upload File</button>
      </form>

    `);
  }
}).listen(3000, () => console.log("server is running on port 3000"));
