//import dependencies
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

//initianting the express
const server = express();
server
//using the static files
.use(express.static('public'))

//configure template engines
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

//application routes
.get('/', pages.index)
.get('/create-orphanage', pages.createOrphanage)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)

//turn on the server
server.listen(5500)