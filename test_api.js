const http = require('http');
http.get({host:'localhost',port:3001,path:'/candidates'}, res => {
  console.log('code', res.statusCode);
  res.on('data', () => {});
}).on('error', e => console.log('err', e.message));
