// Node Server
var express = require('express');
var app = express();
var path = require('path');//part of #3
var bodyParser = require('body-parser');
//module and my files

//var calculateModule = require('/modules/calculateModule.js');
//var index = require('/routes/index');
var urlencodedParser = bodyParser.urlencoded( { extended: false } );

// #1-set up server - this works
var server=app.listen( 8080, 'localhost', function(){
// sniff out the port on which our server is running
  var port = server.address().port;
  console.log( 'server is on ' + port + ', darling...');
});//end of app.listen

// #2-base URL - this works
app.get('/', function(req,res){
  console.log('base url recvd hit');
  res.writeHead(200);
  res.write("hey!baseurl");
  res.end();
});//end of base app.get

// index route - this works!
app.get( '/index', function( req, res ){
  console.log("app.get index Yes");

  res.sendFile( path.resolve( 'views/index.html' ) );
  res.write('does the index stuff work?');
  res.end();
 });//end index route

app.use('express.static("public")');//error - app.use()requires middleware functions :(

// #4 get route for get form output
 app.get('/pathGet', function( req, res ){
  res.write( calculateModule + 'RECEIVED SOMETHING: ' + req.query.inputName );
  res.end();
});//end of app.get/pathget

app.post('/pathPost', urlencodedParser, function( req, res ){
  var calculateModule = require('/modules/calculateModule');
    res.write("hello from calculateModule");
    res.end();

 // var fromModule = additionMod( req.body.inputColor );
 // res.write( "post received something: " + fromModule );
 //  res.end();
 });
