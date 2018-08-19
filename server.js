const express = require('express');
var socketIo = require('socket.io');
var http = require('http');
var app = express();
var port = process.env.PORT || 3000;
var server = http.createServer(app);
app.use(express.static('public'));
var io = socketIo(server);

io.on('connection', (socket) => {
 
   socket.on('connect', () => {
       console.log('user connected');
   });
    socket.on('color', (data) => {
       socket.broadcast.emit('upd', data);
        console.log('message sent');
    });
    
    
});

server.listen(port);

