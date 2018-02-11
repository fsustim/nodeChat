const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket)=> {
    console.log('New user connected');

    var ctime = new Date().toTimeString();
    // New Message - Custom event
    socket.emit('newMessage', {
        from: "Duffy",
        text: "Feed me",
        createdAt: ctime
    });

    socket.on('newMessage', (message) => {
        console.log('Server - message was sent: ' + message.from);
        console.log('Server - message was sent: ' + message.text);
    });

    socket.on('disconnect', () => {
        console.log('User has disconnected...');
    })
})

server.listen(port, ()  => {
    console.log(`Server has started on port ${port}`);
});
