//import dependencies
const express = require('express');
const path = require('path');

//initianting the express
const server = express();
server
//using the static files
.use(express.static('public'))

//configure template engines
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

//create a route
.get('/', (request, response) => {    
    return response.render('index')
})

//turn on the server
server.listen(5500)