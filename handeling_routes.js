
const http = require('http');
const fs = require('fs');

const file = (fileName) => fs.createReadStream(fileName, 'utf-8');

http
  .createServer((req, res) => {
    if (req.url.startsWith('/style.css')) {
      res.setHeader('Content-Type', 'text/css');
      file('./public/css/style.css').pipe(res);
    }

    if (req.url.startsWith('/admin')) {
      if (req.url === '/admin?role=admin') {
        file('./views/home.html').pipe(res);
      } else {
        file('./views/login.html').pipe(res);
      }
    } else if (req.url === '/') {
      file('./views/index.html').pipe(res);
    } else if (req.url === '/recent') {
      file('./views/recent.html').pipe(res);
    }
    else if (req.url === '/login') {
        file('./views/login.html').pipe(res);
      }
  })
  .listen(3000);