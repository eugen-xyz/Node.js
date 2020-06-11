'use strict';



const express = require('express');
const https = require('https')
const fs = require('fs')

const app = express();

const hostname = 'localhost';
const port = '3000';

const server = https.createServer({
	key: fs.readFileSync('cert/server.key'),
	cert: fs.readFileSync('cert/server.crt')
}, app);

server.listen(port, () => {
	console.log(`Node server running at https://${hostname}:${port}/`);
});



app.get('/', function (req, res) {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.send('This Node.js is running on docker with https. Please commit these files. TEST');
});


