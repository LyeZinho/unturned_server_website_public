const express = require('express');
const datarouter = express.Router();
const path = require('path');

datarouter.get('/imgsrc/:imagesrc', function(req, res){
    res.sendFile(path.join(__dirname, '/img/' + req.params.imagesrc));
});


/*
Pages curently unaval
datarouter.get('/home/css', function(req, res){
    res.sendFile(path.join(__dirname, '/home/style.css'));
});

datarouter.get('/about/css', function(req, res){
    res.sendFile(path.join(__dirname, '/about/style.css'));
});

datarouter.get('/examples/css', function(req, res){
    res.sendFile(path.join(__dirname, '/examples/style.css'));
});
*/

module.exports = datarouter;