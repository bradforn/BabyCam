"use strict";

/**
* Run this on a raspberry pi 
* then browse (using google chrome/firefox) to http://[pi ip]:8080/
*/


var port = process.env.PORT || 4000;

const http    = require('http');
const express = require('express');


const WebStreamerServer = require('./lib/raspivid');

const app  = express();

  //public website
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/vendor/dist'));

const server  = http.createServer(app);
const silence = new WebStreamerServer(server);



server.listen(port);



console.log("Server is now running on port " + port + "...........");


