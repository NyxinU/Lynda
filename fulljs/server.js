import express from 'express';
import config from './config';
const server = express();

server.get('/', (req, res) => {
  res.send('hello!\n');
});

server.get('/about.html', (req, res) => {
  res.send('ABOUT!\n');
});

server.listen(config.port, () => { // second arguement is a sucess handler
  console.info('express is listening on port: ', config.port);
});











// import config, {nodeEnv} from './config'; //import modules, destructure if importing non default export  

// import https from 'https';
// import { log } from 'util';

// https.get('https://www.lynda.com', res => {
//   console.log('====================================');
//   console.log('response status code: ', res.statusCode);
//   console.log('====================================');

//   res.on('data', chunk => {
//     console.log(chunk.toString()); // chunk is the html that is returned
//   });
// });

// use http module as server 
// import http from 'http';

// const server = http.createServer((req, res) => {
//   res.write('Hello HTTP!\n');
//   setTimeout(() => {
//     res.write('I can stream!\n');
//     res.end;
//   }, 3000);
// });

// server.listen(8080);
