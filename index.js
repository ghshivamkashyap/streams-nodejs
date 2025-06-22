const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 4000;

/// file transfer single piece
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  //   res.setHeader("Content-Type", "text/plain");
  //   res.end("Hello, World!\n");

  const file = fs.readFileSync("100mb-examplefile-com.txt");
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Content-Length", file.length);
  res.end(file);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
