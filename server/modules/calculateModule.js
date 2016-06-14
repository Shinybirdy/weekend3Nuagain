var express = require('express');
var app = express();



var calculateModule = function(){
console.log("something from the module!");
};

calculateModule();
module.exports = calculateModule;
