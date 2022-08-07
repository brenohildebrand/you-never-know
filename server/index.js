import http from 'node:http';
import fs from 'node:fs/promises';

const server = http.createServer(async (req, res) => {
  const url = req.url;

  if ( url === '/' ) 
    try {
      const { readFile } = fs;
      const path = './src/interface/index.html';
      const file = await readFile(path, 'utf-8');
      
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(file);
    } catch ( err ) {
      console.log(`The following error ocurred: ${err}`);
    }
  else if ( url === '/index.js' ) 
    try {
      const { readFile } = fs;
      const path = './src/interface/index.js';
      const file = await readFile(path, 'utf-8');

      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.end(file);
    } catch ( err ) {
      console.log(`The following error ocurred: ${err}`);
    }
  else if ( url === '/index.css' ) 
    try {
      const { readFile } = fs;
      const path = './src/interface/index.css';
      const file = await readFile(path, 'utf-8');

      res.writeHead(200, {'Content-Type': 'text/css'});
      res.end(file);
    } catch ( err ) {
      console.log(`The following error ocurred: ${err}`);
    }
  else {
    // Return an error
    // TODO
  }
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server listening on port 3000...');
});