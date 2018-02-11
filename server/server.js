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
    // See io.emitt below
    // New Message - Custom event
    /*
    socket.emit('newMessage', {
        from: "Duffy",
        text: "Feed me",
        createdAt: ctime
    }); */

    socket.on('createMessage', (message) => {
        console.log('Server - message was sent: ' + message.from);
        console.log('Server - message was sent: ' + message.text);

        // io sends to everyone
        io.emit('newMessage', {
            from :message.from,
            text: message.text,
            createAt : new Date().toTimeString()
        });
    });

    socket.on('disconnect', () => {
        console.log('User has disconnected...');
    })
})

server.listen(port, ()  => {
    console.log(`Server has started on port ${port}`);
});
