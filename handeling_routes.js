var http=require('http');
var routings=require('./routing');


var path=require('path');
var express =require('express');
var app=express();
 app.use(express.static(path.join(__dirname, 'public')));


// app.set('views', __dirname + '/views');
// app.set('view engine', 'html');
// app.use(express.static(path.join(__dirname, 'public')));


// app.get('/index', function(req, res){
//     res.render('../views/index.html');
// });
http.createServer(routings.handleRequest).listen(7100);