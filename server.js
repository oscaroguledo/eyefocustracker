const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
  console.log('request-made:', `'${req.url}', '${req.method}'`);
  
})

server.listen(3000,'localhost',()=>{
    console.log('server is running on port 3000');
})