import http from 'node:http';
import fs from 'node:fs';

const dir = '/home/brenoh1ldebr4nd/github/you-never-know';

const server = http.createServer();

server.on('request', (req, res) => {
  const { url } = req;

  console.log('url:', url);
  switch (url) {
    case '/':
      fs.readFile(`${dir}/app/dist/index.html`, 'utf-8', (err, buffer) => {
        if(err) console.log(err);

        res
        .writeHead(200)
        .end(buffer);
      })
      break;
    case '/index.js':
      fs.readFile(`${dir}/app/dist/index.js`, 'utf-8', (err, buffer) => {
        if ( err ) console.log(err);

        res
        .writeHead(200)
        .end(buffer);
      })
      break;
  }
});

server.listen(3000);