// Node Server
var express = require('express');
var app = express();
var path = require('path');//part of #3
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded( { extended: false } );

var calculateModule = require('./modules/calculateModule');

// #1-set up server - this works
var server=app.listen( 8080, 'localhost', function(req,res){
// sniff out the port on which our server is running
  var port = server.address().port;
  console.log( 'server is on ' + port + ', darling...');
});//end of app.listen

app.use(express.static("public"));//error - app.use()requires middleware functions :(

// index & base url route - this works!
app.get( '/', function( req, res ){
  console.log("app.get index Yes");
  res.sendFile( path.resolve( 'server/public/views/index.html' ) );

 });//end index route
 //does stuff without ajax //browser only does GET

app.post('/pathPost', urlencodedParser, function( req, res ){
    console.log('req.body' + req.body);
    calculateModule(req.body);
    res.write("hello from calculateModule");
    res.end();
  });
