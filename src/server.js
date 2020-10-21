//import dependencies
const express = require('express');

//initianting the express
const server = express();

//create a route
server.get('/', () => {
    console.log('Oi')
})

//turn on the server
server.listen(5500)