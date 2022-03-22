const express = require('express');
const pagerouter = express.Router();
const path = require('path');


pagerouter.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/home/home.html'));
});
/*

Pages curently unavaliable

pagerouter.get('/about', function(req, res){
    res.sendFile(path.join(__dirname, '/about/about.html'));
});

pagerouter.get('/examples', function(req, res){
    res.sendFile(path.join(__dirname, '/examples/examples.html'));
});

pagerouter.get('/keepalive', function(req, res){
    res.sendFile(path.join(__dirname, '/about/about.html'));
});
*/

module.exports = pagerouter;